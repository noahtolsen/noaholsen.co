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

export async function POST() {
    try {
        const redis = getRedis();
        const treats = await redis.incr('treats');
        await redis.quit();
        return NextResponse.json({ count: treats });
    } catch (error: any) {
        console.error('Redis Error:', error);
        return NextResponse.json({ error: 'Failed to increment treats', details: error.message }, { status: 500 });
    }
}
