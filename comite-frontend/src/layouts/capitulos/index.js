// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

//importacion del metodo get
import { GetAllCapitulos } from "api/capitulo";

const Capitulos = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>
        <GetAllCapitulos />
      </div>
      <Footer />
    </DashboardLayout>
  );
};

export default Capitulos;
