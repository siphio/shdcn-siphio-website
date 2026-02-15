import { Navbar33 } from "@/components/navbar33";
import { WebsitesShowcase } from "@/components/websites-showcase";
import { ProjectCta } from "@/components/project-cta";
import { Footer12 } from "@/components/footer12";
import { websites } from "@/data/websites";

export const metadata = {
  title: "Websites | Siphio",
  description:
    "High-performance websites built by Siphio — marketing sites, e-commerce stores, SaaS platforms, and dashboards.",
};

export default function WebsitesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar33 />
      <WebsitesShowcase websites={websites} />
      <ProjectCta />
      <Footer12 />
    </main>
  );
}
