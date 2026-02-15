interface AgentsHeroProps {
  className?: string;
}

const AgentsHero = ({ className }: AgentsHeroProps) => {
  return (
    <section className={className}>
      <div className="container mx-auto pt-32 pb-16 text-center">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          Our AI Agents
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Purpose-built AI agents that automate real workflows — from lead
          qualification to customer support and beyond.
        </p>
      </div>
    </section>
  );
};

export { AgentsHero };
