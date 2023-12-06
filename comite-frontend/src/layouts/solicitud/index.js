import { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Grid, Container, Typography } from "@mui/material";
import { useAuth } from "context";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import { crearSolicitud } from "api/solicitud";
import { allAprendices } from "api/usuario";

const SolicitudForm = () => {
  const { authData } = useAuth();
  const [aprendices, setAprendices] = useState([]);

  useEffect(() => {
    const fetchAprendices = async () => {
      try {
        const response = await allAprendices(authData.token);
        setAprendices(response);
      } catch (error) {
        console.error("Error al obtener aprendices:", error);
        // Puedes manejar el error según tus necesidades
      }
    };

    fetchAprendices();
  }, [authData.token]);

  const initialValues = {
    lugar: "",
    asunto: "",
    pruebas: "",
    creadoEn: "",
    aprendiz: "", // Añade el campo aprendiz a tus valores iniciales
  };

  const validationSchema = Yup.object({
    lugar: Yup.string().required("El lugar es requerido"),
    asunto: Yup.string().required("El asunto es requerido"),
    creadoEn: Yup.string().required("La fecha de creación es requerida"),
  });

  const handleSubmit = async (values) => {
    try {
      // Envía la solicitud a la API
      const response = await crearSolicitud(authData.token, values);
      alert("Solicitud enviada con éxito");
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      // Aquí puedes manejar errores de la API
      alert("Error al enviar la solicitud");
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Container component="main" maxWidth="xs">
        <MDBox p={3} borderRadius="lg" boxShadow="3">
          <Typography component="h1" variant="h5">
            Formulario de Solicitud
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form style={{ width: "100%", marginTop: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field as={MDInput} fullWidth label="Lugar" name="lugar" required />
                  <ErrorMessage
                    name="lugar"
                    component="div"
                    style={{ color: "red", fontSize: "smaller" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={MDInput}
                    multiline
                    rows={5}
                    fullWidth
                    label="Asunto"
                    name="asunto"
                    required
                  />
                  <ErrorMessage
                    name="asunto"
                    component="div"
                    style={{ color: "red", fontSize: "smaller" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MDInput
                    fullWidth
                    label="Seleccionar Aprendiz"
                    name="aprendiz"
                    required
                    as="select" // Use as="select" para indicar que es un elemento de tipo select
                    sx={{ borderColor: "#ccc", borderRadius: "4px", padding: "10px" }}
                  >
                    <option value="" label="Seleccionar Aprendiz" />
                    {aprendices.map((aprendiz) => (
                      <option key={aprendiz.id} value={aprendiz.id}>
                        {`${aprendiz.nombres} ${aprendiz.apellidos}`}
                      </option>
                    ))}
                  </MDInput>
                  <ErrorMessage
                    name="aprendiz"
                    component="div"
                    style={{ color: "red", fontSize: "smaller" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={MDInput}
                    fullWidth
                    label="Creado En"
                    name="creadoEn"
                    type="datetime-local"
                    required
                  />
                  <ErrorMessage
                    name="creadoEn"
                    component="div"
                    style={{ color: "red", fontSize: "smaller" }}
                  />
                </Grid>
              </Grid>
              <MDBox mt={3}>
                <Button type="submit" fullWidth variant="contained">
                  Enviar Solicitud
                </Button>
              </MDBox>
            </Form>
          </Formik>
        </MDBox>
      </Container>
      <Footer />
    </DashboardLayout>
  );
};

export default SolicitudForm;
