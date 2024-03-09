import { ShieldIcon, CarIcon, GroupIcon } from "./GradientIcons";
import PHOTO_1 from "../../resources/WhyUs/PHOTO_1.png";
import PHOTO_2 from "../../resources/WhyUs/PHOTO_2.png";
import PHOTO_3 from "../../resources/WhyUs/PHOTO_3.png";
export const title = "Dlaczego my?";

export const subtitle = (
  <>
    Wybierz nasz serwis i ciesz się doświadczoną, profesjonalną i dokładną
    opieką nad Twoim samochodem.
  </>
);

export const cardData = [
  {
    text: "Rzetelność & Profesjonalizm",
    icon: <ShieldIcon />,
    photo: PHOTO_1,
  },
  {
    text: "Solidność & Dokładność",
    icon: <CarIcon />,
    photo: PHOTO_2,
  },
  {
    text: "Wiedza & Doświadczenie",
    icon: <GroupIcon />,
    photo: PHOTO_3,
  },
];
