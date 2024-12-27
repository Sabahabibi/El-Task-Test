import { El } from "../../utils/El.js";
import { Card } from "../card/Cards.js";
import { getUsers } from "../../services/services.js";

export async function List() {
  const users = await getUsers();
  const usersArray = users.map((user) => Card({ name: user.name }));
  return usersArray.length > 0
    ? El({
        element: "div",
        children: usersArray,
        className: "p-6 flex flex-col gap-4 ",
      })
    : El({
        element: "div",
        children: ["Loading..."],
        className: "p-6 text-center",
      });
}
