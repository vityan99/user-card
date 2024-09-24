import UserCards from "../userCards/UserCards";

import style from "./app.module.css";
import cn from "classnames";

interface IUser {
  id: number;
  name: string;
  role: string;
  img: string;
}

type UsersType = IUser[];

const users: UsersType = [
  {
    id: 1,
    name: "Jordan pro designer",
    role: "designer",
    img: "https://sun9-9.userapi.com/impf/c849028/v849028127/1910b2/WStbc12InzM.jpg?size=320x399&quality=96&sign=959a23f5d74f782d2632f763b14dcc00&c_uniq_tag=0NH1KEHYAObR1WODQ2c-W_MSM2zS0MA9iHKuAtu71lo&type=album",
  },
];

function App() {
  return (
    <div className={cn(style.container)}>
      <UserCards users={users} />
    </div>
  );
}

export default App;
