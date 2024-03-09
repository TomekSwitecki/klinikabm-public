import { Divider } from "../divider/Divider";
import { Section } from "../Section/Section";

import photoOne from "../../resources/PhotoShowcase/1.png";
import photoTwo from "../../resources/PhotoShowcase/2.png";
import photoThree from "../../resources/PhotoShowcase/3.png";
import photoFour from "../../resources/PhotoShowcase/4.png";

import React, { useState, useEffect } from "react";

export const PhotoShowcase = () => {

  return (
    <Section full id="photo-showcase">
      <div className="photo-showcase__wrapper">
        <Divider />
        <img
          src={photoOne}
          className="photo__main"
          alt="car image"
        />
        <div className="photo-showcase__triplet">
          <img src={photoTwo} alt="car image" />
          <img src={photoThree} alt="car image" />
          <img src={photoFour} alt="car image" />
        </div>
      </div>
    </Section>
  );
};
