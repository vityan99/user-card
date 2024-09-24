import style from "./avatar.module.css";
import cn from "classnames";

interface IAvatar {
  img: string;
}

function Avatar({ img }: IAvatar) {
  return <img className={cn(style.img)} src={img} alt="avatar" />;
}

export default Avatar;
