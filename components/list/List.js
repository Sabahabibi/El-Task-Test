import { getUsers } from "../../services/services.js";
import { El } from "../../utils/El.js";
import { Card } from "../card/Cards.js";

export async function List() {
  const users = await getUsers();
  const usersArray = users.map((user) => {
    return Card({ name: user.name, id: user.id });
  });

  return El({
    element: "div",
    children: usersArray,
    className: "p-6 flex flex-col gap-4 ",
  });
}
