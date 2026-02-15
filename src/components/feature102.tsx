import { cn } from "@/lib/utils";

interface Feature102Props {
  className?: string;
}

const Feature102 = ({ className }: Feature102Props) => {
  return (
    <section className={cn("pt-12 pb-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-3xl flex-col justify-center gap-7 md:text-center">
          <h2 className="text-2xl md:text-4xl">How We Build Your AI Solution</h2>
          <p className="text-sm text-muted-foreground md:text-base">
            From discovery to deployment, our process is designed to deliver
            production-ready AI agents and websites in weeks — not months.
          </p>
        </div>
        <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 lg:px-16">
          <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
            <div className="flex gap-4 min-[960px]:max-w-md">
              <div className="flex flex-col items-center justify-between gap-1">
                <span className="h-20 shrink-0"></span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">
                  1
                </span>
                <span className="h-20 w-[3px] shrink-0 bg-linear-to-b from-transparent to-primary opacity-70"></span>
              </div>
              <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                <h3 className="text-xl min-[960px]:text-2xl">
                  Discovery & Strategy
                </h3>
                <p className="text-sm text-muted-foreground min-[960px]:text-base">
                  We map your workflows, identify automation opportunities, and
                  architect a solution tailored to your business goals.
                </p>
              </div>
            </div>
            <div className="z-10 flex aspect-video w-full items-center justify-center rounded-xl border bg-card min-[960px]:w-auto min-[960px]:min-w-[360px]">
              <DiscoveryGraphic />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
            <div className="flex gap-4 min-[960px]:max-w-md">
              <div className="relative flex flex-col items-center justify-between gap-1">
                <span className="absolute -top-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70"></span>
                <span className="absolute -bottom-8 mx-auto h-8 w-[3px] shrink-0 bg-primary opacity-70"></span>
                <span className="h-20 w-[3px] shrink-0 bg-primary opacity-70"></span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">
                  2
                </span>
                <span className="h-20 w-[3px] shrink-0 bg-primary opacity-70"></span>
              </div>
              <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                <h3 className="text-xl min-[960px]:text-2xl">
                  Build & Iterate
                </h3>

                <p className="text-sm text-muted-foreground min-[960px]:text-base">
                  We develop your AI agent or website in rapid sprints, sharing
                  progress at every stage so you stay in control.
                </p>
              </div>
            </div>

            <div className="z-10 flex aspect-video w-full items-center justify-center rounded-xl border bg-card min-[960px]:w-auto min-[960px]:min-w-[360px]">
              <BuildGraphic />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10">
            <div className="flex gap-4 min-[960px]:max-w-md">
              <div className="flex flex-col items-center justify-between gap-1">
                <span className="h-20 w-[3px] shrink-0 bg-linear-to-t from-transparent to-primary opacity-70"></span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted/50 font-mono text-lg">
                  3
                </span>
                <span className="h-20 shrink-0"></span>
              </div>
              <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                <h3 className="text-xl min-[960px]:text-2xl">
                  Launch & Scale
                </h3>

                <p className="text-sm text-muted-foreground min-[960px]:text-base">
                  We deploy to production, monitor performance, and continuously
                  optimize — so your solution grows with your business.
                </p>
              </div>
            </div>
            <div className="z-10 flex aspect-video w-full items-center justify-center rounded-xl border bg-card min-[960px]:w-auto min-[960px]:min-w-[360px]">
              <LaunchGraphic />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature102 };

/* ── Step Illustrations ──────────────────────────────── */

const O = "#F7931E";
const C = "#EC4899";
const CY = "#22D3EE";
const M = "rgba(255,255,255,0.08)";
const ML = "rgba(255,255,255,0.12)";
const MD = "rgba(255,255,255,0.2)";

/** Step 1 — Discovery: glowing network constellation mapping workflows */
const DiscoveryGraphic = () => (
  <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-3">
    <defs>
      <linearGradient id="dg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={O} />
        <stop offset="100%" stopColor={CY} />
      </linearGradient>
      <linearGradient id="dg2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={O} />
        <stop offset="100%" stopColor={C} />
      </linearGradient>
      <radialGradient id="dgl" cx="50%" cy="50%" r="40%">
        <stop offset="0%" stopColor={O} stopOpacity="0.2" />
        <stop offset="50%" stopColor={O} stopOpacity="0.05" />
        <stop offset="100%" stopColor={O} stopOpacity="0" />
      </radialGradient>
      <radialGradient id="dgl2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={CY} stopOpacity="0.08" />
        <stop offset="100%" stopColor={CY} stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Background glows */}
    <circle cx="180" cy="100" r="120" fill="url(#dgl2)" />
    <circle cx="180" cy="100" r="80" fill="url(#dgl)" />

    {/* Orbital guide rings */}
    <circle cx="180" cy="100" r="72" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
    <circle cx="180" cy="100" r="72" fill="none" stroke="url(#dg1)" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="4 6" />

    {/* ── Connection lines — hub to each node ── */}
    {/* Top */}
    <line x1="180" y1="100" x2="180" y2="24" stroke={O} strokeWidth="1.5" strokeOpacity="0.35" />
    {/* Top-right */}
    <line x1="180" y1="100" x2="242" y2="62" stroke={CY} strokeWidth="1.5" strokeOpacity="0.3" />
    {/* Bottom-right */}
    <line x1="180" y1="100" x2="242" y2="138" stroke={O} strokeWidth="1.5" strokeOpacity="0.25" />
    {/* Bottom */}
    <line x1="180" y1="100" x2="180" y2="176" stroke={C} strokeWidth="1.5" strokeOpacity="0.25" />
    {/* Bottom-left */}
    <line x1="180" y1="100" x2="118" y2="138" stroke={CY} strokeWidth="1.5" strokeOpacity="0.25" />
    {/* Top-left */}
    <line x1="180" y1="100" x2="118" y2="62" stroke={O} strokeWidth="1.5" strokeOpacity="0.3" />

    {/* Cross-connections between satellites */}
    <line x1="180" y1="24" x2="242" y2="62" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 4" />
    <line x1="242" y1="62" x2="242" y2="138" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3 4" />
    <line x1="118" y1="62" x2="118" y2="138" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3 4" />
    <line x1="180" y1="176" x2="118" y2="138" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3 4" />

    {/* ── Satellite nodes ── */}

    {/* Node 1 — Top (primary discovery, brightest) */}
    <circle cx="180" cy="24" r="14" fill={O} fillOpacity="0.15" stroke={O} strokeWidth="2" />
    <circle cx="180" cy="24" r="20" fill="none" stroke={O} strokeWidth="0.8" strokeOpacity="0.2" />
    <rect x="168" y="19" width="12" height="3" rx="1.5" fill={O} fillOpacity="0.8" />
    <rect x="168" y="25" width="24" height="2.5" rx="1.25" fill="rgba(255,255,255,0.3)" />

    {/* Node 2 — Top-right (automation opportunity) */}
    <circle cx="242" cy="62" r="12" fill={CY} fillOpacity="0.12" stroke={CY} strokeWidth="1.5" />
    <rect x="232" y="58" width="10" height="3" rx="1.5" fill={CY} fillOpacity="0.7" />
    <rect x="232" y="63" width="20" height="2.5" rx="1.25" fill="rgba(255,255,255,0.25)" />

    {/* Node 3 — Bottom-right (workflow) */}
    <circle cx="242" cy="138" r="11" fill={O} fillOpacity="0.1" stroke={O} strokeWidth="1.2" strokeOpacity="0.6" />
    <rect x="233" y="134" width="8" height="3" rx="1.5" fill={O} fillOpacity="0.5" />
    <rect x="233" y="139" width="18" height="2.5" rx="1.25" fill="rgba(255,255,255,0.2)" />

    {/* Node 4 — Bottom (integration) */}
    <circle cx="180" cy="176" r="10" fill={C} fillOpacity="0.1" stroke={C} strokeWidth="1.2" strokeOpacity="0.5" />
    <rect x="172" y="172" width="16" height="2.5" rx="1.25" fill={C} fillOpacity="0.4" />
    <rect x="172" y="177" width="10" height="2" rx="1" fill="rgba(255,255,255,0.15)" />

    {/* Node 5 — Bottom-left */}
    <circle cx="118" cy="138" r="10" fill={CY} fillOpacity="0.08" stroke={CY} strokeWidth="1" strokeOpacity="0.4" />
    <rect x="110" y="134" width="16" height="2.5" rx="1.25" fill={CY} fillOpacity="0.35" />
    <rect x="110" y="139" width="12" height="2" rx="1" fill="rgba(255,255,255,0.15)" />

    {/* Node 6 — Top-left (highlighted find) */}
    <circle cx="118" cy="62" r="13" fill={O} fillOpacity="0.12" stroke="url(#dg2)" strokeWidth="1.8" />
    <circle cx="118" cy="62" r="18" fill="none" stroke={O} strokeWidth="0.6" strokeOpacity="0.15" />
    <rect x="108" y="58" width="10" height="3" rx="1.5" fill={O} fillOpacity="0.6" />
    <rect x="108" y="63" width="20" height="2.5" rx="1.25" fill="rgba(255,255,255,0.25)" />

    {/* ── Center hub — the "AI discovery engine" ── */}
    <circle cx="180" cy="100" r="28" fill="url(#dg1)" fillOpacity="0.1" />
    <circle cx="180" cy="100" r="28" fill="none" stroke="url(#dg1)" strokeWidth="2.5" />
    <circle cx="180" cy="100" r="34" fill="none" stroke="url(#dg1)" strokeWidth="0.8" strokeOpacity="0.2" />
    {/* AI sparkle icon */}
    <path d="M174 94 L177 86 L180 94 L188 97 L180 100 L177 108 L174 100 L166 97Z" fill="url(#dg1)" fillOpacity="0.7" />
    <path d="M189 90 L190.5 86 L192 90 L196 91.5 L192 93 L190.5 97 L189 93 L185 91.5Z" fill={CY} fillOpacity="0.5" />

    {/* Discovery badges on highlighted nodes */}
    {/* Badge on Node 1 */}
    <rect x="196" y="14" width="28" height="12" rx="6" fill={O} fillOpacity="0.25" stroke={O} strokeWidth="0.8" />
    <rect x="201" y="18.5" width="10" height="3" rx="1.5" fill={O} fillOpacity="0.8" />
    {/* Badge on Node 6 */}
    <rect x="96" y="44" width="24" height="12" rx="6" fill="url(#dg2)" fillOpacity="0.2" stroke={O} strokeWidth="0.8" strokeOpacity="0.6" />
    <path d="M104 49 L106 51 L110 47" stroke={O} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.8" fill="none" />
  </svg>
);

/** Step 2 — Build: code editor with live preview & sprint cycle */
const BuildGraphic = () => (
  <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-3">
    <defs>
      <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={O} />
        <stop offset="100%" stopColor={C} />
      </linearGradient>
    </defs>

    {/* Code editor — fills left 60% */}
    <rect x="8" y="12" width="196" height="176" rx="10" fill={M} stroke={ML} strokeWidth="0.75" />
    {/* Title bar */}
    <circle cx="22" cy="26" r="3.5" fill={O} fillOpacity="0.5" />
    <circle cx="34" cy="26" r="3.5" fill={MD} />
    <circle cx="46" cy="26" r="3.5" fill={MD} />
    <rect x="68" y="20" width="80" height="12" rx="4" fill={ML} />
    <rect x="76" y="25" width="36" height="2" rx="1" fill={MD} />
    <line x1="8" y1="40" x2="204" y2="40" stroke={ML} strokeWidth="0.75" />

    {/* Code lines — bigger and bolder */}
    <rect x="20" y="50" width="32" height="5" rx="2.5" fill={CY} fillOpacity="0.5" />
    <rect x="56" y="50" width="56" height="5" rx="2.5" fill={MD} />
    <rect x="28" y="62" width="44" height="5" rx="2.5" fill={O} fillOpacity="0.45" />
    <rect x="76" y="62" width="32" height="5" rx="2.5" fill={MD} />
    <rect x="28" y="74" width="64" height="5" rx="2.5" fill={MD} />
    <rect x="28" y="86" width="36" height="5" rx="2.5" fill={C} fillOpacity="0.4" />
    <rect x="68" y="86" width="52" height="5" rx="2.5" fill={MD} />
    <rect x="28" y="98" width="56" height="5" rx="2.5" fill={O} fillOpacity="0.35" />
    <rect x="20" y="110" width="24" height="5" rx="2.5" fill={CY} fillOpacity="0.4" />
    <rect x="20" y="122" width="72" height="5" rx="2.5" fill={MD} />
    <rect x="28" y="134" width="40" height="5" rx="2.5" fill={O} fillOpacity="0.3" />
    <rect x="72" y="134" width="36" height="5" rx="2.5" fill={CY} fillOpacity="0.25" />
    <rect x="20" y="146" width="20" height="5" rx="2.5" fill={MD} />
    {/* Cursor */}
    <rect x="20" y="158" width="2" height="12" rx="1" fill={O} fillOpacity="0.7" />

    {/* Arrow: code → preview */}
    <path d="M214 100 L230 100" stroke="url(#bg1)" strokeWidth="2" strokeOpacity="0.5" />
    <path d="M226 94 L234 100 L226 106" stroke={O} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" fill="none" />

    {/* Preview panel — right */}
    <rect x="242" y="12" width="110" height="176" rx="10" fill={M} stroke="url(#bg1)" strokeWidth="0.75" strokeOpacity="0.4" />
    {/* Browser chrome */}
    <circle cx="256" cy="26" r="3" fill={O} fillOpacity="0.4" />
    <circle cx="267" cy="26" r="3" fill={MD} />
    <circle cx="278" cy="26" r="3" fill={MD} />
    <line x1="242" y1="40" x2="352" y2="40" stroke={ML} strokeWidth="0.75" />

    {/* Preview content — miniature website */}
    <rect x="254" y="50" width="56" height="7" rx="3" fill="rgba(255,255,255,0.18)" />
    <rect x="254" y="64" width="84" height="4" rx="2" fill={MD} />
    <rect x="254" y="72" width="68" height="4" rx="2" fill={MD} />
    <rect x="254" y="84" width="44" height="14" rx="6" fill="url(#bg1)" fillOpacity="0.5" />
    <rect x="262" y="89" width="24" height="3" rx="1.5" fill="white" fillOpacity="0.4" />
    <rect x="254" y="108" width="38" height="32" rx="5" fill={ML} />
    <rect x="298" y="108" width="38" height="32" rx="5" fill={ML} />
    <rect x="254" y="148" width="82" height="24" rx="5" fill={ML} />

    {/* Sprint iteration cycle — top right badge */}
    <rect x="296" y="0" width="56" height="18" rx="9" fill="url(#bg1)" fillOpacity="0.2" stroke="url(#bg1)" strokeWidth="0.75" />
    <text x="306" y="12" fill={O} fontSize="8" fontFamily="monospace" fillOpacity="0.8">v3.2</text>

    {/* Iteration arrows — circular */}
    <path d="M326 54 A12 12 0 1 1 326 52" stroke={O} strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="3 2" fill="none" />
    <path d="M328 52 L326 46 L322 52" stroke={O} strokeWidth="1" strokeLinecap="round" strokeOpacity="0.3" fill="none" />
  </svg>
);

/** Step 3 — Launch: rocket launch with live growth metrics */
const LaunchGraphic = () => (
  <svg viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-3">
    <defs>
      <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={O} />
        <stop offset="100%" stopColor={CY} />
      </linearGradient>
      <linearGradient id="lg2" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor={CY} stopOpacity="0" />
        <stop offset="100%" stopColor={CY} stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="rg" x1="50%" y1="100%" x2="50%" y2="0%">
        <stop offset="0%" stopColor={O} />
        <stop offset="100%" stopColor={CY} />
      </linearGradient>
      <radialGradient id="rgl" cx="50%" cy="80%" r="40%">
        <stop offset="0%" stopColor={O} stopOpacity="0.15" />
        <stop offset="100%" stopColor={O} stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Rocket — left side */}
    <circle cx="80" cy="130" r="60" fill="url(#rgl)" />

    {/* Rocket body */}
    <path d="M80 20 C80 20 64 52 64 90 C64 116 72 140 80 140 C88 140 96 116 96 90 C96 52 80 20 80 20Z" fill={M} stroke="url(#rg)" strokeWidth="1.5" />
    {/* Rocket nose cone */}
    <path d="M80 20 C76 36 72 52 72 60 L88 60 C88 52 84 36 80 20Z" fill="url(#rg)" fillOpacity="0.15" />
    {/* Rocket window */}
    <circle cx="80" cy="76" r="8" fill="url(#rg)" fillOpacity="0.12" stroke="url(#rg)" strokeWidth="1" />
    <circle cx="80" cy="76" r="4" fill={CY} fillOpacity="0.3" />
    {/* Rocket fins */}
    <path d="M64 110 L48 136 L64 130Z" fill={M} stroke={O} strokeWidth="0.75" strokeOpacity="0.4" />
    <path d="M96 110 L112 136 L96 130Z" fill={M} stroke={O} strokeWidth="0.75" strokeOpacity="0.4" />
    {/* Exhaust flame */}
    <path d="M72 140 L80 170 L88 140" fill={O} fillOpacity="0.4" />
    <path d="M76 140 L80 160 L84 140" fill={O} fillOpacity="0.6" />
    {/* Exhaust particles */}
    <circle cx="74" cy="172" r="2" fill={O} fillOpacity="0.2" />
    <circle cx="86" cy="176" r="1.5" fill={O} fillOpacity="0.15" />
    <circle cx="80" cy="180" r="2.5" fill={O} fillOpacity="0.1" />
    {/* Speed lines */}
    <line x1="56" y1="100" x2="56" y2="120" stroke={O} strokeWidth="0.75" strokeOpacity="0.15" />
    <line x1="48" y1="108" x2="48" y2="124" stroke={O} strokeWidth="0.5" strokeOpacity="0.1" />
    <line x1="104" y1="100" x2="104" y2="120" stroke={O} strokeWidth="0.75" strokeOpacity="0.15" />
    <line x1="112" y1="108" x2="112" y2="124" stroke={O} strokeWidth="0.5" strokeOpacity="0.1" />

    {/* Dashboard panel — right side */}
    <rect x="148" y="12" width="204" height="176" rx="10" fill={M} stroke={ML} strokeWidth="0.75" />
    {/* Top bar */}
    <circle cx="162" cy="26" r="3" fill={CY} fillOpacity="0.5" />
    <circle cx="173" cy="26" r="3" fill={MD} />
    <circle cx="184" cy="26" r="3" fill={MD} />
    <rect x="288" y="20" width="52" height="12" rx="6" fill="url(#lg1)" fillOpacity="0.2" stroke="url(#lg1)" strokeWidth="0.5" />
    <circle cx="296" cy="26" r="2.5" fill={O} fillOpacity="0.8" />
    <text x="302" y="29" fill={O} fontSize="7" fontFamily="monospace" fillOpacity="0.8">Live</text>
    <line x1="148" y1="40" x2="352" y2="40" stroke={ML} strokeWidth="0.75" />

    {/* Stat cards */}
    <rect x="160" y="48" width="84" height="36" rx="6" fill={M} stroke={ML} strokeWidth="0.5" />
    <text x="168" y="62" fill={MD} fontSize="7" fontFamily="sans-serif">Requests</text>
    <text x="168" y="76" fill="white" fillOpacity="0.85" fontSize="13" fontFamily="monospace" fontWeight="bold">12.4k</text>
    <rect x="218" y="70" width="20" height="8" rx="4" fill={O} fillOpacity="0.15" />
    <text x="222" y="77" fill={O} fontSize="6" fontFamily="monospace" fillOpacity="0.8">+24%</text>

    <rect x="256" y="48" width="84" height="36" rx="6" fill={M} stroke={ML} strokeWidth="0.5" />
    <text x="264" y="62" fill={MD} fontSize="7" fontFamily="sans-serif">Uptime</text>
    <text x="264" y="76" fill="white" fillOpacity="0.85" fontSize="13" fontFamily="monospace" fontWeight="bold">99.9%</text>
    <circle cx="330" cy="72" r="4" fill={CY} fillOpacity="0.15" stroke={CY} strokeWidth="0.5" strokeOpacity="0.3" />
    <path d="M328 72 L330 74 L333 70" stroke={CY} strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5" fill="none" />

    {/* Growth chart — larger area */}
    <rect x="160" y="92" width="180" height="84" rx="6" fill={M} stroke={ML} strokeWidth="0.5" />
    {/* Grid lines */}
    <line x1="160" y1="112" x2="340" y2="112" stroke={ML} strokeWidth="0.3" strokeDasharray="4 4" />
    <line x1="160" y1="132" x2="340" y2="132" stroke={ML} strokeWidth="0.3" strokeDasharray="4 4" />
    <line x1="160" y1="152" x2="340" y2="152" stroke={ML} strokeWidth="0.3" strokeDasharray="4 4" />
    {/* Area fill */}
    <path d="M172 162 L196 154 L220 146 L244 138 L268 124 L292 114 L316 106 L332 98 L332 170 L172 170Z" fill="url(#lg2)" />
    {/* Chart line — upward */}
    <path d="M172 162 L196 154 L220 146 L244 138 L268 124 L292 114 L316 106 L332 98" stroke={CY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Latest point pulse */}
    <circle cx="332" cy="98" r="4" fill={CY} />
    <circle cx="332" cy="98" r="7" fill={CY} fillOpacity="0.2" />
  </svg>
);
