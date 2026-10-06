import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Activities } from "@/components/activities";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Certifications } from "@/components/certifications";
import { Resume } from "@/components/resume";
import { VisionMission } from "@/components/vision-mission";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CircuitDivider } from "@/components/circuit-divider";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Projects />
      <Skills />
      <Education />
      <CircuitDivider />
      <Certifications />
      <Resume />
      <VisionMission />
      <Contact />
      <Footer />
    </main>
  );
}
