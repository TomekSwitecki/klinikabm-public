import { motion } from "framer-motion";
import chevronUpIcon from "../../resources/Question/ChevronUp.svg";

export function Chevron(props) {
  return (
    <motion.img
      className="question__chevron"
      alt="chevron up"
      src={chevronUpIcon}
      initial={{ rotate: 0 }}
      animate={{ rotate: props.isRotated ? 180 : 0 }}
      transition={{ type: "spring", mass: 1, stiffness: 100, damping: 15 }}
    />
  );
}
