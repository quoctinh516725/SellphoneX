import Auth from "../pages/Auth";
import Home from "../pages/Home/Home";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Auth,
  },
];

export default routes;