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
//componente usuarios
import Usuarios from "layouts/cruds/usuarios";
//fichas
import Fichas from "layouts/cruds/fichas";
import Programas from "layouts/cruds/programas";
import SolicitudForm from "layouts/solicitud";

const routes = [
  {
    type: "collapse",
    name: "Panel Principal",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
    roles: ["administrador", "gestor-comite", "aprendiz", "gestor-grupo"],
  },
  {
    type: "collapse",
    name: "Perfil",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
    roles: ["administrador", "gestor-comite", "gestor-grupo"],
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
    roles: ["administrador"],
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
    roles: ["administrador"],
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
    roles: ["administrador"],
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
    roles: ["administrador"],
  },
  //Parte Reglamento Aprendiz
  {
    type: "collapse",
    name: "Reglamento Aprendiz",
    key: "reglamento",
    icon: <Icon fontSize="small">menu_book</Icon>,
    route: "/reglamento",
    component: <Reglamento />,
    roles: ["administrador", "gestor-comite", "gestor-grupo"],
  },
  //Parte Reglamento Aprendiz fin import FolderSharedIcon from '@mui/icons-material/FolderShared';
  {
    type: "collapse",
    name: "Usuarios",
    key: "usuarios",
    icon: <Icon fontSize="small"> folder_shared</Icon>,
    route: "/usuarios",
    component: <Usuarios />,
    roles: ["administrador", "gestor-comite"],
  },
  //Parte crud Gestor de grupo fin
  //ficha
  {
    type: "collapse",
    name: "Fichas",
    key: "ficha",
    icon: <Icon fontSize="small">notes</Icon>,
    route: "/ficha",
    component: <Fichas />,
    roles: ["administrador", "gestor-comite"],
  },
  // Ficha
  //Programa
  {
    type: "collapse",
    name: "Programas",
    key: "programas",
    icon: <Icon fontSize="small">fact_check</Icon>,
    route: "/programas",
    component: <Programas />,
    roles: ["administrador", "gestor-comite"],
  },
  //Programa
  //Programa
  {
    type: "collapse",
    name: "Solicitud",
    key: "solicitud",
    icon: <Icon fontSize="small">fact_check</Icon>,
    route: "/solicitud",
    component: <SolicitudForm />,
    roles: ["administrador", "gestor-comite", "gestor-grupo"],
  },
  //Programa
];

export default routes;
