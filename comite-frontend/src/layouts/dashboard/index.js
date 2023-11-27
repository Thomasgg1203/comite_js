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
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import MDTypography from "components/MDTypography";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      {/*PArte de navegacion de arriba del dasboar */}
      <DashboardNavbar /> {/*PArte de navegacion de arriba del dasboar */}
      <MDBox py={3}>
        {/* Sección de bienvenida (nueva adición) */}
        <MDBox my={5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MDTypography variant="h3" fontWeight="bold" textAlign="center">
                ¡Bienvenido a la Plataforma del SENA!
              </MDTypography>
              <MDTypography variant="body1" textAlign="center">
                Aquí encontrarás herramientas y estadísticas para gestionar eficientemente tus
                procesos diciplinarios.
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        {/* Sección de bienvenida (nueva adición) */}
        {/* <MDBox> */}
        {/* PArte de tablas kulas que aparecen antes del footer */}
        {/* <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid> */}
        {/* PArte de tablas kulas que aparecen antes del footer */}
        {/* </MDBox> */}
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <MDTypography variant="body1" textAlign="center">
                Aquí encontrarás herramientas y estadísticas para gestionar eficientemente tus
                procesos diciplinarios.
              </MDTypography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDTypography variant="body1" textAlign="center">
                Aqui una descripcion bien arrecha
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
