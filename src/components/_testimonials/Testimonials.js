import { Section } from "../Section/Section";
import { OpinionCard } from "../opinionCard/OpinionCard";
import { title, subtitle, opinions } from "./const";
import { InfiniteLooper } from "./Looper";

export function Testimonials() {
  const content = (
    <section className="testimonials">
      {opinions.map((opinion, index) => (
        <OpinionCard key={index} text={opinion} />
      ))}
    </section>
  );

  const looperInstances = 6;

  return (
    <Section
      sectionTitle={title}
      sectionSubtitle={subtitle}
      full
      id={"testymonia"}
    >
      <InfiniteLooper looperInstances={looperInstances}>
        {content}
      </InfiniteLooper>
    </Section>
  );
}
