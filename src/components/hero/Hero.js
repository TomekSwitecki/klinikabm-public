import photo_main from "../../resources/Hero/HERO_ILUSTRATION.png";
import photo_main_mobile from "../../resources/Hero/HERO_ILUSTRATION_MOBILE.png";
import { CTA } from "./CTA";

export function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__container--left">
        <CTA />
      </div>
      <div className="hero__container--right">
        <img
          className="hero_photo--desktop"
          src={photo_main}
          draggable="false"
          alt="klinika_bm_hero_ilustration_1"
        ></img>
        <img
          className="hero_photo--mobile"
          src={photo_main_mobile}
          draggable="false"
          alt="klinika_bm_hero_ilustration_mobile"
        ></img>
      </div>
    </div>
  );
}
