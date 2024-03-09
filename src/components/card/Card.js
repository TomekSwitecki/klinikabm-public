import Avatar, { Type } from "../avatar/Avatar";

export function Card(props) {
  return (
    <div className="card" draggable="false">
      <div className="card_icon">{props.icon}</div>
      <div className="card__content">
        <p className="card__title">{props.title}</p>
        <p className="card__text">{props.text}</p>
      </div>
    </div>
  );
}
