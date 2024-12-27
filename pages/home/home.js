import { Form } from "../../components/form/Form.js";
import { List } from "../../components/list/List.js";
import { El } from "../../utils/El.js";

export async function HomePage() {
  const listComponent = await List();

  return El({
    element: "main",
    children: [Form(), listComponent],
  });
}
