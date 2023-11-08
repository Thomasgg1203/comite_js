// Componentes de ubicacio
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MDBox from "components/MDBox";
//Parte de la funcionalidad del margen
import Grid from "@mui/material/Grid";
//Parte de tipografia
import MDTypography from "components/MDTypography";

const Reglamento = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <MDBox mx={2} mt={-3} py={3} px={2} bgColor="white" borderRadius="lg">
              <MDTypography variant="h3">Reglamento Del Aprendiz</MDTypography>
              <br />
              <MDTypography variant="h5" color="black">
                Capitulo I
              </MDTypography>
              <br />
              <MDTypography variant="h6" color="black">
                Articulo
              </MDTypography>
              <MDTypography variant="body2" color="black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere nunc ut augue
                aliquet, at consequat tellus placerat. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Aliquam egestas velit a diam
                accumsan ullamcorper. Fusce condimentum purus quis turpis laoreet, id ullamcorper
                arcu mattis. Pellentesque rhoncus, ex a venenatis gravida, lorem diam laoreet justo,
                ut ultrices urna justo eget quam. Quisque in consequat dui, volutpat ornare erat.
                Phasellus eu pulvinar mi, et sagittis velit. Maecenas scelerisque tortor ut blandit
                porta. Nulla commodo, leo ac aliquam dignissim, turpis odio condimentum lorem, at
                elementum velit metus ac erat. In quis lorem aliquet turpis varius placerat. In
                euismod lorem turpis
              </MDTypography>
              <br />
              <MDTypography variant="body2" color="black">
                1. Numeral
              </MDTypography>
              <MDTypography variant="body2">1. Numeral </MDTypography>
              <MDTypography variant="body2">1. Numeral </MDTypography>
              <MDTypography variant="body2">1. Numeral </MDTypography>
              <MDTypography variant="body2">1. Numeral </MDTypography>
              <br />
              <MDTypography variant="h6">Parágrafo</MDTypography>
              <MDTypography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere nunc ut augue
                aliquet, at consequat tellus placerat. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Aliquam egestas velit a diam
                accumsan ullamcorper. Fusce condimentum purus quis turpis laoreet, id ullamcorper
                arcu mattis. Pellentesque rhoncus, ex a venenatis gravida, lorem diam laoreet justo,
                ut ultrices urna justo eget quam. Quisque in consequat dui, volutpat ornare erat.
                Phasellus eu pulvinar mi, et sagittis velit. Maecenas scelerisque tortor ut blandit
                porta. Nulla commodo, leo ac aliquam dignissim, turpis odio condimentum lorem, at
                elementum velit metus ac erat. In quis lorem aliquet turpis varius placerat. In
                euismod lorem turpis
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default Reglamento;
