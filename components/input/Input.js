import { El } from "../../utils/El.js";
export function Input({ name, placeholder }) {
  return El({
    element: "input",
    type: "text",
    placeholder,
    name,
    className: "p-4 rounded-md border border-blue-200",
  });
}
