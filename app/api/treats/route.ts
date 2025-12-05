import { NextRequest, NextResponse } from 'next/server';
import Redis from 'ioredis';

const getRedis = () => {
    if (!process.env.REDIS_URL) {
        throw new Error("REDIS_URL is not defined");
    }
    return new Redis(process.env.REDIS_URL);
};

export async function GET() {
    try {
        const redis = getRedis();
        const treats = await redis.get('treats');
        await redis.quit();
        return NextResponse.json({ count: parseInt(treats || '0') });
    } catch (error: any) {
        console.error('Redis Error:', error);
        // Return dummy data if redis fails locally to not break the UI
        return NextResponse.json({ count: 404, error: "Redis not connected" }, { status: 200 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json().catch(() => ({}));
        const { name, message } = body;

        const redis = getRedis();
        const treats = await redis.incr('treats');
        await redis.quit();

        // Send notification if keys are present
        if (process.env.RESEND_API_KEY && process.env.ADMIN_EMAIL && process.env.FROM_EMAIL) {
            try {
                const { Resend } = await import('resend');
                const resend = new Resend(process.env.RESEND_API_KEY);

                const { data, error } = await resend.emails.send({
                    from: process.env.FROM_EMAIL,
                    to: process.env.ADMIN_EMAIL,
                    subject: `🐶 Honey got a treat from ${name || 'Someone'}!`,
                    html: `
                        <h2>Honey received a treat! 🦴</h2>
                        <p><strong>From:</strong> ${name || 'Anonymous'}</p>
                        <p><strong>Message:</strong> ${message || 'No message left.'}</p>
                        <hr />
                        <p><strong>Total Treats:</strong> ${treats}</p>
                    `
                });

                if (error) {
                    console.error('Resend API Error:', error);
                } else {
                    console.log('Treat notification sent!', data);
                }
            } catch (emailError) {
                console.error('Failed to send email notification:', emailError);
                // Don't fail the request if email fails
            }
        } else {
            console.log('Skipping email notification: Missing environment variables');
        }

        return NextResponse.json({ count: treats });
    } catch (error: any) {
        console.error('Redis Error:', error);
        return NextResponse.json({ error: 'Failed to increment treats', details: error.message }, { status: 500 });
    }
}
