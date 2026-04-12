import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Why from "@/components/Why";
import Sectors from "@/components/Sectors";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <Services />
      <Process />
      <About />
      <Why />
      <Sectors />
      <CTA />
      <Footer />
    </main>
  );
}