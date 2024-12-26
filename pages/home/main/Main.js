import { Form } from "../../../components/form/Form.js";
import { List } from "../../../components/list/List.js";
import { El } from "../../../utils/El.js";

export function HomeMain() {
  return El({
    element: "main",
    children: [Form(), List()],
  });
}
