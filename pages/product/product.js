import { getUrlParams } from "../../utils/urlUtils.js";
import { El } from "../../utils/El.js";

function ProductPage() {
  const { id } = getUrlParams();

  // You can now use the id to fetch product details
  return El({
    element: "div",
    children: [
      El({
        element: "h1",
        innerText: `Product ID: ${id}`,
        className: "text-2xl font-bold mb-4",
      }),
    ],
    className: "p-6",
  });
}

const product = document.getElementById("product");
product.append(ProductPage());
