import { certifications } from "@/data/certifications";
import { SectionHeading } from "./section-heading";
import { CertificationCard } from "./certification-card";

export function Certifications() {
  return (
    <section id="certifications" className="section-shell py-24 sm:py-28">
      <SectionHeading
        eyebrow="Recognition"
        title="Certifications"
        description="A curated collection of certifications showcasing my technical skills, learning progress, and real-world involvement"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <CertificationCard key={c.id} certification={c} index={i} />
        ))}
      </div>
    </section>
  );
}
