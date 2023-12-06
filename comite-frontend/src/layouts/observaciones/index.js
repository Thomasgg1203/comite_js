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
import { crearObservaciones } from "api/observaciones"; // Asegúrate de tener el método correspondiente en tu archivo de API
import { allAprendices } from "api/observaciones";
import { useNavigate } from "react-router-dom";

const ObservacionesForm = () => {
  const { authData } = useAuth();
  const [aprendices, setAprendices] = useState([]);
  const navigate = useNavigate();

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
    detalles: "",
    documento_aprendiz: "",
  };

  const validationSchema = Yup.object({
    detalles: Yup.string().required("Los detalles son requeridos"),
    documento_aprendiz: Yup.string().required("Debe seleccionar un aprendiz"),
  });

  const handleSubmit = async (values) => {
    try {
      // Envía las observaciones a la API
      const response = await crearObservaciones(authData.token, values);
      alert("Comentario enviado con éxito");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al enviar las observaciones:", error);
      // Aquí puedes manejar errores de la API
      alert("Error al enviar los comentarios");
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Container component="main" maxWidth="xs">
        <MDBox p={3} borderRadius="lg" boxShadow="3">
          <Typography component="h1" variant="h5">
            Comentarios de la presentación
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form style={{ width: "100%", marginTop: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={MDInput}
                      multiline
                      rows={5}
                      fullWidth
                      label="Comentario *"
                      name="detalles"
                      required
                    />
                    <ErrorMessage
                      name="detalles"
                      component="div"
                      style={{ color: "red", fontSize: "smaller" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MDInput
                      fullWidth
                      label="Seleccionar Aprendiz"
                      name="documento_aprendiz"
                      required
                      as="select"
                      value={values.documento_aprendiz}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{
                        borderColor: "#ccc",
                        borderRadius: "4px",
                        padding: "10px",
                        height: "auto", // Ajusta la altura según el contenido
                      }}
                    >
                      <option value="" label="Seleccionar Aprendiz" />
                      {aprendices.map((aprendiz) => (
                        <option key={aprendiz.documento} value={aprendiz.documento}>
                          {`${aprendiz.nombres} ${aprendiz.apellidos}`}
                        </option>
                      ))}
                    </MDInput>
                    <ErrorMessage
                      name="documento_aprendiz"
                      component="div"
                      style={{ color: "red", fontSize: "smaller" }}
                    />
                  </Grid>
                </Grid>
                <MDBox mt={3}>
                  <Button type="submit" fullWidth>
                    Enviar Observaciones
                  </Button>
                </MDBox>
              </Form>
            )}
          </Formik>
        </MDBox>
      </Container>
      <Footer />
    </DashboardLayout>
  );
};

export default ObservacionesForm;
