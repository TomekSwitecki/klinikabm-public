import LOGOTYPE_WHITE from "../../resources/Footer/LOGOTYPE_WHITE.svg";
import { Label } from "../label/Label";
import { Divider } from "../divider/Divider";

import Avatar, { Type } from "../avatar/Avatar";
import { PinDestination } from "@vectopus/atlas-icons-react";

export function Footer(props) {
  const iframeStyles = {
    border: "0",
  };

  const LogotypeSection = () => {
    return (
      <div className="footer__logotype">
        <img
          className="logotype_img"
          src={LOGOTYPE_WHITE}
          alt="Klinika BM Logo"
        />
      </div>
    );
  };

  const Map = () => {
    return (
      <div className="map-container">
        <iframe
          className="map-embeded"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11847.968422262442!2d20.04259078854333!3d51.52513667381847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719bb914f4caeaf%3A0x38655ea47f398e87!2sKlinika%20BMW!5e0!3m2!1spl!2spl!4v1690039036256!5m2!1spl!2spl"
          style={iframeStyles}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };

  const Copyrights = () => {
    return (
      <div className="footer__copyritgh-section">
        <p className="footer__copyrights">
          Wszystkie zdjęcia i materiały zawarte na stronie podlegają prawom
          autorskim.
          <br />
          Użycie ich bez pisemnej zgody jest zabronione.
        </p>
        <p className="footer__copyrights">
          KLINIKA BMW © 2023 All rights reserved
        </p>
      </div>
    );
  };

  return (
    <footer className="footer" id="kontakt">
      <div className="footer__container">
        <LogotypeSection />
        <Divider />
        <div className="footer__content">
          <div className="footer__labels">
            <p className="labels__header">Skontaktuj się z nami!</p>
            <Label
              icon={
                <Avatar
                  icon={<box-icon type="solid" name="phone"></box-icon>}
                  type={Type.Red}
                />
              }
              text={<a href="+48 510 301 440">+48 510 301 440</a>}
            />
            <Label
              icon={
                <Avatar
                  icon={<box-icon name="envelope"></box-icon>}
                  type={Type.Primary}
                />
              }
              text={
                <a href="mailto:bmklinikatomaszów@gmail.com">
                  bmklinikatomaszów@gmail.com
                </a>
              }
            />
            <Label
              icon={
                <Avatar
                  icon={<PinDestination size={24} />}
                  type={Type.Primary}
                />
              }
              text={["Tomaszów Mazowiecki", <br />, "Adama 3, 97-200 "]}
            />
          </div>
          <Map />
        </div>
        <Copyrights />
      </div>
    </footer>
  );
}
