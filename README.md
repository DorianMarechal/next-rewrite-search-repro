# Plain `rewrites()` send an empty `x-nextjs-rewritten-query`

A page served through a plain `rewrites()` entry links to the same public URL with another
search param. After the link is prefetched, the click updates the URL but keeps the old page.

```bash
npm install
npx playwright install chromium
npm test        # builds, runs `next start` on port 3999, and runs the test
```

`tests/rewrite.spec.ts` opens `/public` (rewritten to `/internal`), waits for the prefetch of
`/public?page=2`, clicks the link, and expects the heading `Page 2`.

- Expected: `Page 2`.
- Actual: the URL is `/public?page=2`, the heading stays `Page 1`, and no request is sent.

The prefetch response carries `x-nextjs-rewritten-query: ""`, although the requested search is
`?page=2`.

Fails with `next@16.4.5` and `next@16.5.0-canary.45` under `next start`.
