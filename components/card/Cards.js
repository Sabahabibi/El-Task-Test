import { El } from "../../utils/El.js";
import { Button } from "../button/Button.js";

export function Card({ name, id }) {
  return El({
    element: "div",
    children: [
      El({
        element: "a",
        href: `../pages/product/product.html?id=${id}`,
        innerText: "Product",
      }),
      El({
        element: "p",
        innerText: name,
      }),
      El({
        element: "div",
        children: [
          Button({ text: "D", bgColor: "bg-red-600" }),
          Button({ text: "E", bgColor: "bg-yellow-300" }),
        ],
        className: "flex gap-4",
      }),
    ],
    className:
      " flex justify-between items-center gap-4 p-4 border border-gray-200",
  });
}
