import { HomePage } from "./pages/home/home.js";
const app = document.getElementById("app");

async function initApp() {
  const homePage = await HomePage();
  app.append(homePage);
}

initApp();
