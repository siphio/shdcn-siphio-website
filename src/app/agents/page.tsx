import { Navbar33 } from "@/components/navbar33";
import { AgentsShowcase } from "@/components/agents-showcase";
import { OutreachCaseStudy } from "@/components/outreach-case-study";
import { ProjectCta } from "@/components/project-cta";
import { Footer12 } from "@/components/footer12";
import { agents } from "@/data/agents";

export const metadata = {
  title: "AI Agents | Siphio",
  description:
    "Explore Siphio's purpose-built AI agents for sales, support, operations, and marketing.",
};

export default function AgentsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar33 />
      <AgentsShowcase agents={agents} />
      <OutreachCaseStudy />
      <ProjectCta />
      <Footer12 />
    </main>
  );
}
