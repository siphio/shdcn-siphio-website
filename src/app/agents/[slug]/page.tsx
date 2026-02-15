import { notFound } from "next/navigation";

import { Navbar33 } from "@/components/navbar33";
import { AgentDetail } from "@/components/agent-detail";
import { Footer12 } from "@/components/footer12";
import { agents, getAgentBySlug } from "@/data/agents";

export function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return {};
  return {
    title: `${agent.name} | Siphio`,
    description: agent.tagline,
  };
}

export default async function AgentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) notFound();

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar33 />
      <AgentDetail agent={agent} />
      <Footer12 />
    </main>
  );
}
