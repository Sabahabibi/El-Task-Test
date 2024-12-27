import { El } from "../../utils/El.js";
import { HomeMain } from "./main/Main.js";

export function HomePage({ users, loading, error }) {
  return El({
    element: "div",
    children: [HomeMain({ users, loading, error })],
  });
}
