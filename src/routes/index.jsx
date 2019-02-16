import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import isAuth from "../HOC/isAuth";
import isNotAuth from "../HOC/isNotAuth";
import Login from "../layouts/Login/Login";

const indexRoutes = [
  {
    path: "/login",
    name: "Login",
    component: isNotAuth(Login)
  },
  { path: "/", name: "Home", component: isAuth(Dashboard) }
];

export default indexRoutes;
