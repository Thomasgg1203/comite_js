// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// Overview page components
import Header from "layouts/profile/components/Header";
//traer perfil
import { useAuth } from "context";

function Overview() {
  const { authData } = useAuth();
  // Utiliza authData.user u otra propiedad según la estructura de tu objeto de autenticación
  const profileInfo = authData?.user;

  const getRoleDescription = (role) => {
    switch (role) {
      case "aprendiz":
        return "¡Hola! Soy un aprendiz. Estoy aquí para aprender y crecer.";
      case "gestor-comite":
        return "¡Hola! Soy un gestor de comité. Mi objetivo es coordinar y liderar el comité.";
      case "administrador":
        return "¡Hola! Soy un administrador. Tengo acceso a funciones administrativas.";
      case "gestor-grupo":
        return "¡Hola! Soy un gestor de grupo. Mi tarea principal es gestionar y apoyar al grupo.";
      default:
        return "¡Hola! Soy un usuario con un rol no especificado.";
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} xl={12} sx={12}>
              <ProfileInfoCard
                title="Información Perfil"
                description={getRoleDescription(
                  profileInfo.roles && profileInfo.roles.length > 0 ? profileInfo.roles[0] : ""
                )}
                info={{
                  Nombre: profileInfo.nombres,
                  Apellidos: profileInfo.apellidos,
                  Telefono: profileInfo.telefono,
                  Direccion: profileInfo.direccion,
                  Email: profileInfo.correo,
                  Documento: profileInfo.documento,
                  Rol:
                    profileInfo.roles && profileInfo.roles.length > 0
                      ? profileInfo.roles[0]
                      : "Sin rol",
                }}
                // social={[
                //   {
                //     link: "https://www.facebook.com/CreativeTim/",
                //     icon: <FacebookIcon />,
                //     color: "facebook",
                //   },
                //   {
                //     link: "https://twitter.com/creativetim",
                //     icon: <TwitterIcon />,
                //     color: "twitter",
                //   },
                //   {
                //     link: "https://www.instagram.com/creativetimofficial/",
                //     icon: <InstagramIcon />,
                //     color: "instagram",
                //   },
                // ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
