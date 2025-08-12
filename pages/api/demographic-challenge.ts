import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
  // Read moved content from content/projects/demographic-challenge/index.html
  const filePath = path.join(process.cwd(), 'content', 'projects', 'demographic-challenge', 'index.html');
    const raw = fs.readFileSync(filePath, 'utf-8');
    const css = `
<style>
  /* Center images and figures */
  img, figure, .figure, .plot, .html-widget, .plotly, .highcharts-container { display: block; margin-left: auto; margin-right: auto; }
  p > img { display: block; margin-left: auto; margin-right: auto; }
  figure figcaption, .caption, .figure > p.caption { text-align: center; }
  /* Center iframes (htmlwidgets) and keep responsive */
  iframe { display: block; margin: 1rem auto; max-width: 100%; }
  /* Center tables */
  table { margin-left: auto; margin-right: auto; }
</style>`;
    const html = raw.replace('</head>', `${css}\n</head>`);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (err) {
  res.status(404).json({ error: 'demographic-challenge content not found' });
  }
}
