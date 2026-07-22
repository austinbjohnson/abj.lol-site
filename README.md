# abj.lol

A tiny time-aware poetry gallery. The site selects a different curated poem for each of the day's 144 ten-minute windows, using the visitor's local time.

The collection is split evenly: 72 public-domain excerpts and 72 linked selections from modern or taste-defining poets. For a linked selection, the page may reproduce an excerpt of up to 50% of the source poem, aiming for approximately 280 characters when the poem and verified source allow it. Every linked selection credits and links to its public source.

## Local development

Serve the repository with any static file server (loading `index.html` directly will also work in most browsers):

```sh
python3 -m http.server 8000
```

Poem data lives in `poems.js`. Each entry has a stable ID for `?poem=` permalinks. The page is static and GitHub Pages compatible.
