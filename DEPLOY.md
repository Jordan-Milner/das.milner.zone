# Deploying to das.milner.zone

The site is **live now** on GitHub Pages at the project URL (see the repo's
Pages settings / the link printed at deploy time).

`milner.zone` DNS is managed by **Cloudflare**, and existing subdomains
(e.g. `sealed.milner.zone`) are served by **token-managed `cloudflared` tunnels**
on the NAS. Putting this site on `das.milner.zone` therefore needs Cloudflare
DNS access, which is the one step that can't be automated without a Cloudflare
API token / dashboard login.

## Option A — point das.milner.zone at GitHub Pages (simplest)

1. **Cloudflare → milner.zone → DNS** → add a record:
   - Type `CNAME`, Name `das`, Target `jordan-milner.github.io`
   - Proxy status: **DNS only** (grey cloud) for GitHub's cert to issue;
     can switch to Proxied after the cert is live.
2. **This repo** → add a file named `CNAME` (no extension) containing exactly:
   ```
   das.milner.zone
   ```
   (or set it under repo **Settings → Pages → Custom domain**, which writes that
   file for you). Then **Enforce HTTPS** once the cert provisions.

That's it — Pages serves `https://das.milner.zone/`.

## Option B — serve through the existing NAS cloudflared tunnel

Consistent with how `sealed.milner.zone` works. In the **Cloudflare Zero Trust
dashboard → Networks → Tunnels**, add a **public hostname** to the relevant
tunnel:
- Subdomain `das`, Domain `milner.zone`
- Service `http://<container>:80` pointing at a static-file container serving
  this repo (e.g. `nginx`/`caddy` with the build mounted).

Cloudflare creates the `das` DNS record automatically when you add the hostname.

---

Once a Cloudflare API token (Zone:DNS:Edit on milner.zone) is available, Option A
can be finished end-to-end in one command.
