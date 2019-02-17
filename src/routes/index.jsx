import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import isAuth from "../HOC/isAuth";
import isNotAuth from "../HOC/isNotAuth";
import Login from "../layouts/Login/Login";
import Maps from "views/Maps/Maps.jsx";

const indexRoutes = [
  { path: "/maps", name: "Maps", component: Maps },
  {
    path: "/login",
    name: "Login",
    component: isNotAuth(Login)
  },
  { path: "/dashboard", name: "Home", component: isAuth(Dashboard) },
  { path: "/", name: "Home", component: isAuth(Dashboard) }
];

export default indexRoutes;
