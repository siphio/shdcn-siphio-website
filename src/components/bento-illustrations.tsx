/**
 * Bento grid SVG illustrations for the Feature234 hero section.
 * Hyper-focused on: AI agents, autonomous systems, and code generation.
 * Siphio brand gradient: orange #F7931E → coral #EC4899 → cyan #22D3EE
 */

const O = "#F7931E";   // orange
const C = "#EC4899";    // coral
const CY = "#22D3EE";   // cyan
const M = "rgba(255,255,255,0.08)";
const ML = "rgba(255,255,255,0.12)";
const MD = "rgba(255,255,255,0.2)";

/** Card 0 — AI Agent autonomously executing tasks */
export const IllustrationAgent = () => (
  <svg viewBox="0 0 177 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
    <defs>
      <linearGradient id="g0" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={O} />
        <stop offset="100%" stopColor={C} />
      </linearGradient>
      <radialGradient id="gl0" cx="50%" cy="36%" r="25%">
        <stop offset="0%" stopColor={O} stopOpacity="0.2" />
        <stop offset="100%" stopColor={O} stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Agent avatar — glowing */}
    <circle cx="88" cy="42" r="28" fill="url(#gl0)" />
    <circle cx="88" cy="42" r="14" fill="url(#g0)" fillOpacity="0.15" stroke="url(#g0)" strokeWidth="1.5" />
    <circle cx="83" cy="40" r="2" fill={O} fillOpacity="0.7" />
    <circle cx="93" cy="40" r="2" fill={O} fillOpacity="0.7" />
    <path d="M83 47 Q88 51 93 47" stroke={O} strokeWidth="1.2" strokeLinecap="round" fill="none" strokeOpacity="0.5" />
    {/* Pulse rings */}
    <circle cx="88" cy="42" r="20" fill="none" stroke={O} strokeWidth="0.5" strokeOpacity="0.15" />
    {/* Task list the agent is working through */}
    <rect x="36" y="72" width="105" height="16" rx="4" fill={M} />
    <rect x="40" y="78" width="4" height="4" rx="1" fill={O} fillOpacity="0.8" />
    <path d="M41 80 L42.5 81.5 L44 79" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
    <rect x="50" y="78" width="52" height="4" rx="2" fill={MD} />
    <rect x="126" y="78" width="10" height="4" rx="2" fill={O} fillOpacity="0.3" />
    {/* Task 2 — in progress */}
    <rect x="36" y="94" width="105" height="16" rx="4" fill="url(#g0)" fillOpacity="0.08" stroke="url(#g0)" strokeWidth="0.5" />
    <rect x="40" y="100" width="4" height="4" rx="1" fill={O} fillOpacity="0.5" />
    <rect x="50" y="100" width="64" height="4" rx="2" fill={O} fillOpacity="0.3" />
    {/* Spinner dots */}
    <circle cx="128" cy="102" r="1.5" fill={O} fillOpacity="0.7" />
    <circle cx="133" cy="102" r="1.5" fill={O} fillOpacity="0.4" />
    <circle cx="138" cy="102" r="1.5" fill={O} fillOpacity="0.2" />
    {/* Task 3 — pending */}
    <rect x="36" y="116" width="105" height="16" rx="4" fill={M} />
    <rect x="40" y="122" width="4" height="4" rx="1" fill={ML} />
    <rect x="50" y="122" width="40" height="4" rx="2" fill={ML} />
    {/* Task 4 — pending */}
    <rect x="36" y="138" width="105" height="16" rx="4" fill={M} />
    <rect x="40" y="144" width="4" height="4" rx="1" fill={ML} />
    <rect x="50" y="144" width="56" height="4" rx="2" fill={ML} />
  </svg>
);

/** Card 1 — Multi-agent swarm communicating (dark card) */
export const IllustrationSwarm = () => (
  <svg viewBox="0 0 177 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
    <defs>
      <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={O} />
        <stop offset="100%" stopColor={CY} />
      </linearGradient>
      <radialGradient id="gl1" cx="50%" cy="50%" r="40%">
        <stop offset="0%" stopColor={O} stopOpacity="0.12" />
        <stop offset="100%" stopColor={O} stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="88" cy="88" r="70" fill="url(#gl1)" />
    {/* Communication lines — dashed for data flow */}
    <line x1="56" y1="56" x2="88" y2="88" stroke={O} strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="3 2" />
    <line x1="120" y1="52" x2="88" y2="88" stroke={CY} strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="3 2" />
    <line x1="48" y1="120" x2="88" y2="88" stroke={C} strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="3 2" />
    <line x1="132" y1="124" x2="88" y2="88" stroke={O} strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="3 2" />
    {/* Cross-agent communication */}
    <line x1="56" y1="56" x2="120" y2="52" stroke={ML} strokeWidth="0.5" strokeDasharray="2 3" />
    <line x1="48" y1="120" x2="132" y2="124" stroke={ML} strokeWidth="0.5" strokeDasharray="2 3" />
    <line x1="56" y1="56" x2="48" y2="120" stroke={ML} strokeWidth="0.5" strokeDasharray="2 3" />
    <line x1="120" y1="52" x2="132" y2="124" stroke={ML} strokeWidth="0.5" strokeDasharray="2 3" />
    {/* Agent 1 — top left */}
    <circle cx="56" cy="56" r="14" fill={M} stroke={O} strokeWidth="1" strokeOpacity="0.5" />
    <circle cx="52" cy="54" r="1.5" fill={O} fillOpacity="0.6" />
    <circle cx="60" cy="54" r="1.5" fill={O} fillOpacity="0.6" />
    <text x="49" y="65" fill={O} fontSize="6" fontFamily="monospace" fillOpacity="0.5">A1</text>
    {/* Agent 2 — top right */}
    <circle cx="120" cy="52" r="14" fill={M} stroke={CY} strokeWidth="1" strokeOpacity="0.5" />
    <circle cx="116" cy="50" r="1.5" fill={CY} fillOpacity="0.6" />
    <circle cx="124" cy="50" r="1.5" fill={CY} fillOpacity="0.6" />
    <text x="113" y="61" fill={CY} fontSize="6" fontFamily="monospace" fillOpacity="0.5">A2</text>
    {/* Agent 3 — bottom left */}
    <circle cx="48" cy="120" r="14" fill={M} stroke={C} strokeWidth="1" strokeOpacity="0.5" />
    <circle cx="44" cy="118" r="1.5" fill={C} fillOpacity="0.6" />
    <circle cx="52" cy="118" r="1.5" fill={C} fillOpacity="0.6" />
    <text x="41" y="129" fill={C} fontSize="6" fontFamily="monospace" fillOpacity="0.5">A3</text>
    {/* Agent 4 — bottom right */}
    <circle cx="132" cy="124" r="14" fill={M} stroke={O} strokeWidth="1" strokeOpacity="0.5" />
    <circle cx="128" cy="122" r="1.5" fill={O} fillOpacity="0.6" />
    <circle cx="136" cy="122" r="1.5" fill={O} fillOpacity="0.6" />
    <text x="125" y="133" fill={O} fontSize="6" fontFamily="monospace" fillOpacity="0.5">A4</text>
    {/* Orchestrator — center */}
    <circle cx="88" cy="88" r="16" fill="url(#g1)" fillOpacity="0.15" stroke="url(#g1)" strokeWidth="1.5" />
    <circle cx="84" cy="86" r="2" fill={O} fillOpacity="0.7" />
    <circle cx="92" cy="86" r="2" fill={CY} fillOpacity="0.7" />
    <rect x="80" y="93" width="16" height="2" rx="1" fill="url(#g1)" fillOpacity="0.5" />
  </svg>
);

/** Card 2 — AI writing code / Copilot-style code generation */
export const IllustrationCodeGen = () => (
  <svg viewBox="0 0 177 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
    <defs>
      <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={O} />
        <stop offset="100%" stopColor={CY} />
      </linearGradient>
    </defs>
    {/* Editor frame */}
    <rect x="24" y="28" width="129" height="120" rx="10" fill={M} />
    <circle cx="38" cy="40" r="3" fill={O} fillOpacity="0.5" />
    <circle cx="48" cy="40" r="3" fill={MD} />
    <circle cx="58" cy="40" r="3" fill={MD} />
    <rect x="80" y="34" width="60" height="12" rx="3" fill={ML} />
    <rect x="86" y="39" width="28" height="2" rx="1" fill={MD} />
    <line x1="24" y1="50" x2="153" y2="50" stroke={ML} strokeWidth="1" />
    {/* Human-written code — solid */}
    <rect x="44" y="58" width="28" height="4" rx="2" fill={CY} fillOpacity="0.5" />
    <rect x="76" y="58" width="44" height="4" rx="2" fill={MD} />
    <rect x="52" y="68" width="40" height="4" rx="2" fill={MD} />
    <rect x="96" y="68" width="20" height="4" rx="2" fill={CY} fillOpacity="0.35" />
    <rect x="52" y="78" width="24" height="4" rx="2" fill={MD} />
    {/* AI-generated code — gradient highlighted block */}
    <rect x="38" y="90" width="108" height="40" rx="4" fill="url(#g2)" fillOpacity="0.06" stroke="url(#g2)" strokeWidth="0.5" strokeOpacity="0.3" />
    {/* AI sparkle icon */}
    <path d="M46 96 L48 92 L50 96 L54 98 L50 100 L48 104 L46 100 L42 98Z" fill={O} fillOpacity="0.5" />
    <rect x="58" y="96" width="36" height="4" rx="2" fill={O} fillOpacity="0.4" />
    <rect x="98" y="96" width="20" height="4" rx="2" fill={CY} fillOpacity="0.3" />
    <rect x="58" y="106" width="52" height="4" rx="2" fill={O} fillOpacity="0.3" />
    <rect x="58" y="116" width="28" height="4" rx="2" fill={O} fillOpacity="0.2" />
    <rect x="90" y="116" width="40" height="4" rx="2" fill={CY} fillOpacity="0.2" />
    {/* Cursor blinking at end */}
    <rect x="58" y="126" width="2" height="8" rx="1" fill={O} fillOpacity="0.7" />
  </svg>
);

/** Card 3 — Agent reading data and making decisions (center card) */
export const IllustrationDecision = () => (
  <svg viewBox="0 0 177 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
    <defs>
      <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={O} />
        <stop offset="100%" stopColor={C} />
      </linearGradient>
      <radialGradient id="gl3" cx="50%" cy="40%" r="30%">
        <stop offset="0%" stopColor={O} stopOpacity="0.18" />
        <stop offset="100%" stopColor={O} stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Data input — left column of data rows */}
    <rect x="24" y="36" width="48" height="8" rx="2" fill={M} />
    <rect x="28" y="39" width="20" height="2" rx="1" fill={MD} />
    <rect x="24" y="48" width="48" height="8" rx="2" fill={M} />
    <rect x="28" y="51" width="28" height="2" rx="1" fill={MD} />
    <rect x="24" y="60" width="48" height="8" rx="2" fill={M} />
    <rect x="28" y="63" width="16" height="2" rx="1" fill={MD} />
    <rect x="24" y="72" width="48" height="8" rx="2" fill={M} />
    <rect x="28" y="75" width="32" height="2" rx="1" fill={MD} />
    {/* Arrow: data → agent */}
    <path d="M76 56 L84 56" stroke={O} strokeWidth="1" strokeOpacity="0.4" />
    <path d="M82 53 L86 56 L82 59" stroke={O} strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" fill="none" />
    {/* Agent brain — center */}
    <circle cx="108" cy="56" r="26" fill="url(#gl3)" />
    <circle cx="108" cy="56" r="18" fill="url(#g3)" fillOpacity="0.12" stroke="url(#g3)" strokeWidth="1.2" />
    {/* Brain sparkle */}
    <path d="M104 50 L106 46 L108 50 L112 52 L108 54 L106 58 L104 54 L100 52Z" fill={O} fillOpacity="0.6" />
    <circle cx="116" cy="48" r="2" fill={CY} fillOpacity="0.4" />
    <circle cx="100" cy="60" r="1.5" fill={C} fillOpacity="0.3" />
    {/* Decision outputs — branching below */}
    <line x1="108" y1="74" x2="108" y2="92" stroke={O} strokeWidth="1" strokeOpacity="0.3" />
    <line x1="108" y1="92" x2="60" y2="116" stroke={O} strokeWidth="0.75" strokeOpacity="0.25" />
    <line x1="108" y1="92" x2="108" y2="116" stroke={O} strokeWidth="0.75" strokeOpacity="0.25" />
    <line x1="108" y1="92" x2="148" y2="116" stroke={CY} strokeWidth="0.75" strokeOpacity="0.25" />
    {/* Decision node */}
    <rect x="100" y="86" width="16" height="12" rx="3" transform="rotate(45 108 92)" fill="url(#g3)" fillOpacity="0.15" stroke="url(#g3)" strokeWidth="0.75" />
    {/* Output actions */}
    <rect x="40" y="116" width="40" height="20" rx="6" fill={M} stroke={O} strokeWidth="0.5" strokeOpacity="0.3" />
    <rect x="46" y="123" width="20" height="3" rx="1.5" fill={O} fillOpacity="0.3" />
    <rect x="46" y="128" width="12" height="2" rx="1" fill={MD} />
    <rect x="88" y="116" width="40" height="20" rx="6" fill="url(#g3)" fillOpacity="0.08" stroke="url(#g3)" strokeWidth="0.75" />
    <rect x="94" y="123" width="24" height="3" rx="1.5" fill={O} fillOpacity="0.4" />
    <rect x="94" y="128" width="16" height="2" rx="1" fill={MD} />
    <rect x="132" y="116" width="28" height="20" rx="6" fill={M} stroke={CY} strokeWidth="0.5" strokeOpacity="0.3" />
    <rect x="137" y="123" width="16" height="3" rx="1.5" fill={CY} fillOpacity="0.3" />
    <rect x="137" y="128" width="10" height="2" rx="1" fill={MD} />
  </svg>
);

/** Card 4 — Agent making API calls in real-time */
export const IllustrationAPI = () => (
  <svg viewBox="0 0 177 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
    <defs>
      <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={O} />
        <stop offset="100%" stopColor={CY} />
      </linearGradient>
    </defs>
    {/* Agent on left */}
    <circle cx="38" cy="88" r="16" fill={M} stroke={O} strokeWidth="1" strokeOpacity="0.4" />
    <circle cx="34" cy="86" r="2" fill={O} fillOpacity="0.6" />
    <circle cx="42" cy="86" r="2" fill={O} fillOpacity="0.6" />
    <rect x="31" y="93" width="14" height="2" rx="1" fill={O} fillOpacity="0.3" />
    {/* Endpoints on right — stacked */}
    <rect x="112" y="40" width="44" height="22" rx="6" fill={M} stroke={ML} strokeWidth="0.75" />
    <text x="118" y="48" fill={CY} fontSize="6" fontFamily="monospace" fillOpacity="0.6">GET</text>
    <rect x="134" y="44" width="16" height="6" rx="2" fill={CY} fillOpacity="0.15" />
    <rect x="118" y="52" width="28" height="3" rx="1.5" fill={MD} />
    <rect x="112" y="72" width="44" height="22" rx="6" fill="url(#g4)" fillOpacity="0.06" stroke="url(#g4)" strokeWidth="0.75" />
    <text x="118" y="80" fill={O} fontSize="6" fontFamily="monospace" fillOpacity="0.7">POST</text>
    <rect x="136" y="76" width="14" height="6" rx="2" fill={O} fillOpacity="0.15" />
    <rect x="118" y="84" width="32" height="3" rx="1.5" fill={O} fillOpacity="0.25" />
    <rect x="112" y="104" width="44" height="22" rx="6" fill={M} stroke={ML} strokeWidth="0.75" />
    <text x="118" y="112" fill={CY} fontSize="6" fontFamily="monospace" fillOpacity="0.6">PUT</text>
    <rect x="132" y="108" width="18" height="6" rx="2" fill={CY} fillOpacity="0.15" />
    <rect x="118" y="116" width="24" height="3" rx="1.5" fill={MD} />
    <rect x="112" y="136" width="44" height="22" rx="6" fill={M} stroke={ML} strokeWidth="0.75" />
    <text x="118" y="144" fill={C} fontSize="6" fontFamily="monospace" fillOpacity="0.5">DEL</text>
    <rect x="134" y="140" width="16" height="6" rx="2" fill={C} fillOpacity="0.15" />
    <rect x="118" y="148" width="20" height="3" rx="1.5" fill={MD} />
    {/* Request arrows — agent calling APIs */}
    <path d="M54 78 Q80 50 108 51" stroke={CY} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 2" />
    <path d="M54 84 Q80 80 108 83" stroke={O} strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="3 2" />
    <path d="M54 94 Q80 108 108 115" stroke={CY} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 2" />
    <path d="M54 100 Q80 130 108 147" stroke={C} strokeWidth="0.75" strokeOpacity="0.2" strokeDasharray="3 2" />
    {/* Active request dot */}
    <circle cx="82" cy="80" r="2.5" fill={O} fillOpacity="0.6" />
  </svg>
);

/** Card 5 — Agent processing queue / workflow automation */
export const IllustrationQueue = () => (
  <svg viewBox="0 0 177 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
    <defs>
      <linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={O} />
        <stop offset="100%" stopColor={CY} />
      </linearGradient>
    </defs>
    {/* Queue items coming in from top */}
    <rect x="36" y="24" width="28" height="16" rx="4" fill={M} stroke={ML} strokeWidth="0.75" />
    <rect x="42" y="30" width="16" height="3" rx="1.5" fill={MD} />
    <rect x="72" y="24" width="28" height="16" rx="4" fill={M} stroke={ML} strokeWidth="0.75" />
    <rect x="78" y="30" width="16" height="3" rx="1.5" fill={MD} />
    <rect x="108" y="24" width="28" height="16" rx="4" fill={M} stroke={ML} strokeWidth="0.75" />
    <rect x="114" y="30" width="16" height="3" rx="1.5" fill={MD} />
    {/* Arrows down into processor */}
    <line x1="50" y1="40" x2="50" y2="54" stroke={ML} strokeWidth="0.75" />
    <line x1="86" y1="40" x2="86" y2="54" stroke={ML} strokeWidth="0.75" />
    <line x1="122" y1="40" x2="122" y2="54" stroke={ML} strokeWidth="0.75" />
    {/* Processing zone */}
    <rect x="28" y="56" width="120" height="52" rx="10" fill="url(#g5)" fillOpacity="0.06" stroke="url(#g5)" strokeWidth="1" />
    {/* Agent inside processor */}
    <circle cx="60" cy="82" r="10" fill={M} stroke={O} strokeWidth="1" strokeOpacity="0.5" />
    <circle cx="57" cy="80" r="1.5" fill={O} fillOpacity="0.6" />
    <circle cx="63" cy="80" r="1.5" fill={O} fillOpacity="0.6" />
    <rect x="55" y="86" width="10" height="1.5" rx="0.75" fill={O} fillOpacity="0.3" />
    {/* Gear — processing */}
    <circle cx="100" cy="82" r="8" fill="none" stroke="url(#g5)" strokeWidth="1.2" />
    <circle cx="100" cy="82" r="3" fill="url(#g5)" fillOpacity="0.4" />
    <line x1="100" y1="72" x2="100" y2="70" stroke={O} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4" />
    <line x1="100" y1="92" x2="100" y2="94" stroke={O} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4" />
    <line x1="90" y1="82" x2="88" y2="82" stroke={O} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4" />
    <line x1="110" y1="82" x2="112" y2="82" stroke={O} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4" />
    {/* Arrow connecting agent to gear */}
    <line x1="70" y1="82" x2="88" y2="82" stroke={O} strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="2 2" />
    {/* Processed outputs — bottom */}
    <line x1="50" y1="108" x2="50" y2="120" stroke={ML} strokeWidth="0.75" />
    <line x1="86" y1="108" x2="86" y2="120" stroke={ML} strokeWidth="0.75" />
    <line x1="122" y1="108" x2="122" y2="120" stroke={ML} strokeWidth="0.75" />
    <rect x="36" y="122" width="28" height="16" rx="4" fill={M} stroke={CY} strokeWidth="0.5" strokeOpacity="0.4" />
    <path d="M46 128 L49 131 L54 126" stroke={CY} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" fill="none" />
    <rect x="72" y="122" width="28" height="16" rx="4" fill={M} stroke={CY} strokeWidth="0.5" strokeOpacity="0.4" />
    <path d="M82 128 L85 131 L90 126" stroke={CY} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" fill="none" />
    <rect x="108" y="122" width="28" height="16" rx="4" fill={M} stroke={CY} strokeWidth="0.5" strokeOpacity="0.4" />
    <path d="M118 128 L121 131 L126 126" stroke={CY} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" fill="none" />
    {/* Label */}
    <text x="52" y="154" fill={MD} fontSize="7" fontFamily="monospace" textAnchor="middle">in</text>
    <text x="88" y="72" fill={O} fontSize="7" fontFamily="monospace" fillOpacity="0.5" textAnchor="middle">processing</text>
    <text x="122" y="154" fill={CY} fontSize="7" fontFamily="monospace" fillOpacity="0.5" textAnchor="middle">done</text>
  </svg>
);

/** Card 6 — Agent logs / live monitoring terminal (dark card) */
export const IllustrationLogs = () => (
  <svg viewBox="0 0 177 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
    <defs>
      <linearGradient id="g6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={O} />
        <stop offset="100%" stopColor={CY} />
      </linearGradient>
      <radialGradient id="gl6" cx="50%" cy="70%" r="35%">
        <stop offset="0%" stopColor={CY} stopOpacity="0.1" />
        <stop offset="100%" stopColor={CY} stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="88" cy="110" r="60" fill="url(#gl6)" />
    {/* Terminal frame */}
    <rect x="24" y="24" width="129" height="128" rx="10" fill={M} />
    <circle cx="38" cy="36" r="3" fill={CY} fillOpacity="0.5" />
    <circle cx="48" cy="36" r="3" fill={MD} />
    <circle cx="58" cy="36" r="3" fill={MD} />
    <rect x="92" y="31" width="48" height="10" rx="3" fill={ML} />
    <rect x="98" y="35" width="20" height="2" rx="1" fill={MD} />
    <line x1="24" y1="46" x2="153" y2="46" stroke={ML} strokeWidth="1" />
    {/* Log entries */}
    {/* Timestamp + agent action */}
    <rect x="32" y="54" width="24" height="4" rx="2" fill={MD} />
    <rect x="60" y="54" width="8" height="4" rx="2" fill={CY} fillOpacity="0.3" />
    <rect x="72" y="54" width="56" height="4" rx="2" fill={CY} fillOpacity="0.2" />
    <rect x="32" y="66" width="24" height="4" rx="2" fill={MD} />
    <rect x="60" y="66" width="8" height="4" rx="2" fill={CY} fillOpacity="0.3" />
    <rect x="72" y="66" width="44" height="4" rx="2" fill={CY} fillOpacity="0.2" />
    {/* Agent action — highlighted */}
    <rect x="32" y="78" width="24" height="4" rx="2" fill={MD} />
    <rect x="60" y="78" width="12" height="4" rx="2" fill={O} fillOpacity="0.5" />
    <rect x="76" y="78" width="52" height="4" rx="2" fill={O} fillOpacity="0.25" />
    {/* API call */}
    <rect x="32" y="90" width="24" height="4" rx="2" fill={MD} />
    <rect x="60" y="90" width="16" height="4" rx="2" fill={C} fillOpacity="0.4" />
    <rect x="80" y="90" width="48" height="4" rx="2" fill={C} fillOpacity="0.2" />
    {/* Response */}
    <rect x="32" y="102" width="24" height="4" rx="2" fill={MD} />
    <rect x="60" y="102" width="8" height="4" rx="2" fill={CY} fillOpacity="0.5" />
    <rect x="72" y="102" width="32" height="4" rx="2" fill={CY} fillOpacity="0.2" />
    {/* Success */}
    <rect x="32" y="114" width="24" height="4" rx="2" fill={MD} />
    <rect x="60" y="114" width="4" height="4" rx="2" fill={O} fillOpacity="0.7" />
    <path d="M61 116 L62 117 L64 114.5" stroke="white" strokeWidth="0.6" strokeLinecap="round" />
    <rect x="68" y="114" width="64" height="4" rx="2" fill={O} fillOpacity="0.2" />
    {/* Current line — cursor */}
    <rect x="32" y="128" width="24" height="4" rx="2" fill={MD} />
    <rect x="60" y="128" width="2" height="8" rx="1" fill={CY} fillOpacity="0.7" />
  </svg>
);
