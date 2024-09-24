import { useState } from "react";
import style from "./card.module.css";
import cn from "classnames";

import Avatar from "../avatar/Avatar";
import Button from "../button/Button";
import GalleryWorks from "../galleryWorks/GalleryWorks";

interface IUser {
  id: number;
  name: string;
  role: string;
  img: string;
}

interface ICard {
  user: IUser;
}

function Card({ user }: ICard) {
  const { name, img } = user;

  const [online, setOnline] = useState<boolean>(true);

  interface IPhotos {
    description: string;
    id: number;
    title: string;
    url: string;
    user: number;
  }

  type PhotosType = IPhotos[];

  const [photos, setPhotos] = useState<PhotosType>([]);

  const fetchWorks = () =>
    fetch("https://api.slingacademy.com/v1/sample-data/photos?limit=6")
      .then((response) => response.json())
      .then((data) => setPhotos((current) => data.photos));

  const setPhotosHandler = () => {
    fetchWorks();
  };

  return (
    <div className={cn(style.card)}>
      <div className={cn(style["card__img-wrapper"], online ? style["user--online"] : "")}>
        <Avatar img={img} />
      </div>
      <span className={cn(style.card__username)}>{name}</span>
      <Button title="Показать работы" use="success" clickHandler={setPhotosHandler} />
      {photos.length > 0 ? <GalleryWorks works={photos} /> : <GalleryWorks />}
    </div>
  );
}

export default Card;
