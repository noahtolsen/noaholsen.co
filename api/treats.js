import { kv } from '@vercel/kv';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    try {
      const treats = await kv.get('treats');
      return response.status(200).json({ count: treats || 0 });
    } catch (error) {
      console.error('KV Error:', error);
      return response.status(500).json({ error: 'Failed to fetch treats', details: error.message });
    }
  }

  if (request.method === 'POST') {
    try {
      const treats = await kv.incr('treats');
      return response.status(200).json({ count: treats });
    } catch (error) {
      console.error('KV Error:', error);
      return response.status(500).json({ error: 'Failed to increment treats', details: error.message });
    }
  }

  return response.status(405).json({ error: 'Method not allowed' });
}
