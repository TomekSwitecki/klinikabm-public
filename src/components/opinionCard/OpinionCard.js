import star from "../../resources/Opinion/Star.svg";
import Avatar, { Type } from "../avatar/Avatar";

export function OpinionCard(props) {
  return (
    <div className="opinion-card" draggable="false">
      <div className="opinion_quotes">
        <Avatar
          type={Type.Primary}
          icon={<box-icon type="solid" name="quote-left"></box-icon>}
        />
      </div>
      <div className="opinion-card__content">
        <div className="opinion-card__rating">
          <img className="star-icon" src={star} alt="rating star" />
          <img className="star-icon" src={star} alt="rating star" />
          <img className="star-icon" src={star} alt="rating star" />
          <img className="star-icon" src={star} alt="rating star" />
          <img className="star-icon" src={star} alt="rating star" />
        </div>
        <p className="opinion-card__text">{props.text}</p>
        <p className="opinion-card__sublablel">Opinia z Google Maps</p>
      </div>
    </div>
  );
}
