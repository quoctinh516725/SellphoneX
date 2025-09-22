import Auth from "../pages/Auth";
import DetailProduct from "../pages/DetailProduct/DetailProduct";
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
  {
    path: "/products/:id",
    component: DetailProduct,
  },
];

export default routes;
