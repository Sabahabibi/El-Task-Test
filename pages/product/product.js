import { El } from "../../utils/El.js";

const product = document.getElementById("product");

function ProductDetail(id) {
  return El({
    element: "div",
    children: [
      El({
        element: "h3",
        innerText: id,
      }),
    ],
  });
}

export function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    id: params.get("id"),
  };
}

async function productPage() {
  const { id } = getUrlParams();
  product.append(ProductDetail(id));
}

productPage();
