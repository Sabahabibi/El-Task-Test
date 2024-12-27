import { El } from "../../utils/El.js";

export function Button({ text, type, bgColor }) {
  return El({
    element: "button",
    type: type ? type : "button",
    children: [text],
    className: `${
      bgColor ? bgColor : "bg-blue-600"
    } text-white p-4 rounded-md  shadow-md `,
  });
}
