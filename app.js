/* ===========================================================================
   das.milner.zone — Karl Marx · Das Kapital, the thread
   Renders an X-style self-thread from a data model + wires interactions.

   NOTE ON SAFETY: every value rendered below comes from the hardcoded
   constants in this file (THREAD / REPLIES / TRENDS / FOLLOW). All free text
   is passed through esc()/rich() (which escape-first) before being placed in
   the DOM via insertAdjacentHTML. Free-text USER input (the reply composer)
   is never inserted as markup — it only ever touches textContent / .value.
   There is therefore no untrusted-HTML sink in this file.
   =========================================================================== */
(function () {
  "use strict";

  /* ---- Authors ---------------------------------------------------------- */
  const MARX = {
    name: "Karl Marx",
    handle: "karlmarx",
    avatar: "assets/marx.jpg",
    verified: true,
  };

  /* ---- The thread ------------------------------------------------------- *
   * Capital, Volume I, distilled. Iconic lines are genuine Marx; the
   * connective tissue paraphrases his argument in his register.            */
  const THREAD = [
    `I spent decades ruining my health in the British Museum reading room to write CAPITAL. Here is the whole thing, as a thread. 🧵

The wealth of societies in which the capitalist mode of production prevails presents itself as "an immense collection of commodities."

So we begin, humbly, with a single commodity.`,

    `A commodity seems the most trivial thing imaginable. A coat. A loaf. A phone.

Yet analyse it and it proves "a very strange thing, abounding in metaphysical subtleties and theological niceties."

Every commodity has two souls.`,

    `Soul one — USE-VALUE: the coat warms you, the bread feeds you. Its usefulness.

Soul two — EXCHANGE-VALUE: the coat trades for 2 ounces of gold, or 20 yards of linen, or one phone.

The question no one asks: when utterly different things exchange as equals, what is being measured?`,

    `It cannot be their usefulness — you cannot weigh "warmth" against "nourishment."

Strip that away and ONE thing remains common to all of them: each is a product of human LABOUR.

Value is congealed human labour-time. That is the secret hidden in the price tag.`,

    `"So if I dawdle, my product is worth more?" No.

Value is fixed by SOCIALLY NECESSARY labour-time — the hours required under average conditions, with normal skill and the prevailing technology.

The idle weaver does not grow rich. The market is merciless about averages.`,

    `Labour, too, has a double character.

CONCRETE labour — the specific tailoring, weaving, coding — creates the use-value.
ABSTRACT labour — plain human effort measured in time — creates the value.

Hold these two apart, and the whole mystery begins to dissolve.`,

    `Now, the FETISHISM OF COMMODITIES — the heart of it.

A table is mere wood. But the moment it becomes a commodity it "stands on its head, and evolves out of its wooden brain grotesque ideas."

We made these things; we set their worth by our labour — yet we obey their prices like laws of nature.`,

    `A relation BETWEEN PEOPLE — who labours, who profits — appears to us as a relation BETWEEN THINGS: so much gold = so much corn.

We bow before the market as our ancestors bowed before idols they had carved with their own hands.

That inversion is the fetish.`,

    `Enter MONEY. Barter is clumsy, so one commodity — gold — becomes the universal equivalent, the mirror in which every other measures its value.

Ordinary trade runs: Commodity → Money → Commodity. (C–M–C)
You sell corn, get money, buy a coat. You end where you began: with things to use.`,

    `But watch the capitalist. He inverts it:

Money → Commodity → MORE Money. (M–C–M′)

He buys only in order to sell. He begins with £100 and ends with £110.

Why would a sane man do this? For one thing only: that little prime mark. The surplus. The Δ.`,

    `Here is the riddle that defeated every economist before me.

If all things exchange at their true value — equal for equal — where does the EXTRA come from?

It cannot come from cheating in the marketplace. If we all overcharge one another, it cancels out. The profit must be born elsewhere.`,

    `On the market the capitalist finds one miraculous commodity.

A commodity whose very USE is to create value — and to create MORE value than it costs to purchase.

That commodity is LABOUR-POWER: the worker's living capacity to work.`,

    `And here is the trick — performed in broad daylight, perfectly "fair."

Your wage equals the cost of keeping you alive and fit to return tomorrow. Say that is four hours of value a day.

But you are not set to work for four hours. You work eight, ten, twelve.`,

    `In the first part of the day you reproduce your own wage: NECESSARY labour.

Every hour after that, you labour for nothing. You create value for which you are paid not a farthing: SURPLUS labour.

That unpaid surplus, congealed in commodities, IS profit. It is surplus-value.`,

    `No one picked your pocket. No contract was broken. The wage was "just."

The theft is structural, lawful, and invisible — committed in the hidden abode of production, over whose threshold hangs the notice:

"No admittance except on business."`,

    `Now you see why the master watches the clock like a hawk.

"Capital is dead labour which, vampire-like, lives only by sucking living labour, and lives the more, the more labour it sucks."

The working day itself becomes a battlefield.`,

    `There are two ways to pump out more surplus.

ABSOLUTE surplus-value: simply lengthen the day. Twelve hours, fourteen, sixteen — children in the mills.

This is why every limit on the working day had to be torn from capital by force.`,

    `RELATIVE surplus-value: keep the day the same, but shrink its necessary part.

Through machinery, the division of labour, and the speed-up, the worker reproduces his wage faster — so a greater share of the day falls, free, to capital.

This is why rising productivity never buys YOU more rest.`,

    `The machine was sold to us as deliverance. In capital's hands it became a weapon.

It does not lighten toil — it intensifies it, sets the machine's pace as your master, replaces skilled adults with cheaper hands, and casts the "liberated" worker into the street.`,

    `Those discarded workers form the RESERVE ARMY of labour — the unemployed.

Their hunger disciplines the employed: "Take less, or starve — ten others wait outside your gate."

Capital does not suffer unemployment by accident. It REQUIRES a reservoir of the desperate.`,

    `As wealth piles up at one pole, its opposite piles up at the other.

"Accumulation of wealth at one pole is at the same time accumulation of misery, agony of toil, slavery, ignorance, brutality, mental degradation, at the opposite pole."

One coin. Two faces.`,

    `"But surely the first capitalists earned it through thrift and toil?"

This is the nursery tale they teach you — "previous accumulation," the original sin of economics: a diligent elite, and a lazy rabble who drank away their wages.

Let me tell you how the starting hoard was REALLY heaped up.`,

    `PRIMITIVE ACCUMULATION: peasants driven from the common land by enclosure. Slavery. The plunder of the Americas. The looting of India. The gallows for the "vagrants" who would not bow to the factory bell.

It is "written in the annals of mankind in letters of blood and fire."`,

    `"If money, according to Augier, 'comes into the world with a congenital blood-stain on one cheek,' capital comes dripping from head to foot, from every pore, with blood and dirt."

The free market was born at a crime scene. The "free" worker is one first robbed of every other means to live.`,

    `Nor does it ever settle. Capital concentrates — one capitalist slays many. Fortunes pool in ever fewer hands, while the working class grows in number, and in discipline, and in understanding.

"Accumulate, accumulate! That is Moses and the prophets!" — the one commandment the system truly keeps.`,

    `So the system breeds its own gravediggers. The centralisation of capital and the socialisation of labour reach a point where the integument can hold no longer. The shell bursts asunder.

"The knell of capitalist private property sounds. The expropriators are expropriated."`,

    `That is CAPITAL, Volume I.

Not a grievance against greedy men — a diagnosis of a MACHINE that runs on unpaid labour and christens it freedom.

"The philosophers have only interpreted the world, in various ways; the point, however, is to change it."

You have nothing to lose but your chains. /end`,
  ];

  /* ---- Replies ---------------------------------------------------------- */
  const REPLIES = [
    {
      name: "Friedrich Engels", handle: "engels", avatar: "assets/engels.jpg",
      verified: true, followsYou: true, time: "Sep 14, 1867",
      text: `Finally. Took you only eighteen years and my entire allowance, old friend. Worth every shilling.

Now go for a walk and eat something that is not a herring. 🍺`,
      stats: { reply: 1243, repost: 8900, like: 96000, views: 2100000 },
    },
    {
      name: "Adam Smith", handle: "adamsmith", avatar: "assets/smith.jpg",
      verified: true, time: "Sep 15, 1867",
      text: `An impressive edifice. Though I must insist the invisible hand still—`,
      stats: { reply: 14200, repost: 410, like: 3100, views: 1800000 },
    },
    {
      name: "Chad Bourgeois 🦅📈", handle: "factory_chad", avatar: "data-initials",
      verified: false, time: "Sep 16, 1867",
      text: `ok but if labour is so valuable who's gonna build the factories then 🤔 some of us are JOB CREATORS sweetie 💅`,
      stats: { reply: 9800, repost: 220, like: 1900, views: 1500000 },
    },
    {
      name: "Rosa Luxemburg", handle: "rosa_l", avatar: "data-initials",
      verified: true, time: "Sep 18, 1867",
      text: `Required reading. The accumulation problem doesn't stop at the factory gate — it spills across borders. Volume II when?? 📌`,
      stats: { reply: 420, repost: 5600, like: 41000, views: 980000 },
    },
  ];

  /* ---- Engagement on the head + decay across the thread ---------------- */
  const HEAD_STATS = { reply: 38400, repost: 214000, like: 892000, bookmark: 167000, views: 14200000 };

  /* ===========================================================================
     Helpers
     =========================================================================== */
  function fmt(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(n >= 1e7 ? 0 : 1).replace(/\.0$/, "") + "M";
    if (n >= 1e4) return Math.round(n / 1e3) + "K";
    if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
    return String(n);
  }
  function fmtFull(n) { return n.toLocaleString("en-US"); }

  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ESC[c]); }

  // escape FIRST, then linkify @handles, #hashtags, and http links
  function rich(text) {
    let h = esc(text);
    h = h.replace(/(https?:\/\/[^\s]+)/g, '<span class="ln">$1</span>');
    h = h.replace(/(^|[\s(])(@[A-Za-z0-9_]+)/g, '$1<span class="ln">$2</span>');
    h = h.replace(/(^|[\s(])(#[A-Za-z0-9_]+)/g, '$1<span class="ln">$2</span>');
    return h;
  }

  function svg(id, cls) { return `<svg class="${cls || "icon"}"><use href="#${id}"/></svg>`; }
  function badge(v) { return v ? `<svg class="verified"><use href="#i-verified"/></svg>` : ""; }

  // deterministic colored "initials" avatar for accounts without a portrait
  function initialsAvatar(name) {
    const colors = ["#1d9bf0", "#794bc4", "#f91880", "#00ba7c", "#ff7a00", "#e0245e"];
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    const c = colors[h % colors.length];
    const initials = name.replace(/[^A-Za-z ]/g, "").trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
    return (
      `<svg class="avatar" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">` +
      `<rect width="40" height="40" rx="20" fill="${c}"/>` +
      `<text x="20" y="20" dy="0.36em" text-anchor="middle" fill="#fff" font-size="16" font-family="-apple-system,Segoe UI,Roboto,sans-serif" font-weight="700">${esc(initials)}</text>` +
      `</svg>`
    );
  }
  function avatarHTML(author) {
    if (author.avatar === "data-initials") return initialsAvatar(author.name);
    return `<img class="avatar" src="${esc(author.avatar)}" alt="${esc(author.name)}" />`;
  }

  /* ===========================================================================
     Action bar (compact tweets + replies)
     =========================================================================== */
  function actionBar(stats) {
    return `
      <div class="actions">
        <button class="action reply" aria-label="Reply">
          <span class="ic-wrap">${svg("i-reply")}</span><span class="count">${fmt(stats.reply)}</span>
        </button>
        <button class="action repost" data-base="${stats.repost}" aria-label="Repost">
          <span class="ic-wrap">${svg("i-repost")}</span><span class="count">${fmt(stats.repost)}</span>
        </button>
        <button class="action like" data-base="${stats.like}" aria-label="Like">
          <span class="ic-wrap">${svg("i-like")}</span><span class="count">${fmt(stats.like)}</span>
        </button>
        <button class="action views" aria-label="Views">
          <span class="ic-wrap">${svg("i-views")}</span><span class="count">${fmt(stats.views)}</span>
        </button>
        <div class="action group-right">
          <button class="action bookmark" data-base="${stats.bookmark || 0}" aria-label="Bookmark">
            <span class="ic-wrap">${svg("i-bookmark")}</span>${stats.bookmark ? `<span class="count">${fmt(stats.bookmark)}</span>` : ""}
          </button>
          <button class="action share" aria-label="Share">
            <span class="ic-wrap">${svg("i-share")}</span>
          </button>
        </div>
      </div>`;
  }

  /* ===========================================================================
     Templates
     =========================================================================== */
  function focusedTweet(text, stats) {
    return `
      <section class="tweet focused" id="t1">
        <div class="focused-head">
          ${avatarHTML(MARX)}
          <div class="who">
            <span class="name">${esc(MARX.name)} ${badge(MARX.verified)}</span>
            <span class="handle">@${esc(MARX.handle)}</span>
          </div>
          <div class="more" role="button" aria-label="More">${svg("i-dots")}</div>
        </div>
        <div class="focused-text">${rich(text)}</div>
        <div class="focused-meta">
          <span>4:20 PM</span><span class="dot">·</span><span>Sep 14, 1867</span><span class="dot">·</span>
          <span class="views-num">${fmtFull(stats.views)}</span><span>&nbsp;Views</span>
        </div>
        <div class="focused-stats">
          <span><b>${fmt(stats.repost)}</b> Reposts</span>
          <span><b>${fmt(Math.round(stats.repost * 0.31))}</b> Quotes</span>
          <span><b>${fmt(stats.like)}</b> Likes</span>
          <span><b>${fmt(stats.bookmark)}</b> Bookmarks</span>
        </div>
        <div class="focused-actions">
          <button class="action reply" aria-label="Reply"><span class="ic-wrap">${svg("i-reply")}</span></button>
          <button class="action repost" data-base="${stats.repost}" aria-label="Repost"><span class="ic-wrap">${svg("i-repost")}</span></button>
          <button class="action like" data-base="${stats.like}" aria-label="Like"><span class="ic-wrap">${svg("i-like")}</span></button>
          <button class="action views" aria-label="Views"><span class="ic-wrap">${svg("i-views")}</span></button>
          <div class="action group-right">
            <button class="action bookmark" data-base="${stats.bookmark}" aria-label="Bookmark"><span class="ic-wrap">${svg("i-bookmark")}</span></button>
            <button class="action share" aria-label="Share"><span class="ic-wrap">${svg("i-share")}</span></button>
          </div>
        </div>
      </section>`;
  }

  function threadTweet(text, stats, connectorBottom, idx, total) {
    return `
      <section class="tweet" id="t${idx + 1}">
        <div class="tweet-avatar-col">
          ${avatarHTML(MARX)}
          ${connectorBottom ? '<div class="thread-line"></div>' : ""}
        </div>
        <div class="tweet-body">
          <div class="tweet-head">
            <span class="name">${esc(MARX.name)}</span> ${badge(MARX.verified)}
            <span class="handle">@${esc(MARX.handle)}</span>
            <span class="dot">·</span><span class="time">Sep 14, 1867</span>
            <span class="more" role="button" aria-label="More">${svg("i-dots")}</span>
          </div>
          <div class="tweet-text">${rich(text)} <span class="ln">(${idx + 1}/${total})</span></div>
          ${actionBar(stats)}
        </div>
      </section>`;
  }

  function replyTweet(r) {
    return `
      <section class="tweet">
        <div class="tweet-avatar-col">${avatarHTML(r)}</div>
        <div class="tweet-body">
          <div class="tweet-head">
            <span class="name">${esc(r.name)}</span> ${badge(r.verified)}
            <span class="handle">@${esc(r.handle)}</span>
            <span class="dot">·</span><span class="time">${esc(r.time)}</span>
            ${r.followsYou ? '<span class="followsyou">Follows you</span>' : ""}
            <span class="more" role="button" aria-label="More">${svg("i-dots")}</span>
          </div>
          <div class="tweet-text" style="color:var(--text-secondary);margin:-2px 0 2px">
            Replying to <span class="ln">@${esc(MARX.handle)}</span>
          </div>
          <div class="tweet-text">${rich(r.text)}</div>
          ${actionBar(r.stats)}
        </div>
      </section>`;
  }

  function composer() {
    return `
      <div class="composer" id="composer">
        ${avatarHTML(MARX)}
        <div class="field">
          <textarea class="input" id="reply-input" rows="1" placeholder="Post your reply" maxlength="280"></textarea>
          <div class="row">
            <div class="tools">
              ${["i-media", "i-gif", "i-poll", "i-emoji", "i-schedule", "i-location"].map((i) => `<span class="ic-wrap">${svg(i)}</span>`).join("")}
            </div>
            <button class="reply-btn" id="reply-btn">Reply</button>
          </div>
        </div>
      </div>`;
  }

  /* ===========================================================================
     Render the thread
     =========================================================================== */
  function decay(base, i, factor) {
    const wobble = 0.9 + ((i * 7919) % 100) / 500; // 0.90 – 1.10, deterministic
    return Math.max(40, Math.round(base * Math.pow(factor, i) * wobble));
  }

  function buildThread() {
    const total = THREAD.length;
    let html = focusedTweet(THREAD[0], HEAD_STATS);

    for (let i = 1; i < total; i++) {
      const stats = {
        reply: decay(HEAD_STATS.reply * 0.18, i, 0.93),
        repost: decay(HEAD_STATS.repost * 0.12, i, 0.95),
        like: decay(HEAD_STATS.like * 0.16, i, 0.96),
        bookmark: decay(HEAD_STATS.bookmark * 0.1, i, 0.95),
        views: decay(HEAD_STATS.views * 0.42, i, 0.97),
      };
      html += threadTweet(THREAD[i], stats, i < total - 1, i, total);
    }

    html += composer();
    html += REPLIES.map(replyTweet).join("");

    document.getElementById("thread").insertAdjacentHTML("beforeend", html);
  }

  /* ===========================================================================
     Right sidebar widgets
     =========================================================================== */
  const TRENDS = [
    { cat: "Trending in Political Economy", name: "Surplus Value", count: "89.2K posts" },
    { cat: "Economics · Trending", name: "#LabourTheoryOfValue", count: "42.1K posts" },
    { cat: "Trending", name: "Commodity Fetishism", count: "31.4K posts" },
    { cat: "Business & finance · Trending", name: "Means of Production", count: "120K posts" },
    { cat: "Trending in History", name: "Enclosure Acts", count: "18.6K posts" },
  ];
  const FOLLOW = [
    { name: "Friedrich Engels", handle: "engels", avatar: "assets/engels.jpg", verified: true, followsYou: true },
    { name: "G.W.F. Hegel", handle: "gwf_hegel", avatar: "data-initials", verified: true },
    { name: "Rosa Luxemburg", handle: "rosa_l", avatar: "data-initials", verified: true },
  ];

  function buildTrends() {
    const el = document.getElementById("trends");
    const html =
      TRENDS.map((t) => `
        <div class="trend">
          <div class="cat">${esc(t.cat)} <span class="more-dot">${svg("i-dots", "icon")}</span></div>
          <div class="name">${esc(t.name)}</div>
          <div class="count">${esc(t.count)}</div>
        </div>`).join("") +
      `<a class="show-more" href="#">Show more</a>`;
    el.insertAdjacentHTML("beforeend", html);
    el.querySelectorAll(".more-dot .icon").forEach((s) => { s.style.width = "18px"; s.style.height = "18px"; });
  }

  function buildFollow() {
    const el = document.getElementById("whotofollow");
    const html =
      FOLLOW.map((f) => `
        <div class="follow">
          ${avatarHTML(f)}
          <div class="who">
            <div class="name">${esc(f.name)} ${badge(f.verified)}</div>
            <div class="handle">@${esc(f.handle)}${f.followsYou ? ' <span class="followsyou">Follows you</span>' : ""}</div>
          </div>
          <button class="follow-btn"><span class="ftxt">Follow</span></button>
        </div>`).join("") +
      `<a class="show-more" href="#">Show more</a>`;
    el.insertAdjacentHTML("beforeend", html);
  }

  /* ===========================================================================
     Interactions
     =========================================================================== */
  let toastTimer;
  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  }

  function setCount(btn, base, active) {
    const c = btn.querySelector(".count");
    if (c) c.textContent = fmt(base + (active ? 1 : 0));
  }

  function wireInteractions() {
    document.body.addEventListener("click", (e) => {
      const like = e.target.closest(".action.like");
      const repost = e.target.closest(".action.repost");
      const book = e.target.closest(".action.bookmark");
      const reply = e.target.closest(".action.reply");
      const share = e.target.closest(".action.share");
      const follow = e.target.closest(".follow-btn");
      const toastEl = e.target.closest("[data-toast]");
      const back = e.target.closest(".col-header .back");

      if (like) {
        e.stopPropagation();
        const on = like.classList.toggle("on");
        like.querySelector("use").setAttribute("href", on ? "#i-like-fill" : "#i-like");
        const base = +like.dataset.base; if (!isNaN(base)) setCount(like, base, on);
        return;
      }
      if (repost) {
        e.stopPropagation();
        const on = repost.classList.toggle("on");
        const base = +repost.dataset.base; if (!isNaN(base)) setCount(repost, base, on);
        toast(on ? "Reposted" : "Repost removed");
        return;
      }
      if (book) {
        e.stopPropagation();
        const on = book.classList.toggle("on");
        book.querySelector("use").setAttribute("href", on ? "#i-bookmark-fill" : "#i-bookmark");
        const base = +book.dataset.base; if (!isNaN(base) && base) setCount(book, base, on);
        toast(on ? "Added to your Bookmarks" : "Removed from your Bookmarks");
        return;
      }
      if (reply) { e.stopPropagation(); const ri = document.getElementById("reply-input"); if (ri) ri.focus(); return; }
      if (share) {
        e.stopPropagation();
        const url = "https://das.milner.zone/";
        if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
        toast("Copied to clipboard");
        return;
      }
      if (follow) {
        e.stopPropagation();
        const f = follow.classList.toggle("following");
        follow.querySelector(".ftxt").textContent = f ? "Following" : "Follow";
        return;
      }
      if (back) { e.preventDefault(); if (history.length > 1) history.back(); else toast("This is the top of the thread."); return; }
      if (toastEl) { e.preventDefault(); toast(toastEl.dataset.toast); return; }
    });

    const input = document.getElementById("reply-input");
    const composerEl = document.getElementById("composer");
    const btn = document.getElementById("reply-btn");
    if (input) {
      input.addEventListener("focus", () => composerEl.classList.add("active"));
      input.addEventListener("input", () => {
        input.style.height = "auto";
        input.style.height = Math.min(input.scrollHeight, 300) + "px";
        btn.classList.toggle("ready", input.value.trim().length > 0);
      });
      btn.addEventListener("click", () => {
        if (!input.value.trim()) return;
        toast("Replying is disabled on this archive.");
        input.value = "";
        input.style.height = "auto";
        btn.classList.remove("ready");
      });
    }
  }

  /* ===========================================================================
     Boot
     =========================================================================== */
  buildThread();
  buildTrends();
  buildFollow();
  wireInteractions();
})();
