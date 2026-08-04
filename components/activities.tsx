import { activities } from "@/data/activities";
import { SectionHeading } from "./section-heading";
import { ActivityCard } from "./activity-card";
import { CircuitDivider } from "./circuit-divider";

export function Activities() {
  const sorted = [...activities].sort((a, b) => a.order - b.order);

  return (
    <section id="activities" className="relative py-6 sm:py-8">
      <CircuitDivider className="text-canopy-400" />
      <div className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="E-Waste Coursework"
          title="Activities & Sustainability Practice"
          description="A collection of coursework and activities focused on e-waste management, documenting what I worked on, what I learned, and how it changed my perspective."
        />

        <div className="mt-12 space-y-5">
          {sorted.map((activity, i) => (
            <ActivityCard key={activity.id} activity={activity} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
