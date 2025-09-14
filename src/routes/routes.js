import Auth from "../pages/Auth";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Auth,
  },
  {
    path: "/products",
    component: Products,
  },
];

export default routes;
