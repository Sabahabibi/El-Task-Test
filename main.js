import { HomePage } from "./pages/home/home.js";
import { getUsers } from "./services/services.js";

class App {
  constructor(root) {
    this.root = root;
    this.init();
  }

  async init() {
    // First render with loading state
    this.renderApp({ users: [], loading: true });

    try {
      const users = await getUsers();
      // Re-render with users data
      this.renderApp({ users, loading: false });
    } catch (error) {
      this.renderApp({ users: [], loading: false, error });
    }
  }

  renderApp(state) {
    this.root.innerHTML = "";
    this.root.append(HomePage(state));
  }
}

const app = new App(document.getElementById("app"));
