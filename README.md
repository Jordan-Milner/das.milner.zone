# das.milner.zone

An **X (Twitter) UI clone** that renders **Karl Marx's *Capital, Volume I*** as a single
multi-tweet thread from `@karlmarx`.

Pure static site — no build step, no dependencies.

```
index.html      layout shell + SVG icon sprite + OG/meta tags
styles.css      X "Lights out" dark theme (3-column desktop → mobile bottom nav)
app.js          thread/replies data model + render + interactions (like, repost,
                bookmark, follow, reply composer, share-to-clipboard, toasts)
assets/         marx.jpg · engels.jpg · smith.jpg (public-domain portraits)
                og.jpg (1200×630 link-preview card)
```

The thread distils all of *Capital, Vol. I*: the commodity and its two-fold value,
socially-necessary labour time, the dual character of labour, commodity fetishism,
money and C–M–C vs M–C–M′, labour-power and surplus-value, the working day,
absolute vs relative surplus-value, machinery, the reserve army of labour,
the general law of accumulation, primitive accumulation ("blood and fire"),
and the historical tendency — closing on *"the expropriators are expropriated."*
Iconic lines are genuine Marx; the connective tissue paraphrases his argument
in his register.

## Run locally

```sh
python3 -m http.server 8787   # then open http://localhost:8787
```

## Deploy

Served via **GitHub Pages**. To put it on the apex subdomain `das.milner.zone`
(Cloudflare-managed zone), see [`DEPLOY.md`](DEPLOY.md).

> Parody / educational use. Portraits are public domain (Marx d. 1883,
> Engels d. 1895, Smith d. 1790). Not affiliated with X Corp.
