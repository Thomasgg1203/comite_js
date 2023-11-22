// Iconos
import Icon from "@mui/material/Icon";
// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
//Reglamento del aprendiz
import Reglamento from "layouts/reglamento";
//Gestor-grupo
import Gestor_grupo from "layouts/cruds/gestor-grupo";
//componente usuarios
import Usuarios from "layouts/cruds/usuarios";

const routes = [
  {
    type: "collapse",
    name: "Panel Principal",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Perfil",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  // },
  //Parte Reglamento Aprendiz
  {
    type: "collapse",
    name: "Reglamento Del Aprendiz",
    key: "reglamento",
    icon: <Icon fontSize="small">menu_book</Icon>,
    route: "/reglamento",
    component: <Reglamento />,
  },
  //Parte Reglamento Aprendiz fin
  //Parte crud Gestor de grupo
  {
    type: "collapse",
    name: "Gestor Grupo",
    key: "gestor-grupo",
    icon: <Icon fontSize="small">menu_book</Icon>,
    route: "/gestor-grupo",
    component: <Gestor_grupo />,
  },
  //Parte crud Gestor de grupo fin
  {
    type: "collapse",
    name: "Usuarios",
    key: "usuarios",
    icon: <Icon fontSize="small">menu_book</Icon>,
    route: "/usuarios",
    component: <Usuarios />,
  },
  //Parte crud Gestor de grupo fin
];

/**
 * ----------------------------------Rutas para Aprendiz--------------------------------
 */

/**
 * ----------------------------------Fin rutas para Aprendiz--------------------------------
 */

/**
 * ----------------------------------Rutas para Instructor--------------------------------
 */

/**
 * ----------------------------------fin rutas para Instructor--------------------------------
 */

/**
 * ----------------------------------Rutas para Gestor de comite--------------------------------
 */

/**
 * ----------------------------------fin rutas para Gestor de comite--------------------------------
 */

export default routes;
