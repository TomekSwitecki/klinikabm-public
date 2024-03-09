import React from "react";
import { Section } from "../Section/Section";
import { title, subtitle, cardData } from "./const";
import { PhotoCard } from "../photoCard/PhotoCard";

export function DlaczegoMy(props) {
  return (
    <Section sectionTitle={title} sectionSubtitle={subtitle} id="o_nas" full>
      <div className="dlaczegoMy__container">
        <div className="dlaczegoMy__card-wrapper">
          {cardData.map((card) => (
            <PhotoCard text={card.text} icon={card.icon} photo={card.photo} />
          ))}
        </div>
      </div>
    </Section>
  );
}
