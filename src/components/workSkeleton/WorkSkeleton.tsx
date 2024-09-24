import style from "./workSkeleton.module.css";
import cn from "classnames";

function WorkSkeleton() {
  return <div className={cn(style["work-skeleton"])}></div>;
}

export default WorkSkeleton;
