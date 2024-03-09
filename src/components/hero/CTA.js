import React from "react";
import { Divider } from "../divider/Divider";
import Button, { Type } from "../../components/button/Button";
import { _scrollTo } from "../navbar/utils";
import BMW from "../../resources/BMW.png"
import ALPINA from "../../resources/ALPINA.png"
export function CTA() {
  return (
    <div className="cta__wrapper">
      <div className="cta">
        Serwis dla
        <br /> Twojego <br />
        <span className="cta__bmw">BMW</span>
      </div>
      <Divider />
      <div className="cta__paragraph">
        Jesteśmy profesjonalnym serwisem samochodowym specjalizującym
        <br />
        się w naprawach pojazdów marki BMW oraz Alpina.
      </div>
      <Button
        type={Type.Primary}
        text="Umów wizytę!"

        onClick={() => _scrollTo("kontakt")}
      />
      <div className="cta__partners">
        <div className="cta__partners-label">Oficjalni partnerzy</div>
        <div className="cta__partners-logos">
          <a target="#" href="https://www.bmw.pl/pl/topics/fascination-bmw/electromobility2020-new/electric-cars.html"> <button className="logo-button"><img src={BMW} className="logo logo--bmw" alt="BMW-logo"></img></button></a>
          <a target="#" href="https://www.alpina-automobiles.com/en/"> <button className="logo-button"> <img src={ALPINA} className="logo logo--alpina" alt="BMW-logo"></img></button></a>
        </div>
      </div>
    </div>
  );
}
