import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Grid, Container, Typography } from "@mui/material";
import { useAuth } from "context";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

const SolicitudForm = () => {
  const { authData } = useAuth();

  const initialValues = {
    lugar: "",
    asunto: "",
    pruebas: "",
    creadoEn: "",
  };

  const validationSchema = Yup.object({
    lugar: Yup.string().required("El lugar es requerido"),
    asunto: Yup.string().required("El asunto es requerido"),
    pruebas: Yup.string().required("Las pruebas son requeridas"),
    creadoEn: Yup.string().required("La fecha de creación es requerida"),
  });

  const handleSubmit = (values) => {
    // Puedes manejar la lógica para enviar la solicitud con los datos aquí
    console.log("Datos de la solicitud:", values);
    // También puedes enviar estos datos al servidor con una función como guardarSolicitud
    // guardarSolicitud(authData.token, values);
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
                  <ErrorMessage name="lugar" component="div" />
                </Grid>
                <Grid item xs={12}>
                  <Field as={MDInput} fullWidth label="Asunto" name="asunto" required />
                  <ErrorMessage name="asunto" component="div" />
                </Grid>
                <Grid item xs={12}>
                  <Field as={MDInput} fullWidth label="Pruebas" name="pruebas" required />
                  <ErrorMessage name="pruebas" component="div" />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={MDInput}
                    fullWidth
                    label="Creado En"
                    name="creadoEn"
                    type="datetime-local" // Puedes ajustar según tus necesidades
                    required
                  />
                  <ErrorMessage name="creadoEn" component="div" />
                </Grid>
              </Grid>
              <MDBox mt={3}>
                <Button type="submit" fullWidth variant="contained" color="success">
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
