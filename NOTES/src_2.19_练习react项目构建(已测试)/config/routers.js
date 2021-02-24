import Home from "../pages/Home";
import Login from "../pages/Login";

const routersArr = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/Home",
    component: Home,
  },
  {
    path: "/Login",
    component: Login,
  },
];

export default routersArr;
