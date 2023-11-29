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
import { reglamento } from "context";

const Reglamento = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const dataAll = async () => {
      //Porque es lo que se esta respondiendo el backend
      const responts = await reglamento();
      console.log(responts);
      setDatos(responts);
    };
    dataAll();
  }, [reglamento]);

  //si capitulos no ejecuta
  if (!datos || datos.length === 0) {
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
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <CircularProgress color="primary" />
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
            <MDBox
              mx="auto"
              mt={-3}
              py={3}
              px={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <MDTypography variant="h3">Reglamento Del Aprendiz</MDTypography>
            </MDBox>
            {datos.map((item) => (
              <MDBox key={item.capitulo._id} mx={2} mt={-3} py={3} px={2} borderRadius="lg">
                <br />
                <MDTypography variant="h5">
                  {item.capitulo.capitulo} - {item.capitulo.titulo}
                </MDTypography>
                <br />
                {item.articulos.map((articulo) => (
                  <div key={articulo._id}>
                    <MDTypography variant="h6">
                      {articulo.articulo} {articulo.titulo}
                    </MDTypography>
                    <MDTypography variant="body2">{articulo.descripcion}</MDTypography>
                    {/* <MDTypography variant="body2" color="black">
                      <b>Parágrafo:</b> {articulo.paragrafo.descripcion}
                    </MDTypography> */}
                    {/* Aqui  */}
                  </div>
                ))}
              </MDBox>
            ))}
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};

export default Reglamento;
