//importacion de react
import { useEffect, useState } from "react";
//import material ui
import { CircularProgress } from "@material-ui/core";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
//importacion del contexto
import { capitulosData } from "context";
import MDBox from "components/MDBox";

const Capitulos = () => {
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

  // Verificar si capitulos es un array vacío o nulo
  if (!capitulos || capitulos.length === 0) {
    return (
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox>
          <CircularProgress
            color="primary"
            sx={{
              "--CircularProgress-size": "93px",
            }}
          />
        </MDBox>
        <Footer />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>{capitulos[0].titulo}</div>
      <Footer />
    </DashboardLayout>
  );
};

export default Capitulos;
