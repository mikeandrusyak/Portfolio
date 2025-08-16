import type { NextApiRequest, NextApiResponse } from 'next';

// Deprecated: This legacy API used to serve local exported HTML from /content.
// The project embeds now use the remote proxy at /api/projects/remote.
// Keeping this file to avoid 404s during transition; responds with 410 Gone.
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(410).json({ error: 'Deprecated route. Use /api/projects/remote instead.' });
}
