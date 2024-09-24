import style from "./button.module.css";
import cn from "classnames";

import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

interface IButton {
  title: string;
  use: string;
  arrow?: string;
  size?: string;
  clickHandler: () => void;
}

function Button({ title, use, arrow, size, clickHandler }: IButton) {
  const sizeModificator = size && size !== "small" ? style[`btn--${size}`] : "";

  return (
    <button className={cn(style.btn, use ? style[`btn--${use}`] : "", sizeModificator)} onClick={clickHandler}>
      {arrow && arrow === "left" && <BiArrowToLeft />}
      {title}

      {arrow && arrow !== "left" && <BiArrowToRight />}
    </button>
  );
}

export default Button;
