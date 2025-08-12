import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const injectedCss = `
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const slugStr = Array.isArray(slug) ? slug[0] : slug;

  if (!slugStr) {
    res.status(400).json({ error: 'Missing slug' });
    return;
  }

  try {
    const filePath = path.join(process.cwd(), 'content', 'projects', slugStr, 'index.html');
    const raw = fs.readFileSync(filePath, 'utf-8');
    const html = raw.includes('</head>') ? raw.replace('</head>', `${injectedCss}\n</head>`) : `${injectedCss}${raw}`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (err) {
    res.status(404).json({ error: `HTML for project '${slugStr}' not found` });
  }
}
