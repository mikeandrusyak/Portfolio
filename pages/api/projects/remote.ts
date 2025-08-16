import type { NextApiRequest, NextApiResponse } from 'next';

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const urlParam = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;
  if (!urlParam || typeof urlParam !== 'string') {
    res.status(400).json({ error: 'Missing url query parameter' });
    return;
  }

  try {
    const target = new URL(urlParam);
    if (target.protocol !== 'https:') {
      res.status(400).json({ error: 'Only https URLs are allowed' });
      return;
    }

    // Allowlist remote hosts for safety. Extend as needed.
    const allowedHosts = new Set<string>([
      'mikeandrusyak.github.io',
    ]);
    if (!allowedHosts.has(target.host)) {
      res.status(400).json({ error: `Host not allowed: ${target.host}` });
      return;
    }

    const resp = await fetch(target.toString(), { redirect: 'follow' });
    if (!resp.ok) {
      res.status(502).json({ error: `Upstream responded ${resp.status}` });
      return;
    }
    const raw = await resp.text();

    // Compute base href so relative assets resolve correctly
    const baseDir = target.pathname.endsWith('/')
      ? `${target.origin}${target.pathname}`
      : `${target.origin}${target.pathname.replace(/[^/]+$/, '')}`;
    const baseTag = `<base href="${baseDir}">`;

    let html = raw;
    const headOpenRegex = /<head[^>]*>/i;
    if (headOpenRegex.test(html)) {
      html = html.replace(headOpenRegex, (m) => `${m}\n${baseTag}\n${injectedCss}`);
    } else if (html.includes('</head>')) {
      html = html.replace('</head>', `${baseTag}\n${injectedCss}\n</head>`);
    } else {
      html = `${baseTag}${injectedCss}${html}`;
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // Cache at the edge for an hour; allow SWR for a day
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).send(html);
  } catch {
    res.status(500).json({ error: 'Failed to fetch or process remote URL' });
  }
}
