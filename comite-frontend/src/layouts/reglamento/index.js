//libreria de react
import { useState, useEffect } from "react";
//recargar pagina componente de Material ui
import { CircularProgress } from "@material-ui/core";
// Componentes de ubicacion
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
//Parte de la funcionalidad del margen
import Grid from "@mui/material/Grid";
//Parte de tipografia
import MDTypography from "components/MDTypography";
//contexto
import { capitulosData } from "context";

const Reglamento = () => {
  const [capitulos, setCapitulos] = useState([]);

  useEffect(() => {
    const dataAll = async () => {
      //Porque es lo que se esta respondiendo el backend
      const responts = await capitulosData();
      console.log(responts.data);
      setCapitulos(responts.data);
    };
    dataAll();
  }, [capitulosData]);

  //si capitulos no ejecuta
  if (!capitulos || capitulos.length === 0) {
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <MDBox
                mx="auto"
                mt={-3}
                py={3}
                px={2}
                bgColor="white"
                borderRadius="lg"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <CircularProgress
                  color="inherit"
                  sx={{
                    "--CircularProgress-size": "150px", //no aumenta la monda, porque es beta
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </DashboardLayout>
    );
  }

  //Si todo esta bien envia esto
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
                {`${capitulos[0].capitulo}, ${capitulos[0].titulo}`}
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
