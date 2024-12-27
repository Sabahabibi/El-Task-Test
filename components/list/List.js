import { El } from "../../utils/El.js";
import { Card } from "../card/Cards.js";

export function List({ users, loading, error }) {
  if (error) {
    return El({
      element: "div",
      children: [`Error: ${error.message}`],
      className: "p-6 text-center text-red-500",
    });
  }

  if (loading) {
    return El({
      element: "div",
      children: ["Loading..."],
      className: "p-6 text-center",
    });
  }

  const usersArray = users.map((user) =>
    Card({ name: user.name, id: user.id })
  );

  return El({
    element: "div",
    children:
      usersArray.length > 0
        ? usersArray
        : [
            El({
              element: "div",
              children: ["No users found"],
              className: "text-center",
            }),
          ],
    className: "p-6 flex flex-col gap-4",
  });
}
