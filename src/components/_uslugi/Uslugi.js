import { Section } from "../Section/Section";

import { subtitle, title } from "./const";
import Avatar, { Type } from "../avatar/Avatar";
import { cardData_1, cardData_2 } from "./const";
import { ComputerChip } from "@vectopus/atlas-icons-react";
import { Card } from "../card/Card";
import { Fragment } from "react";
export function Uslugi(props) {
  const UslugiSectionContent = () => {
    return (
      <div className="uslugi__container">
        <div className="uslugi__card-wrapper">
          {cardData_1.map((card, index) => (
            <Card title={card.title} text={card.text} icon={card.icon} />
          ))}
        </div>
        <div className="uslugi__card-wrapper">
          {cardData_2.map((card, index) => (
            <Card title={card.title} text={card.text} icon={card.icon} />
          ))}
        </div>
      </div>
    );
  };
  return (
    <Section sectionTitle={title} sectionSubtitle={subtitle} id="uslugi" full>
      <UslugiSectionContent />
    </Section>
  );
}
