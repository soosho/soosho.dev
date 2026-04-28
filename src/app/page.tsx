import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechMarquee from "@/components/TechMarquee";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Projects />
      <Skills />
      <ContactCTA />
    </>
  );
}
