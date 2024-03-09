import question from "../../resources/Question/Question.svg";
import { useState } from "react";
import { Answer } from "./Answer";
import { Chevron } from "./Chevron";

export function Question(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded);
    setIsRotated(!isRotated);
  }

  return (
    <div
      className={`question__container ${
        isExpanded && "question__container--expanded"
      }`}
      onClick={handleClick}
    >
      <div className="question__content">
        <div className="content__questionGroup">
          <img className="question__icon" alt="Question mark" src={question} />
          {props.question}
        </div>
        <Chevron isRotated={isRotated} />
      </div>

      <Answer answer={props.answer} isExpanded={isExpanded} />
    </div>
  );
}
