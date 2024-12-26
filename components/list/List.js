import { El } from "../../utils/El.js";
import { Card } from "../card/Cards.js";

export function List() {
  return El({
    element: "div",
    children: [
      Card({ name: "saba" }),
      Card({ name: "saba" }),
      Card({ name: "saba" }),
    ],
    className: "p-6 flex flex-col gap-4 ",
  });
}
