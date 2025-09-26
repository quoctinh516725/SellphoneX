import DetailProduct from "../pages/DetailProduct/DetailProduct";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import Products from "../pages/Products/Products";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Verify from "../pages/auth/Verify";
import Cart from "../pages/cart/Cart";
import Payment from "../pages/cart/Payment";
import PlaceOrder from "../pages/cart/PlaceOrder";
import Profile from "../pages/Profile/Profile";
import ProfileDashboard from "../pages/Profile/sections/ProfileDashboard";
import Warranty from "../pages/Profile/sections/Warranty";
import Rank from "../pages/Profile/sections/Rank";
import Account from "../pages/Profile/sections/Account";
import Orders from "../pages/Profile/sections/Orders";
import OrderDetail from "../pages/Profile/sections/OrderDetail";

const routes = [
  {
    path: "/",
    component: Home,
    isDefault: true,
  },
  {
    path: "/login",
    component: Login,
    isDefault: false,
  },
  {
    path: "/register",
    component: Register,
    isDefault: false,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    isDefault: false,
  },
  {
    path: "/verify-otp",
    component: Verify,
    isDefault: false,
  },
  {
    path: "/profile",
    layout: Profile,
    children: [
      { path: "", component: ProfileDashboard },
      { path: "warranty", component: Warranty },
      { path: "rank", component: Rank },
      { path: "account", component: Account },
      { path: "orders", component: Orders },
      { path: "orders/:id", component: OrderDetail },
    ],
  },

  {
    path: "/products/:id",
    component: DetailProduct,
    isDefault: true,
  },
  {
    path: "/products",
    component: Products,
    isDefault: true,
  },
  {
    path: "/cart",
    component: Cart,
    isDefault: true,
  },
  {
    path: "/place-order",
    component: PlaceOrder,
    isDefault: true,
  },
  {
    path: "/payment",
    component: Payment,
    isDefault: true,
  },
];

export default routes;
