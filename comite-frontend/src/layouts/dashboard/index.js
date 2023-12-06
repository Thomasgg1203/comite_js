// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import MDTypography from "components/MDTypography";
import { useAuth } from "context";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const { authData } = useAuth(); // Asegúrate de que tu contexto AuthContext proporciona la información del usuario

  // Función para obtener un mensaje de bienvenida personalizado según el rol
  const getWelcomeMessage = () => {
    const navigate = useNavigate();
    if (authData) {
      if (authData.user.roles.includes("aprendiz")) {
        return `¡Bienvenido a la Plataforma Aprendiz, ${authData.user.nombres}! Aquí puedes encontrar información sobre tus procesos académicos y detalles de tus faltas académicas.`;
      } else if (authData.user.roles.includes("gestor-comite")) {
        return `¡Bienvenido a la Plataforma Gestor de Comité, ${authData.user.nombres}! Aquí puedes acceder a herramientas y estadísticas para gestionar procesos disciplinarios.`;
      } else if (authData.user.roles.includes("gestor-grupo")) {
        return `🚀 Optimiza la Gestión de Comités con Nuestro Software Administrativo para el SENA.`;
      } else if (authData.user.roles.includes("administrador")) {
        return `¡Bienvenido a la Plataforma Administrador, ${authData.user.nombres}! Aquí puedes acceder a funciones administrativas y herramientas de gestión.`;
      }
    }
    // Mensaje predeterminado si no se cumple ninguna condición
    navigate("/authentication/sign-in");
    return `¡Bienvenido a la Plataforma del SENA, te queremos decir que no estas registrado!`;
  };
  const otroMensaje = () => {
    if (authData.user.roles.includes("gestor-grupo")) {
      return `Descubre la eficiencia en la administración, seguridad sin compromisos y automatización inteligente. Simplifica tu enfoque, ahorra tiempo y eleva la excelencia educativa.`;
    } else {
      return `Aquí encontrarás herramientas y estadísticas para gestionar eficientemente los
      procesos diciplinarios.`;
    }
  };

  return (
    <DashboardLayout>
      {/*PArte de navegacion de arriba del dasboar */}
      <DashboardNavbar /> {/*PArte de navegacion de arriba del dasboar */}
      <MDBox py={3}>
        {/* Sección de bienvenida (nueva adición) */}
        <MDBox my={5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MDTypography variant="h4" fontWeight="bold" textAlign="center">
                {getWelcomeMessage()}
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox my={3}>
          <Grid item xs={12}>
            <MDTypography variant="body1" textAlign="center">
              {otroMensaje()}
            </MDTypography>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
