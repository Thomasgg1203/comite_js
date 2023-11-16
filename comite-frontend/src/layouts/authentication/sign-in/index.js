//Componente de react
import { useContext, useState } from "react";
//uso del formik, para la parte logica
import { useFormik } from "formik";
//uso del Yup para la parte de validacion
import * as Yup from "yup";
//parte de url
import { useNavigate } from "react-router-dom";
//importacion de axios
import axios from "axios";
//importacion del contexto
import { AuthContext } from "context";
// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
// import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Parte de la imagen del fondo del login
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

/**
 * Parte de validación con yup, donde podemos poner cualquier mensaje
 */
const validationSchema = Yup.object({
  documento: Yup.string()
    .required("El documento es requerido")
    .test("is-number", "Debe ser un número", (value) => /^\d+$/.test(value)),
  contrasenia: Yup.string().required("La contraseña es requerida"),
});

function Basic() {
  const { setAuthData } = useContext(AuthContext);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  //uso del formik
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      documento: "",
      contrasenia: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        console.log("Enviando solicitud con datos:", values);
        const response = await axios.post("http://localhost:4000/auths/ingresar", values);
        console.log("Respuesta del servidor:", response);

        if (response.status === 201) {
          const { token, user } = response.data;
          setAuthData({
            token,
            user,
          });
          console.log("Ingreso exitoso", response.data);
          navigate("/dashboard");
        } else if (response.status === 400) {
          console.log("Error con los datos", response.data);
        } else {
          console.error("Error al ingresar:", response.data.message);
        }
      } catch (error) {
        console.error("Error de red:", error.message);
      }
    },
  });

  //retorno de la parte grafica
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="success"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Ingresar
          </MDTypography>
          {/*----------------------------------------------------------------------------------------
           Parte de iconos donde puede ir un pequeñito icono del sena o del logo que le vamos a colocar 
          -------------------------------------------------------------------------------------------*/}
          {/* <Grid container spacing={3} justifyContent="center" sx={{ mt: 2, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid> */}
          {/*----------------------------------------------------------------------------------------
           Parte de iconos donde puede ir un pequeñito icono del sena o del logo que le vamos a colocar 
          -------------------------------------------------------------------------------------------*/}
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={formik.handleSubmit}>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Documento"
                fullWidth
                id="documento"
                name="documento"
                value={formik.values.documento}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.documento && Boolean(formik.errors.documento)}
              />
              {/* Validacion en el campo documento */}
              {formik.touched.documento && formik.errors.documento && (
                <div style={{ color: "red" }}>{formik.errors.documento}</div>
              )}
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Contraseña"
                fullWidth
                id="contrasenia"
                name="contrasenia"
                value={formik.values.contrasenia}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.contrasenia && Boolean(formik.errors.contrasenia)}
              />
              {/* Validacion en el campo contraseña(password) */}
              {formik.touched.contrasenia && formik.errors.contrasenia && (
                <div style={{ color: "red" }}>{formik.errors.contrasenia}</div>
              )}
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Acuérdate de mí
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              {/* PArte del boton de ingreso */}
              <MDButton variant="gradient" color="success" fullWidth type="submit">
                Ingresar
              </MDButton>
              {/* Fin de parte del boton de ingreso */}
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
