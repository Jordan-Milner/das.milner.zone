# das.milner.zone

An **X (Twitter) UI clone** that renders **Karl Marx's *Das Kapital*** as X threads
from `@karlmarx` — a hash-routed single-page app with a full profile and all
three volumes.

Pure static site — no build step, no dependencies.

```
index.html      routing shell + SVG icon sprite + OG/meta tags
styles.css      X "Lights out" dark theme (3-column desktop → mobile bottom nav)
app.js          all content (3 threads, profile, feed) + render + hash router
                + interactions (like, repost, bookmark, follow, reply composer,
                  share-to-clipboard, toasts, tab switching)
assets/         marx.jpg · engels.jpg · smith.jpg (public-domain portraits)
                banner.jpg (Doré, "Over London by Rail", 1872 — public domain)
                og.jpg (1200×630 link-preview card)
```

## Routes

| Hash | View |
|---|---|
| `#/` | **Volume I** — *The Process of Production of Capital* (43-tweet thread) |
| `#/status/kapital-2` | **Volume II** — *The Process of Circulation of Capital* (18 tweets) |
| `#/status/kapital-3` | **Volume III** — *The Process of Capitalist Production as a Whole* (19 tweets) |
| `#/karlmarx` | **@karlmarx profile** — banner, bio, stats, tabs, pinned feed |

The threads distil all three volumes of *Das Kapital*: the commodity and its
two-fold value, socially-necessary labour time, the dual character of labour,
commodity fetishism, money and C–M–C vs M–C–M′, labour-power and surplus-value,
the working day, absolute vs relative surplus-value, machinery, the reserve army
of labour, the general law of accumulation, primitive accumulation ("blood and
fire"); the circuits and turnover of capital and the reproduction schemes
(Vol II); the rate of profit, its tendency to fall, crisis, merchant/interest/
landed capital and the "Trinity Formula" (Vol III). Iconic lines are genuine
Marx; the connective tissue paraphrases his argument in his register. Volumes II
& III are dated to their real posthumous publication years (1885, 1894), with
Engels — who edited them from Marx's manuscripts — replying in character.

## Run locally

```sh
python3 -m http.server 8787   # then open http://localhost:8787
```

## Deploy

Served via **GitHub Pages**. To put it on `das.milner.zone` (Cloudflare-managed
zone), see [`DEPLOY.md`](DEPLOY.md).

> Parody / educational use. Portraits and the Doré engraving are public domain
> (Marx d. 1883, Engels d. 1895, Smith d. 1790, Doré d. 1883). Not affiliated
> with X Corp.
