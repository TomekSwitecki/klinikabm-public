import { Section } from "../Section/Section";
import { Question } from "../question/Question";
import { title, subtitle, questions, answers } from "./const";

export function Faq() {
  return (
    <Section sectionTitle={title} sectionSubtitle={subtitle}>
      <div className="faq__container">
        {questions.map((question, index) => (
          <Question key={index} question={question} answer={answers[index]} />
        ))}
      </div>
    </Section>
  );
}
