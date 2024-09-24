import style from "./work.module.css";
import cn from "classnames";

interface IWork {
  work: string;
}

function Work({ work }: IWork) {
  return (
    <div className={cn(style.work)}>
      <img className={cn(style.work__img)} src={work} alt="work" />
    </div>
  );
}

export default Work;
