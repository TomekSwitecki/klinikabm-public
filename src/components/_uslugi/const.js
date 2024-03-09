import { ComputerChip } from "@vectopus/atlas-icons-react";
import Avatar, { Type } from "../avatar/Avatar";
export const title = "Oferowane usługi";

export const subtitle = (
  <>
    Oferujemy szeroki wachlarz usług zapewniający klientom pełen wachlarz
    możliwości.
    <br />
    Wygodnie, szybko i profesjonalnie.
  </>
);

export const cardData_1 = [
  {
    title: "Naprawy Mechaniczne",
    text: "Naprawy mechanicznych samochodów BMW i Alpina, w tym naprawach silników, zawieszenia, hamulców oraz układów kierowniczych.",
    icon: (
      <Avatar
        icon={<box-icon type="solid" name="wrench"></box-icon>}
        type={Type.LightBlue}
      />
    ),
  },
  {
    title: "Programowanie Diagnostyka",
    text: "Najnowsze narzędzia diagnostyczne, umożliwiające precyzyjną diagnostykę. Programowanie, naprawa błędów i usterek systemów elektronicznych",
    icon: <Avatar icon={<ComputerChip size={24} />} type={Type.Primary} />,
  },
  {
    title: "Przeglądy Serwisowe",
    text: "Profesjonalne przeglądy serwisowe Weryfikację stanu technicznego, Wymiana oleju oraz filtrów, a także testy diagnostyczne.",
    icon: (
      <Avatar
        icon={<box-icon name="car-mechanic" type="solid"></box-icon>}
        type={Type.Red}
      />
    ),
  },
];
export const cardData_2 = [
  {
    title: "Dojazd do klienta",
    text: "Możliwość dojazdu do klienta na terenie całego kraju, lub transport na lawecie do naszego warsztatu.",
    icon: (
      <Avatar
        icon={<box-icon name="car-garage" type="solid"></box-icon>}
        type={Type.Black}
      />
    ),
  },
  {
    title: "Montaż LPG",
    text: "Oferujemy współpracę z autoryzowany serwisem BRC - firmą GOMAR z siedzibą w Łasku.",
    icon: (
      <Avatar
        icon={<box-icon name="gas-pump" type="solid"></box-icon>}
        type={Type.Black}
      />
    ),
  },
];
