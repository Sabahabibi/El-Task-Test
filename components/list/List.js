import { El } from "../../utils/El.js";
import { Card } from "../card/Cards.js";

const phoneList = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/200/300",
    name: "iphone",
    price: 1000,
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/200/300",
    name: "laptop",
    price: 1000,
  },
];

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
