import { El } from "../../utils/El.js";
import { Button } from "../button/Button.js";
import { Input } from "../input/Input.js";

export function Form() {
  return El({
    element: "form",
    children: [
      Input({ placeholder: "Enter your name!", name: "userName" }),
      Input({ placeholder: "Enter your Email!", name: "userEmail" }),
      Button({ text: "add user", type: "submit" }),
    ],
    className: "flex  gap-[30px] pt-6",
  });
}
