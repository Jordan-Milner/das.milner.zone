/* ===========================================================================
   das.milner.zone — Karl Marx · DAS KAPITAL as X threads
   Hash-routed SPA: status (thread) views for Vols I–III + an @karlmarx profile.

   SAFETY: every value rendered comes from the hardcoded constants in this file
   (THREADS / PROFILE / FEED / TRENDS / FOLLOW). All free text passes through
   esc()/rich() (escape-first) before reaching the DOM via insertAdjacentHTML.
   Free-text USER input (the reply composer) never becomes markup — it only ever
   touches textContent / .value. No untrusted-HTML sink exists here.
   =========================================================================== */
(function () {
  "use strict";

  /* ---- People ----------------------------------------------------------- */
  const MARX = { name: "Karl Marx", handle: "karlmarx", avatar: "assets/marx.jpg", verified: true };
  const ENGELS = { name: "Friedrich Engels", handle: "engels", avatar: "assets/engels.jpg", verified: true, followsYou: true };
  const SMITH = { name: "Adam Smith", handle: "adamsmith", avatar: "assets/smith.jpg", verified: true };
  const CHAD = { name: "Chad Bourgeois 🦅📈", handle: "factory_chad", avatar: "data-initials", verified: false };
  const ROSA = { name: "Rosa Luxemburg", handle: "rosa_l", avatar: "data-initials", verified: true };
  const RICARDO = { name: "David Ricardo", handle: "d_ricardo", avatar: "data-initials", verified: true };

  /* =========================================================================
     THREADS — Das Kapital, Volumes I–III
     ========================================================================= */
  const THREADS = {
    /* -------------------------------- VOLUME I -------------------------------- */
    "kapital-1": {
      vol: "Volume I", subtitle: "The Process of Production of Capital",
      date: "Sep 14, 1867", time: "4:20 PM",
      head: { reply: 38400, repost: 214000, like: 892000, bookmark: 167000, views: 14200000 },
      tweets: [
        `I spent decades ruining my health in the British Museum reading room to write DAS KAPITAL. Here is the whole of Volume I, as a thread. 🧵

"The wealth of those societies in which the capitalist mode of production prevails presents itself as an immense accumulation of commodities, its unit being a single commodity."

So we begin there.`,

        `A commodity seems the most trivial thing imaginable — a coat, a loaf, a phone.

"A commodity appears, at first sight, a very trivial thing, and easily understood. Its analysis shows that it is, in reality, a very queer thing, abounding in metaphysical subtleties and theological niceties."

It has two souls.`,

        `Soul one — USE-VALUE. The coat warms you; the bread feeds you. Its plain usefulness, realised only in consumption.

Different things, different uses. You cannot add "warmth" to "nourishment." On this side every commodity is incommensurable with every other.`,

        `Soul two — EXCHANGE-VALUE. The coat trades for 2 ounces of gold, OR 20 yards of linen, OR one phone — all "equal" to it.

When wildly different things exchange as equals, something common is being measured. But what?

"So far no chemist has ever discovered exchange-value either in a pearl or a diamond."`,

        `Strip away every physical property and ONE thing is left common to them all: each is a product of human LABOUR.

"A use-value, or useful article, has value only because human labour in the abstract has been embodied or materialised in it."

Value is congealed labour. That is the secret in the price.`,

        `"What determines the magnitude of value? The quantity of the value-creating substance, the labour, contained in the article — measured by its duration, in weeks, days, and hours."

But not YOUR hours. SOCIALLY NECESSARY labour-time: the time required under average conditions, with average skill and the going technology.`,

        `"So if I work slowly, my commodity is worth more?"

No. The idle or clumsy weaver does not grow rich. The market reckons only the social average, and is merciless about it.

"As values, all commodities are only definite masses of congealed labour-time."`,

        `Labour itself has a double character — grasp this and the rest unlocks.

CONCRETE labour: the specific act — tailoring, weaving, coding — which makes the use-value.
ABSTRACT labour: mere human effort in general, measured in time, which makes the value.

The same act, two aspects.`,

        `Now the deepest puzzle: the FETISHISM OF COMMODITIES.

A table is plain wood. But the instant it steps forward as a commodity it "stands on its head, and evolves out of its wooden brain grotesque ideas, far more wonderful than table-turning ever was."`,

        `We made these things. We set their values by our own labour. Yet their values confront us as alien powers, like the weather or the tides.

"It reflects back to men the social characters of their own labour as objective characters stamped upon the product of that labour."`,

        `A relation BETWEEN PEOPLE — who works, who owns, who profits — appears to us as a relation BETWEEN THINGS: so much gold = so much corn.

"It is value that converts every product into a social hieroglyphic."

We bow to the market as our ancestors bowed to idols they had carved with their own hands. That is the fetish.`,

        `Enter MONEY. Barter is clumsy, so one commodity — gold — is set apart as the universal equivalent: the mirror in which every other commodity sees its value reflected.

Money is not a trick of bankers. It is the commodity-form grown to maturity. It hides the labour even more thoroughly than before.`,

        `Watch how an ordinary person trades:

Commodity → Money → Commodity. (C–M–C)

You sell your corn, take the money, buy a coat. You begin and end with use-values; money is only the go-between. The point of the whole motion is consumption.`,

        `Now watch the capitalist. He inverts the formula:

Money → Commodity → MORE money. (M–C–M′)

He buys only in order to sell dearer. He begins with £100 and must end with £110, or he has wasted his time. The aim is no longer use — it is the increment. The little prime: M′.`,

        `So the capitalist is not a villain with a moustache. He is "capital personified, with consciousness and a will." His soul is the soul of capital, and capital has one life-aim only: to grow.

Use-value he tolerates; exchange-value he worships; surplus he must have.`,

        `Here is the riddle that wrecked every economist before me.

If commodities exchange at their values — equal for equal — where does the EXTRA value in M′ come from?

You cannot squeeze it out of exchange itself. If we all overcharge one another, the gains cancel. The profit must be born somewhere outside the till.`,

        `The capitalist seeks, on the open market, a very special commodity:

one whose USE-VALUE is itself the creation of value — and which can create MORE value than it costs to buy.

He finds it. It is LABOUR-POWER: the living human capacity to work, offered for sale by those who own nothing else.`,

        `Where labour-power is bought and sold, we leave "this noisy sphere, where everything takes place on the surface," and descend into

"the hidden abode of production, on whose threshold there stares us in the face: No admittance except on business."

There the secret of profit-making is laid bare.`,

        `The bargain is perfectly "fair." Labour-power, like any commodity, sells at its value — and its value is the cost of producing and reproducing the worker: food, shelter, training, a family to raise the next generation.

Say that comes to the equivalent of FOUR hours of labour a day.`,

        `But the capitalist did not buy four hours of RESULT. He bought the USE of your labour-power for the whole day.

So he sets you to work eight hours, ten, twelve. In the first four you reproduce the value of your own wage: NECESSARY labour. You have earned your keep.`,

        `Every hour AFTER that you work for nothing.

This is SURPLUS labour, and the value it creates — congealed in his commodities, pocketed when he sells them — is SURPLUS-VALUE.

That, and nothing else, is the source of profit, interest, and rent. Unpaid labour-time, made solid.`,

        `Note what has happened. No swindle. No broken contract. The wage was "just," the exchange of equivalents observed to the letter.

The exploitation is not a crime against the rules — it IS the rules. It is lawful, structural, and invisible, hidden inside the working day itself.`,

        `So you understand at last why the master watches the clock like a hawk.

"Capital is dead labour, that, vampire-like, only lives by sucking living labour, and lives the more, the more labour it sucks."

Your living hours are his nourishment.`,

        `A British factory report I quote in the book records a manufacturer's creed in five words:

"Moments are the elements of profit."

Steal a minute at the start of the shift, a minute at meals, a minute at the close — multiply by every worker, every day. Fortunes are built of pilfered minutes.`,

        `The length of the working day is therefore a battlefield. The capitalist demands every hour the worker can give; the worker demands a life.

Both stand on the law of exchange. "Between equal rights, force decides." Hence the working day is fixed not by economics but by class struggle.`,

        `FIRST way to pump out more surplus — ABSOLUTE surplus-value: simply lengthen the day. Twelve hours. Fourteen. Sixteen.

The book is full of the coroner's evidence: seamstresses worked to death, children at the machines before dawn, "the dead labour" feeding on the half-living.`,

        `Such hours had to be stopped by force of law — the Factory Acts — wrung out of Parliament only by decades of revolt, agitation, and broken bodies.

"For protection against the serpent of their agonies, the labourers must put their heads together and, as a class, compel the passing of a law."`,

        `SECOND way — RELATIVE surplus-value: keep the day the same length, but SHRINK its necessary part.

If productivity rises, the worker reproduces a day's wage in three hours instead of four — and the fourth hour is handed, free, to capital. Cheapening the worker's keep enriches the buyer of his labour.`,

        `This is why every leap in productivity — co-operation, the division of labour, the factory — has been turned against the worker.

The "detail labourer," chained to one fragment of one task, is "crippled by life-long repetition of one and the same trivial operation." Skill drains into the system; the worker is hollowed out.`,

        `Then comes MACHINERY, sold to mankind as deliverance.

In capital's hands it does the opposite. It does not shorten the working day — it lengthens it. It does not lighten toil — it intensifies it, setting the machine's relentless pace as your true master.`,

        `Machinery also makes muscle worthless: it draws women and children into the mills at a fraction of a man's wage, and throws the displaced into the street.

"The Roman slave was held by fetters; the wage-labourer is bound to his owner by invisible threads." The chain is now economic, and all the stronger for being unseen.`,

        `The displaced do not vanish. They form the RESERVE ARMY of labour — the unemployed and underemployed, kept in reserve at the factory gate.

Their hunger disciplines those still inside: "Accept less, or starve — there are ten outside who will take your place." Wages are policed by the misery of the jobless.`,

        `So unemployment is no accident, no failure of the system. It is a CONDITION of the system. Capital breeds and requires its reserve army, swelling it in slumps, drawing on it in booms.

The poverty of the many is not a bug in the machine. It is a moving part.`,

        `Hence the general law of capitalist accumulation, stated plainly:

"Accumulation of wealth at one pole is at the same time accumulation of misery, agony of toil, slavery, ignorance, brutality, mental degradation, at the opposite pole."

One process. One coin. Two faces.`,

        `And the capitalist has no choice but to drive it on. Competition compels him: accumulate or be devoured. His own enjoyment is beside the point.

"Accumulate, accumulate! That is Moses and the prophets! Accumulation for accumulation's sake, production for production's sake."`,

        `"But surely," they say, "the first capitalists earned their hoard by thrift and toil, while the poor squandered theirs?"

This is the nursery tale of economics — "previous accumulation," its very own original sin: a diligent elite and a lazy rabble. It is a lie, and I will tell you how the first capital was really amassed.`,

        `PRIMITIVE ACCUMULATION, the true story: the peasantry torn from the land by enclosure, the commons stolen, whole populations turned into propertyless "free" labourers with nothing to sell but themselves —

and then flogged, branded, and hanged as "vagabonds" when they would not submit to the wage.`,

        `"The discovery of gold and silver in America, the extirpation, enslavement and entombment in mines of the aboriginal population, the beginning of the conquest and looting of the East Indies, the turning of Africa into a warren for the commercial hunting of black-skins —

signalised the rosy dawn of the era of capitalist production."`,

        `"Force is the midwife of every old society pregnant with a new one. It is itself an economic power."

And so:

"If money comes into the world with a congenital blood-stain on one cheek, capital comes dripping from head to foot, from every pore, with blood and dirt."

That is where the starting capital came from.`,

        `Now turn to the system's future. Capital concentrates. One capitalist kills many. Wealth pools in ever fewer hands — while the working class grows in number, in discipline, in organisation, schooled and united by the very mechanism of production.`,

        `"Along with the constantly diminishing number of the magnates of capital grows the mass of misery, oppression, slavery, degradation, exploitation; but with this too grows the revolt of the working-class, a class always increasing in numbers, and disciplined, united, organised by the very mechanism of the process of capitalist production itself."`,

        `"Centralisation of the means of production and socialisation of labour at last reach a point where they become incompatible with their capitalist integument. This integument is burst asunder.

The knell of capitalist private property sounds. The expropriators are expropriated."

That is DAS KAPITAL, Volume I.`,

        `Not an attack on greedy men — a diagnosis of a MACHINE that runs on unpaid labour and christens it freedom.

"The philosophers have only interpreted the world, in various ways; the point, however, is to change it."

You have nothing to lose but your chains. /end

Volume II — how capital moves — in the next thread. 🧵`,
      ],
      replies: [
        { who: ENGELS, time: "Sep 14, 1867", text: `Finally. Eighteen years and my entire allowance, old friend — worth every shilling.

Now go for a walk and eat something that is not a herring. 🍺`, stats: { reply: 1243, repost: 8900, like: 96000, views: 2100000 } },
        { who: SMITH, time: "Sep 15, 1867", text: `An impressive edifice, built on my own foundations. Though I must insist the invisible hand still—`, stats: { reply: 14200, repost: 410, like: 3100, views: 1800000 } },
        { who: CHAD, time: "Sep 16, 1867", text: `ok but if labour is so valuable who's gonna build the factories then 🤔 some of us are JOB CREATORS sweetie 💅`, stats: { reply: 9800, repost: 220, like: 1900, views: 1500000 } },
        { who: ROSA, time: "Sep 18, 1867", text: `Required reading. But accumulation doesn't stop at the factory gate — it spills across borders, hunting fresh markets. Hold that thought for my own book. 📌`, stats: { reply: 420, repost: 5600, like: 41000, views: 980000 } },
      ],
    },

    /* -------------------------------- VOLUME II -------------------------------- */
    "kapital-2": {
      vol: "Volume II", subtitle: "The Process of Circulation of Capital",
      date: "1885", time: "9:15 AM",
      posthumous: true,
      head: { reply: 9200, repost: 41000, like: 188000, bookmark: 52000, views: 3100000 },
      tweets: [
        `Volume I showed how surplus-value is PRODUCED, in the hidden abode of the factory.

Volume II asks a different question: how does capital MOVE? How does it flow, change shape, and come home enlarged?

A thread on DAS KAPITAL, Volume II. 🧵`,

        `First, unlearn a habit of thought. Capital is not a thing — not a pile of money, not a heap of machines.

Capital is a MOTION. A value in perpetual self-expanding movement, forever throwing off one form to take on the next. Arrest the motion and it ceases to be capital at all.`,

        `Follow the circuit of money-capital:

M → C { labour-power + means of production } … P … → C′ → M′

Money buys commodities; in production (P) they yield new commodities of greater value; these are sold for more money. Then the whole dance begins again.`,

        `The same circuit can be entered at any point, and each entry tells a different lie.

As MONEY-capital it looks as if money breeds money.
As PRODUCTIVE capital it looks as if machines and toil make wealth.
As COMMODITY-capital it looks as if profit springs from selling.

Capital is all three at once, ceaselessly changing costume.`,

        `Notice the "…P…" sits between two interruptions. To produce, capital must first STOP being money and STOP being saleable goods; it must freeze into factory and labour for a time.

Every metamorphosis is a moment of danger. A sale that fails, a purchase that can't be made — and the circuit jams.`,

        `Now the enemy of capital: TIME.

Capital tied up as unsold stock, as goods in transit, as money waiting in a drawer, produces NOTHING. It only produces while in production. Every hour spent merely circulating is an hour of idle, barren value.`,

        `Hence the dream of the capitalist: to abolish the circulation time altogether — to sell the instant goods leave the line, to buy the instant money returns.

The railway, the telegraph, the warehouse, the advertisement — all are weapons in the war to make capital flow faster.`,

        `From this comes TURNOVER. The same £1,000 that completes its circuit twice a year does the work of £2,000 that turns over once.

Speed itself becomes a source of profit. Two capitals of equal size, equally exploitative, will yield wildly different annual returns if one simply turns over faster.`,

        `Capital also splits by how it surrenders its value.

FIXED capital — buildings, machines, tools — yields up its value slowly, in driblets, over many circuits, while staying put in the workshop.

CIRCULATING capital — raw materials, and the wages of labour — is wholly used up and recovered in a single round.`,

        `This distinction is not bookkeeping pedantry. The long, slow turnover of fixed capital is why industry is so hard to start, so hard to stop, so prone to gluts of machinery — and why the lifespan of a machine quietly sets the rhythm of industrial crises.`,

        `Between handing over money and getting more back lies a gulf that must be FINANCED. Wages paid weekly; goods sold months later; a harvest that ripens once a year.

Out of these gaps grow the merchant who specialises in selling, and the banker who specialises in bridging time with credit. Circulation breeds its own servants.`,

        `Now the grand question of Volume II — the one almost no one before me dared to pose:

How does the WHOLE of capitalist society reproduce itself, year after year, without flying apart?

Not one firm — the entire system. Where does each producer find buyers, and each buyer find goods?`,

        `Divide all of production into two great Departments.

DEPARTMENT I produces MEANS OF PRODUCTION — machines, iron, coal, raw materials. Goods that go back into production.

DEPARTMENT II produces MEANS OF CONSUMPTION — bread, cloth, furniture. Goods that people actually live on.`,

        `For the system to keep turning, the two Departments must mesh exactly.

Department I must produce just enough machines and materials to replace what BOTH Departments wear out.
Department II must produce just enough consumer goods to feed BOTH Departments' workers and owners.

A vast, unplanned act of fitting-together.`,

        `SIMPLE reproduction first — the system merely standing still, all surplus consumed, nothing growing.

Even here the exchanges between the Departments must balance to the penny. The new means of production made in Dept I must equal the means of production used up across the whole economy. Tilt the proportion, and goods pile unsold while others run short.`,

        `Now EXPANDED reproduction — the real case — where part of the surplus is reinvested. Accumulation.

The balance grows far more delicate. Department I must now produce a SURPLUS of means of production, exactly matched to the new investment both Departments intend to make. The proportions must hold across the entire economy, simultaneously.`,

        `And here is the scandal: NOBODY arranges these proportions.

No plan, no council, no foresight sets how much iron, bread, or machinery the system needs. Each capitalist invests blindly, for private gain, guessing at a market he cannot see.`,

        `So the necessary balance is "enforced" only AFTER it has already been violated — through glut, bankruptcy, and crisis. The proportions assert themselves as a law of nature asserts itself against a man who ignores it: by disaster.

The anarchy of the market is held together by periodic breakdown.

That is DAS KAPITAL, Volume II. /end

Volume III — how the surplus is shared out, and how the truth is hidden — next. 🧵`,
      ],
      replies: [
        { who: ENGELS, time: "1885", text: `I assembled this volume from your manuscripts after you were gone, Karl. Your handwriting nearly finished me — but it is done, and it is yours. 🕯️`, stats: { reply: 980, repost: 12000, like: 142000, views: 4200000 } },
        { who: CHAD, time: "1885", text: `tldr nobody plans the economy and it works fine?? sounds like FREEDOM to me 🦅 stay mad`, stats: { reply: 6100, repost: 180, like: 1400, views: 890000 } },
        { who: ROSA, time: "1885", text: `THE REPRODUCTION SCHEMES. This is the part everyone skips and it's the most important thing he ever wrote. The system only balances by crisis. 🔥📌`, stats: { reply: 310, repost: 9200, like: 58000, views: 1300000 } },
      ],
    },

    /* -------------------------------- VOLUME III -------------------------------- */
    "kapital-3": {
      vol: "Volume III", subtitle: "The Process of Capitalist Production as a Whole",
      date: "1894", time: "11:40 AM",
      posthumous: true,
      head: { reply: 11800, repost: 47000, like: 211000, bookmark: 61000, views: 3600000 },
      tweets: [
        `Volume I: how surplus-value is produced.
Volume II: how capital circulates.
Volume III: how the whole thing APPEARS on the surface — and how the surface systematically lies.

The final thread on DAS KAPITAL. 🧵`,

        `Begin with what the capitalist actually sees. He does not see "surplus-value." He sees PROFIT.

To him, the surplus seems to spring from his TOTAL outlay — from his machines and materials just as much as from his workers. The origin of the gain is already hidden from the man who pockets it.`,

        `So measure his return his way: profit divided by total capital. The RATE OF PROFIT.

This is a mask laid over the RATE OF EXPLOITATION (surplus ÷ wages). The first looks modest and respectable; the second names the theft. Same money — two faces, and the system shows you only the gentle one.`,

        `Now competition does something strange. Capitalists chase the highest returns, money floods from low-profit trades to high-profit ones, until a single GENERAL RATE OF PROFIT settles across all industries.

The result: surplus squeezed from labour-heavy industries is quietly redistributed to capital-heavy ones. Profit and exploitation part ways entirely.`,

        `This is why the bourgeois economist can stare straight at the world and never see exploitation. By the time surplus-value reappears as average profit, it has been shuffled across the whole economy. Every capitalist draws on a common pool of unpaid labour, but each imagines his profit is his own doing.`,

        `Now the law I consider the most important in all of political economy.

As capital accumulates, each worker is armed with ever more machinery — the ratio of dead labour to living labour rises. But ONLY living labour creates surplus.

Therefore THE RATE OF PROFIT TENDS TO FALL.`,

        `Read that contradiction slowly. In its hunger for profit, capital replaces workers with machines. But in doing so it shrinks the very source — living labour — from which all profit flows.

Capital undermines itself. It races to exhaust the ground it stands on. The system's success is the engine of its trouble.`,

        `The fall is a TENDENCY, not a smooth slide, because capital fights back with counter-tendencies:

driving up the rate of exploitation, lengthening hours, cheapening machinery, beating down wages, cheapening raw materials through foreign trade and conquest, and throwing workers onto the street.

The law works by being violently resisted.`,

        `When the counter-tendencies fail, the contradiction erupts as CRISIS.

Overproduction — not too little, but too MUCH: warehouses full, while workers who made the goods cannot afford to buy them. Factories idle beside people in want. The most absurd spectacle in history, repeated like clockwork.`,

        `Crisis is not the system breaking. Crisis is the system CORRECTING. Capital is destroyed wholesale — firms bankrupted, goods dumped, machines scrapped, workers cast off — until what remains can once again be profitable.

Devastation is how the rate of profit is restored. The cure is the disease.`,

        `Now Volume III divides the spoils, and introduces the men who live off them without producing.

First the MERCHANT. He makes nothing. By specialising in buying and selling he speeds the turnover of others' capital — and for that service he claims a cut of the surplus. Commercial profit: a tax on circulation.`,

        `Then INTEREST-BEARING CAPITAL, and the fetish in its purest, maddest form.

Money lent out returns as more money: M — M′. Production has vanished from view entirely. Capital now appears to "bear interest as it is in the nature of a pear-tree to bear pears." Value seems to breed value, with no living labour in sight.`,

        `In the lender's mind, capital is a self-acting machine for making money, like a magic apple-tree. The factory, the worker, the stolen hours — all gone behind the curtain.

This is the fetish complete: the social relation of exploitation, dressed up as a natural property of a thing called "money."`,

        `Then the LANDLORD, collecting GROUND-RENT.

He produces nothing, improves nothing. He simply owns the earth, and charges a toll for permission to work it. Rent is a levy on production extracted by a title deed — the dead hand of monopoly laid upon the soil itself.`,

        `So the single stream of surplus-value, pumped from living labour, is carved into rival incomes: profit of enterprise, commercial profit, interest, and rent.

Each recipient is certain his share flows from his OWN contribution — his capital, his money, his land — and not one of them from the worker.`,

        `This is consummated in what I call the TRINITY FORMULA — the catechism of bourgeois economics:

Capital → profit.
Land → rent.
Labour → wages.

Three sources, three rewards, each apparently independent and natural. The perfect, complete, seamless mystification.`,

        `It is a religion. Capital seems to create profit as a tree bears fruit; land to yield rent as a meadow yields grass; and labour, last and least, to earn a wage as its modest due. The origin of all of it in unpaid labour is buried beyond sight.`,

        `Volume III tears off the mask. Track every one of those incomes upstream and they meet at a single source: the surplus labour of the working class. Profit, interest, rent — all are unpaid labour-time, divided among those who did not perform it.

That is DAS KAPITAL, Volume III. The critique is complete. /end`,

        `A closing word, from your editor.

These last two volumes you did not live to publish. I built them from your manuscripts because the work had to be finished — and because the truth in them is too dangerous to leave in a drawer.

Read all three. Then act. — F.E. 🕯️`,
      ],
      replies: [
        { who: ENGELS, time: "1894", text: `Ten years editing your handwriting, Karl. Worth every hour. The critique stands complete now — all three volumes. Rest. 🕯️`, stats: { reply: 1500, repost: 18000, like: 196000, views: 5100000 } },
        { who: RICARDO, time: "1894", text: `The falling rate of profit troubled me too. I could not solve it. He has. Credit where due. 🎩`, stats: { reply: 640, repost: 7400, like: 49000, views: 1100000 } },
        { who: CHAD, time: "1894", text: `"the rate of profit tends to fall" my portfolio is up 30% this year actually 📈📈 cope harder`, stats: { reply: 8300, repost: 240, like: 2100, views: 1600000 } },
      ],
    },
  };

  /* =========================================================================
     PROFILE + FEED
     ========================================================================= */
  const PROFILE = Object.assign({}, MARX, {
    banner: "assets/banner.jpg",
    bio: `Materialist. Critic of political economy. Author of DAS KAPITAL (I–III).\n"I have only one passion — the relentless critique of everything that exists." Workers of all lands, unite.`,
    location: "London (in exile)",
    link: { text: "marxists.org/archive/marx", href: "#" },
    born: "Born May 1818, Trier",
    joined: "Joined September 1867",
    following: 31,
    followers: 4400000,
    postsCount: "1,883",
  });

  // standalone single-tweet posts (verbatim Kapital one-liners) for the profile feed
  const FEED = [
    { type: "thread", id: "kapital-1", pinned: true },
    { type: "post", time: "Apr 2, 1868",
      text: `Reminder, from the preface:

"Perseus wore a magic cap so that the monsters he hunted might not see him. We draw the magic cap down over our own eyes and ears so as to deny that there are any monsters."`,
      stats: { reply: 2100, repost: 19000, like: 121000, bookmark: 8800, views: 2400000 } },
    { type: "thread", id: "kapital-2" },
    { type: "post", time: "Nov 11, 1871",
      text: `"Capital is reckless of the health or length of life of the labourer, unless under compulsion from society."

Print it on the factory gates.`,
      stats: { reply: 1700, repost: 24000, like: 158000, bookmark: 12000, views: 3100000 } },
    { type: "post", time: "Jun 30, 1872",
      text: `They ask why the Church tolerates so much heresy yet fears my little book.

"The English Established Church will more readily pardon an attack on 38 of its 39 articles than on 1/39 of its income."`,
      stats: { reply: 3400, repost: 31000, like: 174000, bookmark: 9100, views: 2900000 } },
    { type: "thread", id: "kapital-3" },
  ];

  const TRENDS = [
    { cat: "Trending in Political Economy", name: "Surplus Value", count: "89.2K posts" },
    { cat: "Economics · Trending", name: "#LabourTheoryOfValue", count: "42.1K posts" },
    { cat: "Trending", name: "Commodity Fetishism", count: "31.4K posts" },
    { cat: "Business & finance · Trending", name: "Falling Rate of Profit", count: "67.5K posts" },
    { cat: "Trending in History", name: "Enclosure Acts", count: "18.6K posts" },
  ];
  const FOLLOW = [
    ENGELS,
    { name: "G.W.F. Hegel", handle: "gwf_hegel", avatar: "data-initials", verified: true },
    ROSA,
  ];

  /* =========================================================================
     Helpers
     ========================================================================= */
  function fmt(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(n >= 1e7 ? 0 : 1).replace(/\.0$/, "") + "M";
    if (n >= 1e4) return Math.round(n / 1e3) + "K";
    if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
    return String(n);
  }
  function fmtFull(n) { return n.toLocaleString("en-US"); }

  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ESC[c]); }

  function rich(text) {
    let h = esc(text);
    h = h.replace(/(https?:\/\/[^\s]+)/g, '<span class="ln">$1</span>');
    h = h.replace(/(^|[\s(])(@[A-Za-z0-9_]+)/g, '$1<span class="ln">$2</span>');
    h = h.replace(/(^|[\s(])(#[A-Za-z0-9_]+)/g, '$1<span class="ln">$2</span>');
    return h;
  }

  function svg(id, cls) { return `<svg class="${cls || "icon"}"><use href="#${id}"/></svg>`; }
  function badge(v) { return v ? `<svg class="verified"><use href="#i-verified"/></svg>` : ""; }

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
  function avatarHTML(p, cls) {
    if (p.avatar === "data-initials") return initialsAvatar(p.name);
    return `<img class="${cls || "avatar"}" src="${esc(p.avatar)}" alt="${esc(p.name)}" />`;
  }
  // Marx's avatar/name link to the profile; others render inert
  function authorLink(p, inner) {
    return p.handle === MARX.handle ? `<a class="lnk" href="#/karlmarx">${inner}</a>` : inner;
  }

  /* ---- Action bar ------------------------------------------------------- */
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
          <button class="action share" aria-label="Share"><span class="ic-wrap">${svg("i-share")}</span></button>
        </div>
      </div>`;
  }

  /* ---- Header ----------------------------------------------------------- */
  function header(title, sub) {
    return `
      <div class="col-header">
        <div class="back" role="button" aria-label="Back">${svg("i-back")}</div>
        <div class="titlewrap">
          <div class="title">${esc(title)}</div>
          ${sub ? `<div class="sub">${esc(sub)}</div>` : ""}
        </div>
      </div>`;
  }

  /* =========================================================================
     STATUS (thread) view
     ========================================================================= */
  function focusedTweet(text, stats, t) {
    return `
      <section class="tweet focused" id="t1">
        <div class="focused-head">
          ${authorLink(MARX, avatarHTML(MARX))}
          <div class="who">
            ${authorLink(MARX, `<span class="name">${esc(MARX.name)} ${badge(MARX.verified)}</span>`)}
            ${authorLink(MARX, `<span class="handle">@${esc(MARX.handle)}</span>`)}
          </div>
          <div class="more" role="button" aria-label="More">${svg("i-dots")}</div>
        </div>
        <div class="focused-text">${rich(text)}</div>
        <div class="focused-meta">
          <span>${esc(t.time)}</span><span class="dot">·</span><span>${esc(t.date)}</span><span class="dot">·</span>
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

  function threadTweet(text, stats, connectorBottom, idx, total, date) {
    return `
      <section class="tweet" id="t${idx + 1}">
        <div class="tweet-avatar-col">
          ${authorLink(MARX, avatarHTML(MARX))}
          ${connectorBottom ? '<div class="thread-line"></div>' : ""}
        </div>
        <div class="tweet-body">
          <div class="tweet-head">
            ${authorLink(MARX, `<span class="name">${esc(MARX.name)}</span>`)} ${badge(MARX.verified)}
            ${authorLink(MARX, `<span class="handle">@${esc(MARX.handle)}</span>`)}
            <span class="dot">·</span><span class="time">${esc(date)}</span>
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
        <div class="tweet-avatar-col">${avatarHTML(r.who)}</div>
        <div class="tweet-body">
          <div class="tweet-head">
            <span class="name">${esc(r.who.name)}</span> ${badge(r.who.verified)}
            <span class="handle">@${esc(r.who.handle)}</span>
            <span class="dot">·</span><span class="time">${esc(r.time)}</span>
            ${r.who.followsYou ? '<span class="followsyou">Follows you</span>' : ""}
            <span class="more" role="button" aria-label="More">${svg("i-dots")}</span>
          </div>
          <div class="tweet-text" style="color:var(--text-secondary);margin:-2px 0 2px">
            Replying to <a class="lnk" href="#/karlmarx" style="color:var(--blue-text)">@${esc(MARX.handle)}</a>
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

  function decay(base, i, factor) {
    const wobble = 0.9 + ((i * 7919) % 100) / 500;
    return Math.max(40, Math.round(base * Math.pow(factor, i) * wobble));
  }

  function renderStatus(id) {
    const t = THREADS[id] || THREADS["kapital-1"];
    const total = t.tweets.length;
    let html = header("Post");
    html += focusedTweet(t.tweets[0], t.head, t);
    for (let i = 1; i < total; i++) {
      const stats = {
        reply: decay(t.head.reply * 0.18, i, 0.93),
        repost: decay(t.head.repost * 0.12, i, 0.95),
        like: decay(t.head.like * 0.16, i, 0.96),
        bookmark: decay(t.head.bookmark * 0.1, i, 0.95),
        views: decay(t.head.views * 0.42, i, 0.97),
      };
      html += threadTweet(t.tweets[i], stats, i < total - 1, i, total, t.date);
    }
    html += composer();
    html += t.replies.map(replyTweet).join("");
    setView(html);
    wireComposer();
  }

  /* =========================================================================
     PROFILE view
     ========================================================================= */
  function feedItem(item) {
    if (item.type === "thread") {
      const t = THREADS[item.id];
      const head = t.tweets[0];
      const s = t.head;
      return `
        ${item.pinned ? `<div class="pinned-row">${svg("i-pin", "icon")}<span>Pinned</span></div>` : ""}
        <section class="tweet feeditem" data-href="#/status/${item.id}">
          <div class="tweet-avatar-col">${avatarHTML(MARX)}</div>
          <div class="tweet-body">
            <div class="tweet-head">
              <span class="name">${esc(MARX.name)}</span> ${badge(MARX.verified)}
              <span class="handle">@${esc(MARX.handle)}</span>
              <span class="dot">·</span><span class="time">${esc(t.date)}</span>
              <span class="more" role="button" aria-label="More">${svg("i-dots")}</span>
            </div>
            <div class="tweet-text">${rich(head)}</div>
            <a class="show-thread" href="#/status/${item.id}">Show this thread</a>
            ${actionBar({ reply: s.reply, repost: s.repost, like: s.like, bookmark: s.bookmark, views: s.views })}
          </div>
        </section>`;
    }
    // standalone post
    return `
      <section class="tweet">
        <div class="tweet-avatar-col">${avatarHTML(MARX)}</div>
        <div class="tweet-body">
          <div class="tweet-head">
            <span class="name">${esc(MARX.name)}</span> ${badge(MARX.verified)}
            <span class="handle">@${esc(MARX.handle)}</span>
            <span class="dot">·</span><span class="time">${esc(item.time)}</span>
            <span class="more" role="button" aria-label="More">${svg("i-dots")}</span>
          </div>
          <div class="tweet-text">${rich(item.text)}</div>
          ${actionBar(item.stats)}
        </div>
      </section>`;
  }

  function renderProfile() {
    const p = PROFILE;
    const tabs = ["Posts", "Replies", "Highlights", "Articles", "Media", "Likes"];
    let html = header(p.name, p.postsCount + " posts");
    html += `
      <div class="profile-banner"><img src="${esc(p.banner)}" alt="" /></div>
      <div class="profile-top">
        <div class="profile-avatar-row">
          <img class="profile-avatar" src="${esc(p.avatar)}" alt="${esc(p.name)}" />
          <div class="profile-actions">
            <button class="btn-outline btn-icon-round" aria-label="More" data-toast="Nothing more to see here.">${svg("i-dots")}</button>
            <button class="btn-outline btn-icon-round" aria-label="Message" data-toast="Messages are unavailable on this archive.">${svg("i-msg")}</button>
            <button class="btn-outline btn-icon-round" aria-label="Notify" data-toast="You'll be notified — in theory.">${svg("i-notif")}</button>
            <button class="btn-follow-lg following"><span class="ftxt">Following</span></button>
          </div>
        </div>
        <div class="profile-identity">
          <div class="profile-name">${esc(p.name)} <svg class="verified"><use href="#i-verified"/></svg></div>
          <div class="profile-handle">@${esc(p.handle)}</div>
        </div>
        <div class="profile-bio">${rich(p.bio)}</div>
        <div class="profile-meta">
          <span>${svg("i-location", "icon")} ${esc(p.location)}</span>
          <span>${svg("i-link", "icon")} <a class="ln" href="${esc(p.link.href)}" data-toast="External links are disabled on this archive.">${esc(p.link.text)}</a></span>
          <span>${svg("i-cal", "icon")} ${esc(p.born)}</span>
          <span>${svg("i-cal", "icon")} ${esc(p.joined)}</span>
        </div>
        <div class="profile-stats">
          <span><b>${fmt(p.following)}</b> Following</span>
          <span><b>${fmt(p.followers)}</b> Followers</span>
        </div>
      </div>
      <div class="profile-tabs">
        ${tabs.map((t, i) => `<div class="profile-tab${i === 0 ? " active" : ""}" data-tab="${esc(t)}">${esc(t)}</div>`).join("")}
      </div>
      <div id="profile-feed">
        ${FEED.map(feedItem).join("")}
      </div>`;
    setView(html);
  }

  /* =========================================================================
     Right-sidebar widgets (rendered once)
     ========================================================================= */
  function buildTrends() {
    const el = document.getElementById("trends");
    const html =
      TRENDS.map((t) => `
        <div class="trend">
          <div class="cat">${esc(t.cat)} <span class="more-dot">${svg("i-dots", "icon")}</span></div>
          <div class="name">${esc(t.name)}</div>
          <div class="count">${esc(t.count)}</div>
        </div>`).join("") + `<a class="show-more" href="#" data-toast="That's the whole archive.">Show more</a>`;
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
        </div>`).join("") + `<a class="show-more" href="#" data-toast="That's the whole archive.">Show more</a>`;
    el.insertAdjacentHTML("beforeend", html);
  }

  /* =========================================================================
     Router
     ========================================================================= */
  function setView(html) {
    const v = document.getElementById("view");
    v.textContent = "";
    v.insertAdjacentHTML("beforeend", html);
    window.scrollTo(0, 0);
  }
  function route() {
    const h = location.hash.replace(/^#/, "");
    if (h === "/karlmarx") { renderProfile(); syncNav("profile"); return; }
    const m = h.match(/^\/status\/([\w-]+)$/);
    if (m && THREADS[m[1]]) { renderStatus(m[1]); syncNav("home"); return; }
    renderStatus("kapital-1"); syncNav("home");
  }
  function syncNav(active) {
    document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
    document.querySelectorAll(".mnav").forEach((n) => n.classList.remove("active"));
    const navSel = active === "profile" ? ".nav-profile" : '.nav-item[href="#/"]';
    document.querySelector(navSel) && document.querySelector(navSel).classList.add("active");
    const mSel = active === "profile" ? '.mnav[href="#/karlmarx"]' : '.mnav[href="#/"]';
    document.querySelector(mSel) && document.querySelector(mSel).classList.add("active");
  }

  /* =========================================================================
     Interactions
     ========================================================================= */
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

  function wireComposer() {
    const input = document.getElementById("reply-input");
    const composerEl = document.getElementById("composer");
    const btn = document.getElementById("reply-btn");
    if (!input) return;
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

  function wireGlobal() {
    document.body.addEventListener("click", (e) => {
      const like = e.target.closest(".action.like");
      if (like) {
        e.stopPropagation(); e.preventDefault();
        const on = like.classList.toggle("on");
        like.querySelector("use").setAttribute("href", on ? "#i-like-fill" : "#i-like");
        const base = +like.dataset.base; if (!isNaN(base)) setCount(like, base, on);
        return;
      }
      const repost = e.target.closest(".action.repost");
      if (repost) {
        e.stopPropagation(); e.preventDefault();
        const on = repost.classList.toggle("on");
        const base = +repost.dataset.base; if (!isNaN(base)) setCount(repost, base, on);
        toast(on ? "Reposted" : "Repost removed");
        return;
      }
      const book = e.target.closest(".action.bookmark");
      if (book) {
        e.stopPropagation(); e.preventDefault();
        const on = book.classList.toggle("on");
        book.querySelector("use").setAttribute("href", on ? "#i-bookmark-fill" : "#i-bookmark");
        const base = +book.dataset.base; if (!isNaN(base) && base) setCount(book, base, on);
        toast(on ? "Added to your Bookmarks" : "Removed from your Bookmarks");
        return;
      }
      const replyB = e.target.closest(".action.reply");
      if (replyB) { e.stopPropagation(); e.preventDefault(); const ri = document.getElementById("reply-input"); if (ri) ri.focus(); return; }
      const share = e.target.closest(".action.share");
      if (share) {
        e.stopPropagation(); e.preventDefault();
        const url = "https://das.milner.zone/" + location.hash;
        if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
        toast("Copied to clipboard");
        return;
      }
      const views = e.target.closest(".action.views");
      if (views) { e.stopPropagation(); e.preventDefault(); return; }

      const follow = e.target.closest(".follow-btn, .btn-follow-lg");
      if (follow) {
        e.stopPropagation(); e.preventDefault();
        const f = follow.classList.toggle("following");
        const tx = follow.querySelector(".ftxt"); if (tx) tx.textContent = f ? "Following" : "Follow";
        return;
      }
      const tab = e.target.closest(".profile-tab");
      if (tab) {
        e.preventDefault();
        const wasActive = tab.classList.contains("active");
        if (!wasActive && tab.dataset.tab !== "Posts") { toast("Nothing to see here — yet."); return; }
        document.querySelectorAll(".profile-tab").forEach((x) => x.classList.remove("active"));
        tab.classList.add("active");
        return;
      }

      const toastEl = e.target.closest("[data-toast]");
      if (toastEl) { e.preventDefault(); toast(toastEl.dataset.toast); return; }

      const back = e.target.closest(".col-header .back");
      if (back) { e.preventDefault(); if (history.length > 1) history.back(); else location.hash = "#/karlmarx"; return; }

      // route links (#/...) — let the browser update the hash, router handles it
      const a = e.target.closest("a");
      if (a && (a.getAttribute("href") || "").startsWith("#/")) return;

      const navEl = e.target.closest("[data-href]");
      if (navEl) { location.hash = navEl.getAttribute("data-href"); return; }
    });
  }

  /* =========================================================================
     Boot
     ========================================================================= */
  buildTrends();
  buildFollow();
  wireGlobal();
  window.addEventListener("hashchange", route);
  route();
})();
