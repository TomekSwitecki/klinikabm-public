import AnimateHeight from "react-animate-height";
import { CSSTransition } from "react-transition-group";

export function Answer(props) {
  return (
    <AnimateHeight
      className="question__answer"
      duration={300}
      height={props.isExpanded ? "auto" : 0}
    >
      <CSSTransition
        in={props.isExpanded}
        timeout={700}
        classNames="question__answer"
        unmountOnExit
      >
        <p>{props.answer}</p>
      </CSSTransition>
    </AnimateHeight>
  );
}
