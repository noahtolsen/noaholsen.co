import Redis from 'ioredis';

export default async function handler(request, response) {
  const redis = new Redis(process.env.REDIS_URL);

  if (request.method === 'GET') {
    try {
      const treats = await redis.get('treats');
      await redis.quit();
      return response.status(200).json({ count: parseInt(treats) || 0 });
    } catch (error) {
      console.error('Redis Error:', error);
      await redis.quit();
      return response.status(500).json({ error: 'Failed to fetch treats', details: error.message });
    }
  }

  if (request.method === 'POST') {
    try {
      const treats = await redis.incr('treats');
      await redis.quit();
      return response.status(200).json({ count: treats });
    } catch (error) {
      console.error('Redis Error:', error);
      await redis.quit();
      return response.status(500).json({ error: 'Failed to increment treats', details: error.message });
    }
  }

  await redis.quit();
  return response.status(405).json({ error: 'Method not allowed' });
}
