import style from "./galleryWorks.module.css";
import cn from "classnames";
import Work from "../work/Work";
import WorkSkeleton from "../workSkeleton/WorkSkeleton";

interface IPhotos {
  description: string;
  id: number;
  title: string;
  url: string;
  user: number;
}

type PhotosType = IPhotos[];

interface IGalleryWorks {
  works?: PhotosType;
}

function GalleryWorks({ works }: IGalleryWorks) {
  return (
    <div className={cn(style["gallery-works"])}>
      {works ? works.map((work, i) => <Work work={work.url} key={i} />) : [...new Array(6)].map((_, i) => <WorkSkeleton key={i} />)}
    </div>
  );
}

export default GalleryWorks;
