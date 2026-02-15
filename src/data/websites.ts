export type WebsiteCategory =
  | "Marketing"
  | "E-Commerce"
  | "SaaS"
  | "Dashboard";

export interface WebsiteProject {
  slug: string;
  name: string;
  client: string;
  tagline: string;
  description: string;
  category: WebsiteCategory;
  image: string;
  techStack: string[];
  highlights: string[];
  liveUrl?: string;
  status: "live" | "in-development";
}

export const websiteCategories: WebsiteCategory[] = [
  "Marketing",
  "E-Commerce",
  "SaaS",
  "Dashboard",
];

export const websites: WebsiteProject[] = [
  {
    slug: "siphio-agency",
    name: "Siphio Agency",
    client: "Siphio (Internal)",
    tagline:
      "High-performance agency site built to convert visitors into booked calls",
    description:
      "Our own marketing site — built with Next.js 16, Tailwind CSS, and Framer Motion. Features bento-grid capability cards, animated beams, a 3D globe, and a contact form that feeds directly into our CRM. Designed for speed (100 Lighthouse performance) and conversion.",
    category: "Marketing",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    highlights: [
      "100 Lighthouse performance score",
      "Bento-grid feature showcase with animated beams",
      "Interactive 3D globe visualisation",
      "Contact form with CRM integration",
      "Fully responsive with mobile-first design",
    ],
    status: "live",
  },
  {
    slug: "luxe-threads",
    name: "Luxe Threads",
    client: "Luxe Threads Co.",
    tagline: "Premium fashion e-commerce with AI-powered product recommendations",
    description:
      "A headless e-commerce storefront for a premium fashion brand. Built on Next.js with Shopify as the backend, featuring AI-driven product recommendations, real-time inventory sync, and a custom checkout flow that reduced cart abandonment by 34%.",
    category: "E-Commerce",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
    techStack: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Vercel"],
    highlights: [
      "AI-powered product recommendations",
      "Real-time inventory synchronisation",
      "Custom checkout flow — 34% drop in cart abandonment",
      "Dynamic filtering and search with instant results",
      "Multi-currency and international shipping support",
    ],
    status: "live",
  },
  {
    slug: "cloudpulse",
    name: "CloudPulse",
    client: "CloudPulse Inc.",
    tagline: "SaaS dashboard for monitoring cloud infrastructure health",
    description:
      "A real-time monitoring dashboard for a cloud infrastructure startup. Displays server health, uptime, latency, and alert history with live-updating charts. Built for speed with server-side rendering and WebSocket connections for zero-lag data.",
    category: "SaaS",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-3.svg",
    techStack: ["Next.js", "Recharts", "WebSockets", "PostgreSQL"],
    highlights: [
      "Real-time data via WebSocket connections",
      "Interactive latency and uptime charts",
      "Configurable alert thresholds and notifications",
      "Role-based access control for teams",
      "99.9% uptime SLA on the dashboard itself",
    ],
    status: "live",
  },
  {
    slug: "growthmetrics",
    name: "GrowthMetrics",
    client: "GrowthMetrics Ltd.",
    tagline: "Revenue analytics dashboard with AI-generated insights",
    description:
      "An internal analytics dashboard for a growth-stage startup that consolidates Stripe, HubSpot, and Google Analytics data into a single view. AI-generated weekly summaries surface the metrics that matter most, saving the leadership team hours of manual reporting.",
    category: "Dashboard",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-4.svg",
    techStack: ["Next.js", "Tremor", "Stripe API", "HubSpot API"],
    highlights: [
      "Unified data from Stripe, HubSpot, and GA",
      "AI-generated weekly insight summaries",
      "Custom date-range comparison tools",
      "Exportable reports in PDF and CSV",
      "Team-level and individual performance views",
    ],
    status: "live",
  },
  {
    slug: "verde-living",
    name: "Verde Living",
    client: "Verde Living Studio",
    tagline: "Sustainable lifestyle brand site with integrated journal",
    description:
      "A brand-forward marketing site for a sustainable living company. Features a product showcase, an integrated journal/blog with MDX content, and a newsletter signup powered by Resend. The visual identity centres on organic textures and generous whitespace.",
    category: "Marketing",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-5.svg",
    techStack: ["Next.js", "MDX", "Tailwind CSS", "Resend"],
    highlights: [
      "MDX-powered journal with rich media support",
      "Newsletter integration with Resend",
      "Organic visual identity with custom typography",
      "SEO-optimised with structured data markup",
      "Accessibility audit score above 95",
    ],
    status: "live",
  },
  {
    slug: "fitstack",
    name: "FitStack",
    client: "FitStack Health",
    tagline: "Fitness SaaS platform with workout builder and progress tracking",
    description:
      "A fitness SaaS application featuring a drag-and-drop workout builder, progress tracking with charts, and a social feed for sharing achievements. Designed for both mobile and desktop with an app-like experience on every screen size.",
    category: "SaaS",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-6.svg",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Drag-and-drop workout builder",
      "Progress charts with streak tracking",
      "Social feed for sharing milestones",
      "PWA support for app-like mobile experience",
      "OAuth login with Google and Apple",
    ],
    status: "live",
  },
  {
    slug: "neon-supply",
    name: "Neon Supply",
    client: "Neon Supply Co.",
    tagline: "Custom neon sign e-commerce with real-time 3D preview",
    description:
      "An e-commerce store for custom neon signs featuring a real-time 3D preview tool where customers can type their text, pick colours, and see a photorealistic rendering before ordering. Integrated with Stripe for payments and a custom fulfilment API.",
    category: "E-Commerce",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    techStack: ["Next.js", "Three.js", "Stripe", "Tailwind CSS"],
    highlights: [
      "Real-time 3D neon sign preview tool",
      "Custom text input with font and colour picker",
      "Stripe checkout with order tracking",
      "Admin panel for fulfilment management",
      "Mobile-optimised 3D rendering",
    ],
    status: "live",
  },
  {
    slug: "atlas-crm",
    name: "Atlas CRM",
    client: "Atlas Ventures",
    tagline: "Lightweight CRM dashboard for a venture capital firm",
    description:
      "A custom CRM dashboard for a VC firm to track deal flow, portfolio performance, and LP communications. Built with a focus on data density without clutter — every view is designed to surface actionable information in under 3 seconds.",
    category: "Dashboard",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Deal flow pipeline with drag-and-drop stages",
      "Portfolio company performance tracking",
      "LP communication log and document vault",
      "Advanced search and filtering across all entities",
      "Data-dense views optimised for decision-making",
    ],
    status: "in-development",
  },
];

export function getWebsiteBySlug(slug: string): WebsiteProject | undefined {
  return websites.find((w) => w.slug === slug);
}
