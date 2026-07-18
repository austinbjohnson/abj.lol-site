# abj.lol

A tiny time-aware poetry gallery. The site selects a different curated public-domain poem for each of the day's 144 ten-minute windows, using the visitor's local time.

## Local development

Serve the repository with any static file server (loading `index.html` directly will also work in most browsers):

```sh
python3 -m http.server 8000
```

Poem data lives in `poems.js`. Each entry has a stable ID for `?poem=` permalinks. The page is static and GitHub Pages compatible.
