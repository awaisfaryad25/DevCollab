import { StaticImageData } from "next/image";
import {
  Laptop
} from "@/assets";

export interface BlogContentBlock {
  heading: string;
  image?: StaticImageData;
  imagePosition?: 'left' | 'right';
  paragraphs: string[];
}

export interface Blog {
  slug: string;
  image: StaticImageData;
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  author: string;
  content: BlogContentBlock[];
}

export const blogs: Blog[] = [
  {
    slug: "improving-process-safety-through-modern-risk-engineering",
    image: Laptop,
    title: "Improving Process Safety Through Modern Risk Engineering",
    category: "Process Safety",
    date: "12 Jul 2026",
    readTime: "6 min read",
    description: "Discover how engineering-driven risk assessments reduce operational hazards while improving plant reliability. As facilities age and processes grow more complex, static compliance-driven safety reviews are no longer enough. Modern risk engineering combines proven assessment techniques with digital tools to turn raw operational data into decisions that actually prevent incidents.",
    author: "John Doe",
    content: [
      {
        heading: "Why Legacy Risk Models Fall Short",
        image: Laptop, 
        imagePosition: 'left',
        paragraphs: [
          "Most risk registers were built for a plant that no longer exists. Equipment ages, control philosophies change, operating envelopes shift, and the assumptions behind an old HAZOP or LOPA study quietly stop matching reality — long before anyone gets around to updating the paperwork. A register signed off five years ago may still be technically on file, but if nobody has checked it against what the plant is actually doing today, it's closer to a historical document than a working safety tool. The gap between the model and the plant grows silently, one small process change at a time, until an audit or an incident forces the mismatch into the open.",
          "Modern risk engineering treats the risk model as a living document rather than a compliance artifact, feeding operating data, near-miss reports, and inspection history back into the assessment on a set cadence instead of once every five years. That shift changes who the risk model is really for — not the auditor checking a box, but the engineer trying to decide whether a specific barrier can still be trusted this quarter, and what to do about it if it can't.",
        ],
      },
      {
        heading: "Building Risk Engineering Into Daily Operations",
        paragraphs: [
          "The plants that see the biggest safety gains don't run risk engineering as a separate department tucked away from operations — they build it directly into shift handovers, maintenance planning, and management-of-change reviews, so risk thinking shows up before a decision is made, not after an incident forces a retrospective look. When a shift supervisor can see, in the handover notes, which barriers are currently degraded and why, risk stops being an abstract annual exercise and becomes part of how the plant is actually run, hour to hour.",
          "That shift requires tooling operators genuinely use day to day: dashboards that surface the barriers most likely to be degraded right now, not just a static bowtie diagram filed away after the workshop and never opened again. Getting this right usually means involving operations and maintenance teams in designing the tool itself, rather than handing them a system built purely from an engineering office perspective — the people closest to the equipment know exactly which alerts matter and which ones they'll learn to ignore within a week.",
        ],
      },
      {
        heading: "Quantitative Tools That Earn Their Keep",
        image: Laptop, 
        imagePosition: 'right',
        paragraphs: [
          "Quantitative Risk Assessment, consequence modelling, and facility siting studies remain the backbone of serious risk engineering work — they turn a vague sense of 'what could go wrong' into a specific number a design team can actually act on, whether that means re-spacing equipment, re-rating a blast wall, or relocating an occupied building further from a hazard zone. Without that quantitative step, risk conversations tend to stay qualitative and subjective, which makes it easy for competing priorities like cost and schedule to quietly win the argument.",
          "The same techniques extend naturally into fire and explosion risk work, where modelling heat radiation and overpressure zones directly shapes emergency response planning rather than just producing a report that sits on a shelf. A consequence model that identifies exactly which control room or evacuation route falls inside a credible overpressure zone gives emergency planners something concrete to design around, instead of a generic assumption borrowed from a similar facility elsewhere.",
        ],
      },
      {
        heading: "Where Digital Tools Fit In",
        paragraphs: [
          "AI-assisted analytics and real-time monitoring don't replace the engineering judgment behind a risk assessment — they widen what the assessment can actually see, flagging drifting trends and gradual barrier degradation in the gaps between formal review cycles. A safety instrumented system that's technically still within spec but trending toward its trip point over several months is exactly the kind of signal that a five-year review cycle would miss entirely, and that continuous monitoring is built to catch early.",
          "Digital twins add another layer on top of that, letting teams test 'what if' scenarios against a virtual model before committing to any change on the real asset. Want to know what happens to overpressure zones if a new unit gets added to a congested area? A twin lets that question get answered on screen, weeks before a single piece of steel gets ordered.",
        ],
      },
      {
        heading: "Getting Buy-In From Operations",
        image: Laptop, 
        imagePosition: 'left',
        paragraphs: [
          "None of this works if risk engineering stays a purely technical exercise owned by a small central team. The organizations that get the most value treat frontline operators and maintenance technicians as a primary source of risk intelligence, not just a downstream audience for the finished assessment. They're the ones who notice the valve that sticks a little more each month, or the alarm that's started nuisance-tripping — details that rarely make it into a formal report but matter enormously to whether a barrier is actually reliable.",
          "Building that kind of feedback loop takes deliberate effort: simple reporting channels, visible follow-up on issues raised, and a genuine willingness from engineering teams to revise a risk model based on what the floor is telling them, rather than treating the model as a finished product handed down from above.",
        ],
      },
      {
        heading: "What Reliable Plants Have in Common",
        paragraphs: [
          "Across the sites we've studied, the common thread isn't more inspections, more paperwork, or more sophisticated software — it's faster feedback loops between the people who see equipment degrade in real time and the people who own and maintain the risk model. When that loop is short, a developing problem gets caught and addressed while it's still cheap and simple to fix. When it's long, the same problem festers quietly until it surfaces as an incident, at which point the fix is far more expensive and the damage, in some cases, is irreversible. Investing in shortening that loop consistently produces better returns than almost any other single safety initiative we've seen implemented.",
        ],
      },
    ],
  },
  {
    slug: "engineering-studies-that-improve-plant-reliability",
    image: Laptop,
    title: "Engineering Studies That Improve Plant Reliability",
    category: "Engineering Studies",
    date: "8 Jul 2026",
    readTime: "5 min read",
    description: "Engineering studies provide valuable insights for improving process efficiency and operational performance. Done well and done early, they surface failure modes and bottlenecks while changes are still cheap to make — long before commissioning locks a design in place.",
    author: "Alex Chen",
    content: [
      {
        heading: "Reliability Starts on Paper",
        image: Laptop, 
        imagePosition: 'left',
        paragraphs: [
          "A reliability, availability, and maintainability (RAM) study forces the question most teams skip entirely during the excitement of a new project: what actually happens to overall throughput when this specific piece of equipment fails, and how long does it realistically take to recover? The answer usually reshapes the maintenance plan far more than any single inspection report would, because it exposes which failure modes genuinely threaten production and which ones look scary on paper but barely register at the plant level.",
          "Done early in a project, these studies change equipment selection, redundancy decisions, and layout choices while they're still cheap to change — not after commissioning, when every fix competes directly with production targets and a redesign means real money and real schedule slippage. Teams that commission a RAM study only after startup problems appear are, in effect, paying twice: once for the original design decisions, and again for the retrofit needed to correct them.",
        ],
      },
      {
        heading: "Debottlenecking Without Guesswork",
        paragraphs: [
          "Throughput studies and capacity assessments identify the single constraint that's actually limiting a plant's output — which is rarely the piece of equipment operators instinctively assume it is. Intuition tends to point at the newest or noisiest unit, but a proper end-to-end process model frequently reveals that the real bottleneck sits somewhere upstream or downstream, quietly capping capacity while attention and budget get spent elsewhere entirely.",
          "Modelling the process holistically, rather than unit by unit, avoids the expensive mistake of upgrading equipment that was never the limiting factor in the first place. We've seen plants spend significant capital on a compressor upgrade only to find, after the fact, that a control valve two units away was the actual constraint all along — money that a proper debottlenecking study would have redirected from day one.",
        ],
      },
      {
        heading: "Studies That Support Capital Decisions",
        image: Laptop, 
        imagePosition: 'right',
        paragraphs: [
          "Engineering studies also play a quieter but critical role in justifying capital spend to leadership. A well-structured feasibility or options study lays out the trade-offs between competing designs in terms leadership can actually weigh against each other — capital cost, operating cost, reliability impact, and schedule risk — rather than leaving the decision to whichever option was presented most persuasively in a meeting.",
          "That structure matters because capital decisions made without it tend to get revisited later, once the operational consequences of an under-analyzed shortcut become apparent. A thorough study up front is almost always cheaper than the retrofit that follows a decision made on incomplete information.",
        ],
      },
      {
        heading: "Turning Findings Into Action",
        paragraphs: [
          "A study that ends in a report nobody reopens hasn't actually improved reliability — it's just documented the problem in more detail than before. The studies that genuinely move the needle end in a prioritized, owned action list with real dates attached, assigned to specific people who are expected to report progress against it, not a set of general recommendations left for 'someone' to pick up eventually.",
          "That accountability structure is often the real differentiator between a study that changes plant performance and one that becomes an expensive PDF. The technical content might be nearly identical between the two, but only one of them actually gets acted on.",
        ],
      },
      {
        heading: "Building a Culture of Continuous Study",
        image: Laptop, 
        imagePosition: 'left',
        paragraphs: [
          "The most reliable facilities we've worked with don't treat engineering studies as a one-time project gate — they treat them as a recurring habit, revisiting RAM assumptions and throughput models whenever operating conditions shift meaningfully, rather than waiting for the next major capital project to justify the exercise. That habit catches drift early, before small deviations compound into a genuine reliability problem that's far more expensive to unwind.",
        ],
      },
    ],
  },
  {
    slug: "digital-safety-ai-for-industrial-operations",
    image: Laptop,
    title: "Digital Safety & AI for Industrial Operations",
    category: "Digital Safety",
    date: "2 Jul 2026",
    readTime: "7 min read",
    description: "Learn how AI-powered monitoring is transforming industrial safety and decision making. As facilities generate more operational data than any team can review manually, the shift is from periodic inspection toward predictive, always-on risk visibility.",
    author: "Sarah Mitchell",
    content: [
      {
        heading: "From Alarms to Early Warnings",
        image: Laptop, 
        imagePosition: 'left',
        paragraphs: [
          "Traditional alarm systems tell an operator something is already wrong, at the moment it becomes wrong — by design, they're reactive rather than predictive. Pattern-based monitoring, by contrast, can flag the gradual drift toward that state hours or even days earlier, giving teams enough lead time to intervene calmly instead of reacting under pressure once a threshold has already been crossed. That extra window is often the difference between a planned maintenance action and an unplanned shutdown.",
          "The value in any of this isn't really the underlying model — it's whether the resulting alert actually reaches the right person, at the right console, phrased in language they can act on within seconds rather than something they need to decode first. A sophisticated predictive model that generates an alert nobody understands or trusts is functionally no better than no model at all; the human interface around the technology matters just as much as the technology itself.",
        ],
      },
      {
        heading: "Digital Twins and Intelligent Permits",
        paragraphs: [
          "A digital twin gives teams a virtual version of a physical asset to test scenarios against without touching the real process at all — useful for anything from evaluating a proposed layout change to walking through a failure mode during a planned shutdown, all without the cost or risk of experimenting on the actual plant. Teams can compress what used to take weeks of careful physical planning into days of simulated iteration, catching problems before they ever reach the field.",
          "Paper-based permit-to-work systems, meanwhile, remain one of the quieter and more persistent sources of operational risk on many sites: delayed approvals, poor visibility into who's actually working where at any given moment, and manual errors that slip through busy shifts unnoticed. Digital permit-to-work systems close that gap with automated workflows, real-time tracking, and a clear digital trail of who approved what and when — turning a historically manual process into something a safety team can actually audit and trust in real time.",
        ],
      },
      {
        heading: "Barrier Health, Not Just Barrier Existence",
        image: Laptop, 
        imagePosition: 'right',
        paragraphs: [
          "Knowing that a safety barrier exists on paper is a fundamentally different thing from knowing that it's functioning correctly right now, at this exact moment. Digital barrier management platforms track inspection status, test results, and degradation trends across safety-critical equipment continuously, so barrier health becomes something a team actively monitors day to day, rather than something they simply assume between scheduled inspection intervals. That distinction — monitored versus assumed — is where a surprising number of preventable incidents actually originate.",
        ],
      },
      {
        heading: "Where AI Still Needs a Human",
        paragraphs: [
          "Safety-critical decisions still need an experienced engineer in the loop, and that isn't likely to change any time soon regardless of how capable the underlying models become. The realistic near-term role for AI in industrial safety is triage and pattern surfacing — narrowing down what a team needs to look at closely, not replacing the judgment call about what to actually do once that narrower set of issues has been identified. Framing AI as a filter rather than a decision-maker keeps expectations realistic and keeps accountability exactly where it needs to remain.",
          "Data quality, integration with legacy control and historian systems, and workforce training remain the real barriers to adoption in most facilities — the algorithms themselves are rarely the hard part of a digital safety rollout. A facility with clean, well-labeled historical data will get useful predictive insight out of a fairly simple model, while a facility with messy, inconsistent data will struggle to get value even from a far more sophisticated one.",
        ],
      },
      {
        heading: "Planning a Realistic Rollout",
        image: Laptop, 
        imagePosition: 'left',
        paragraphs: [
          "Organizations that succeed with digital safety transformation tend to start narrow and specific — a single high-value use case, like predictive monitoring on one critical asset class — rather than attempting to digitize every safety process across the site simultaneously. That focused approach builds internal confidence, surfaces integration issues on a manageable scale, and creates a template that can then be extended to other areas once the first use case has proven its worth in practice, rather than in a pilot deck.",
        ],
      },
    ],
  },
  {
    slug: "why-hazop-studies-still-remain-highly-essential",
    image: Laptop,
    title: "Why HAZOP Studies Still Remain Highly Essential",
    category: "HAZOP Studies",
    date: "28 Jun 2026",
    readTime: "5 min read",
    description: "HAZOP continues to be one of the industry's most effective hazard identification methods. Decades after its introduction, its disciplined, guide-word-driven structure still catches deviations that newer, faster techniques quietly miss.",
    author: "James Rodriguez",
    content: [
      {
        heading: "A Method Built on Disciplined Questions",
        image: Laptop, 
        imagePosition: 'left',
        paragraphs: [
          "HAZOP's staying power comes from its deceptive simplicity: apply the same small set of guide words — more, less, none, reverse, as well as — to every node of a process, systematically and without exception, with the right people gathered in the room at the same time. That discipline is precisely what catches the deviations checklist-based audits routinely miss, because a checklist can only ever ask about failure modes someone already thought to write down in advance.",
          "What's changed over the years isn't the method itself so much as the depth teams now bring to each session. The best HAZOPs today pull in real operating data, historical deviations, and near-miss reports, rather than relying purely on the original design intent captured in old process drawings that may no longer reflect how the unit actually runs.",
        ],
      },
      {
        heading: "Getting the Right People in the Room",
        paragraphs: [
          "A HAZOP is only ever as good as the operating experience actually sitting at the table when the guide words get applied. Facilitators who deliberately pull in operators and maintenance staff alongside design engineers consistently surface deviations that a purely design-led session, populated only by people who've never actually run the unit, tends to miss entirely — because operators know which valves stick, which instruments drift, and which procedures get quietly worked around under time pressure.",
        ],
      },
      {
        heading: "Recording Actions So They Actually Close Out",
        image: Laptop, 
        imagePosition: 'right',
        paragraphs: [
          "A HAZOP that generates a long list of recommendations but no clear owner or closure tracking has, in practice, produced very little safety value beyond the workshop itself. The sessions that genuinely reduce risk pair every recommendation with a named owner and a target date, and then follow up on that list at a fixed interval rather than letting it quietly age in a spreadsheet nobody revisits.",
        ],
      },
      {
        heading: "Revalidation, Not Just First-Time Studies",
        paragraphs: [
          "Facilities often treat the original HAZOP as a one-time gate passed early in a project's life, but process conditions, equipment, and operating philosophy all shift over time in ways that quietly invalidate parts of that original study. Periodic revalidation — checking the existing worksheets against current conditions rather than starting entirely from scratch — keeps the study relevant without the full cost of a ground-up repeat.",
        ],
      },
      {
        heading: "Keeping Sessions From Going Stale",
        image: Laptop, 
        imagePosition: 'left',
        paragraphs: [
          "A HAZOP that becomes a box-ticking ritual loses its practical value fast, regardless of how rigorous the original methodology behind it was. Rotating facilitators between sessions, actively revisiting old worksheets against actual incidents that have occurred since, and timeboxing individual nodes all help keep the team's attention focused on the deviations that matter most, rather than letting the session drift into a slow walk through paperwork that everyone has quietly stopped engaging with.",
        ],
      },
    ],
  },
  {
    slug: "preparing-facilities-for-hydrogen-safety",
    image: Laptop,
    title: "Preparing Facilities For Hydrogen Safety",
    category: "Hydrogen",
    date: "18 Jun 2026",
    readTime: "6 min read",
    description: "Hydrogen projects require specialized engineering and risk management strategies. Its wide flammability range and near-invisible flame mean facilities transitioning from natural gas can't simply reuse old design assumptions — detection, ventilation, and materials all need a fresh look.",
    author: "Priya Sharma",
    content: [
      {
        heading: "Hydrogen Behaves Differently — Design for It",
        image: Laptop, 
        imagePosition: 'left',
        paragraphs: [
          "Wide flammability range, low ignition energy, and a flame that's nearly invisible in daylight mean hydrogen systems can't simply borrow natural gas design assumptions wholesale, however tempting that shortcut might look on a tight project schedule. Detection strategy and ventilation design both need rethinking from first principles, because the sensor placement and airflow patterns that worked reliably for methane don't transfer cleanly to a gas that behaves so differently in the open air.",
          "Material selection matters just as much — hydrogen embrittlement is a slow, cumulative risk that won't show up in a commissioning test but will absolutely show up years later if it's overlooked at the design stage. By the time embrittlement becomes visible as a cracked fitting or a failed weld, the damage has typically been accumulating quietly for a long time already.",
        ],
      },
      {
        heading: "Rethinking Facility Layout for Hydrogen",
        paragraphs: [
          "Because hydrogen disperses and ignites differently from conventional fuels — rising and dispersing rapidly rather than pooling near ground level — siting studies done for a legacy natural gas facility rarely transfer directly onto a hydrogen retrofit. Equipment spacing, vent locations, and occupied-building placement often need to be reassessed against hydrogen-specific consequence models rather than simply inheriting layout decisions from the facility's previous fuel.",
        ],
      },
      {
        heading: "Detection Strategy Needs a Rethink",
        paragraphs: [
          "Standard combustible gas detectors calibrated for hydrocarbons don't always respond appropriately to hydrogen's very different diffusion and buoyancy characteristics, which means detection strategy for a hydrogen facility often needs its own dedicated design exercise rather than a straightforward substitution of sensor types. Getting placement wrong here isn't a minor gap — it directly determines how much warning time a facility actually gets before a leak becomes a hazard.",
        ],
      },
      {
        heading: "Training the Team That Runs It",
        image: Laptop, 
        imagePosition: 'right',
        paragraphs: [
          "Facilities transitioning into hydrogen often underestimate just how much of the overall risk sits in simple operator familiarity, rather than in the engineering design itself. Purpose-built hydrogen safety training closes that gap far faster than a generic process safety refresher borrowed from the facility's previous fuel program, because it addresses the specific behaviors — near-invisible flames, rapid dispersion, embrittlement risk — that don't come up at all in conventional hydrocarbon training.",
        ],
      },
      {
        heading: "Learning From Early Adopters",
        paragraphs: [
          "The facilities furthest along in their hydrogen transition tend to share one habit: they treat their early operating experience as a source of design feedback, rather than treating the original engineering package as finished the moment it's commissioned. Incidents, near misses, and even minor operational surprises get fed back into detection strategy, layout, and training on an ongoing basis, so the site's approach to hydrogen safety keeps maturing well past initial startup.",
        ],
      },
    ],
  },
  {
    slug: "building-a-strong-safer-safety-culture",
    image: Laptop,
    title: "Building A Stronger, Safer Safety Culture",
    category: "Training",
    date: "10 Jun 2026",
    readTime: "4 min read",
    description: "Developing competent teams is one of the most effective ways to improve operational safety. Culture isn't set by a policy document — it's set by what actually gets rewarded, challenged, and acted on day to day.",
    author: "Michael Park",
    content: [
      {
        heading: "Culture Follows Behavior, Not Posters",
        image: Laptop, 
        imagePosition: 'left',
        paragraphs: [
          "Safety culture doesn't come from a mission statement printed on the wall or repeated in a kickoff meeting — it comes from what actually gets rewarded, what gets challenged in the moment, and whether raising a concern genuinely changes anything afterward. Teams read those signals fast, often within their first few weeks on a new site, and they calibrate their own behavior accordingly regardless of what the official policy documents say.",
          "The clearest indicator we look for on a site visit isn't the recorded incident rate at all — it's whether a junior technician will actually stop a senior engineer mid-task over a safety concern, and just as importantly, what happens immediately afterward. A site where that kind of intervention is welcomed and acted on has a fundamentally different culture than one where it's tolerated in theory but quietly discouraged in practice.",
        ],
      },
      {
        heading: "Making Reporting Feel Safe",
        paragraphs: [
          "Near-miss reporting rates say more about the underlying culture than incident rates ever do. Teams that see a spike in near-miss reports after a training push aren't getting less safe — they're finally telling you what was already happening on the floor, information that was previously going unreported simply because nobody felt it was safe or worthwhile to raise it. A rising near-miss count, read correctly, is usually a sign of improving trust rather than declining safety.",
          "Building that trust takes consistent, visible follow-up: when someone reports a near miss and sees a real response — an inspection, a fix, a procedure change — within a reasonable timeframe, they report the next one too. When reports disappear into a system with no visible outcome, reporting quietly dries up again, and the organization loses exactly the early-warning signal it was trying to build.",
        ],
      },
      {
        heading: "Leadership Visibility on the Floor",
        paragraphs: [
          "Sites with strong safety cultures tend to have leaders who spend real time on the floor, not just reviewing dashboards from an office, and who ask genuine questions rather than conducting a compliance walkthrough. That visible presence signals that safety is something leadership actually cares about day to day, not just something referenced in quarterly reports.",
        ],
      },
      {
        heading: "Training as an Investment, Not a Requirement",
        image: Laptop, 
        imagePosition: 'right',
        paragraphs: [
          "Sites that treat training as a genuine competency investment — tracked over time, revisited periodically, and tied to real operational scenarios rather than generic modules — consistently outperform sites that treat the same training as an annual box to check off before an audit. The difference shows up less in test scores and more in how confidently and correctly people respond when something actually goes wrong on shift.",
        ],
      },
      {
        heading: "Sustaining Culture Over Time",
        paragraphs: [
          "Safety culture is easy to build during a high-visibility push — after a serious incident, or during a new leadership tenure — and much harder to sustain once attention naturally moves elsewhere. The sites that maintain a strong culture long-term build it into routine structures, like regular safety observations and consistent recognition of good reporting behavior, rather than relying on periodic campaigns that fade once the initial momentum runs out.",
        ],
      },
    ],
  },
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((a) => a.slug === slug);
}

export function getRelatedBlogs(current: Blog, limit = 3): Blog[] {
  const sameCategory = blogs.filter(
    (a) => a.slug !== current.slug && a.category === current.category
  );
  const rest = blogs.filter(
    (a) => a.slug !== current.slug && a.category !== current.category
  );
  return [...sameCategory, ...rest].slice(0, limit);
}