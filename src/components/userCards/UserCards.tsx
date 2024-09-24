import style from "./userCards.module.css";
import cn from "classnames";
import Card from "../card/Card";

interface IUser {
  id: number;
  name: string;
  role: string;
  img: string;
}

type UsersType = IUser[];

interface IUserCards {
  users: UsersType;
}

function UserCards({ users }: IUserCards) {
  return (
    <div className={cn(style["user-cards"])}>
      {users.map((user: IUser) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserCards;
