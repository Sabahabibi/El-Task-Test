import { El } from "../../utils/El.js";
import { HomeMain } from "./main/Main.js";

export function HomePage() {
  return El({
    element: "div",
    children: [HomeMain()],
  });
}
