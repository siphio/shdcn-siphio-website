import { Navbar33 } from "@/components/navbar33";
import { Feature234 } from "@/components/feature234";
import { Feature251 } from "@/components/feature251";
import { Feature102 } from "@/components/feature102";
import { Faq16 } from "@/components/faq16";
import { Hero211 } from "@/components/hero211";
import { Contact2 } from "@/components/contact2";
import { Footer12 } from "@/components/footer12";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar33 />
      {/* Hero */}
      <Feature234 />
      {/* Features */}
      <Feature251 />
      <Feature102 />
      {/* FAQ */}
      <Faq16 />
      {/* CTA */}
      <Hero211 />
      {/* Contact */}
      <Contact2 />
      {/* Footer */}
      <Footer12 />
    </main>
  );
}
