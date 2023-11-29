// Material Dashboard - importacion de tablas
import DataTable from "examples/Tables/DataTable";
// Material UI Botones
import Button from "@material-ui/core/Button";
// Importaciones de React
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Componente context
import { useAuth } from "context";
import { allProgramas, guardarPrograma } from "api/programas"; // Asegúrate de tener la función adecuada para guardar programas

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import * as Yup from "yup";
import { useFormik } from "formik";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Programas = () => {
  const { authData } = useAuth();

  const [programaData, setProgramaData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await allProgramas(authData.token);
        if (res && res.data) {
          setProgramaData(res.data);
        } else {
          console.error("La respuesta de la API no tiene la estructura esperada:", res);
        }
      } catch (error) {
        console.error(`Error al obtener datos de programas: ${error.message}`);
      }
    };
    fetchData();
  }, [authData.token]);

  // Validaciones de programa
  const validationSchema = Yup.object({
    codigo: Yup.string().required("El código es requerido"),
    nombre: Yup.string().required("El nombre es requerido"),
    nivel_formacion: Yup.string().required("El nivel de formación es requerido"),
  });

  // Componente para el formulario de crear programa
  const MyModal = ({ open, handleClose }) => {
    const formik = useFormik({
      initialValues: {
        codigo: "",
        nombre: "",
        nivel_formacion: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          await guardarPrograma(authData.token, values);
          alert("Se creó el programa con éxito");
          window.location.reload();
        } catch (error) {
          alert("No se pudo crear el programa");
          console.log("Error:", error);
        }
      },
    });

    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Crear Programa</DialogTitle>
        <DialogContent>
          <MDBox component="form" role="form" onSubmit={formik.handleSubmit} mb={2}>
            <MDInput
              label="Código"
              fullWidth
              id="codigo"
              name="codigo"
              variant="standard"
              value={formik.values.codigo}
              onChange={formik.handleChange}
              error={formik.touched.codigo && Boolean(formik.errors.codigo)}
              success={formik.touched.codigo && Boolean(!formik.errors.codigo)}
            />
            {formik.touched.codigo && formik.errors.codigo && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.codigo}
              </MDTypography>
            )}

            <MDInput
              mt={2}
              label="Nombre"
              fullWidth
              id="nombre"
              name="nombre"
              variant="standard"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              error={formik.touched.nombre && Boolean(formik.errors.nombre)}
              success={formik.touched.nombre && Boolean(!formik.errors.nombre)}
            />
            {formik.touched.nombre && formik.errors.nombre && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.nombre}
              </MDTypography>
            )}

            <FormControl
              fullWidth
              variant="standard"
              error={formik.touched.nivel_formacion && Boolean(formik.errors.nivel_formacion)}
              success={formik.touched.nivel_formacion && Boolean(!formik.errors.nivel_formacion)}
              margin="normal"
            >
              <InputLabel id="nivel_formacion-label">Nivel de Formación</InputLabel>
              <Select
                labelId="nivel_formacion-label"
                id="nivel_formacion"
                name="nivel_formacion"
                value={formik.values.nivel_formacion}
                onChange={formik.handleChange}
                MenuProps={{
                  anchorOrigin: { vertical: "bottom", horizontal: "center" },
                  transformOrigin: { vertical: "top", horizontal: "center" },
                }}
              >
                <MenuItem value="tecnico">Técnico</MenuItem>
                <MenuItem value="tecnologo">Tecnólogo</MenuItem>
                {/* Agrega más opciones según tu necesidad */}
              </Select>
            </FormControl>
            {formik.touched.nivel_formacion && formik.errors.nivel_formacion && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.nivel_formacion}
              </MDTypography>
            )}

            <Button variant="text" color="primary" type="submit" mt={2} textGradient>
              Crear Programa
            </Button>
          </MDBox>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  MyModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  // Función para manejar el evento de editar
  const handleEditar = (id) => {
    console.log("Editar programa con id:", id);
  };

  // Función para manejar el evento de eliminar
  const handleEliminar = (id) => {
    console.log("Eliminar programa con id:", id);
  };

  // Función para manejar el evento de mostrar
  const handleMostrar = (id) => {
    console.log("Mostrar programa con id:", id);
  };

  // Parte del modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* Botón para abrir el modal */}
      <Button variant="outlined" color="primary" onClick={handleOpenModal} textGradient>
        Crear Programa
      </Button>
      <br />
      <br />
      {/* Llamada al componente del modal */}
      <MyModal open={isModalOpen} handleClose={handleCloseModal} />
      {/* Parte de la tabla */}
      <DataTable
        table={{
          columns: [
            { Header: "Código", accessor: "codigo", width: "16%" },
            { Header: "Nombre", accessor: "nombre", width: "16%" },
            { Header: "Nivel de Formación", accessor: "nivel_formacion", width: "16%" },
            // Agrega más columnas según tu necesidad
            {
              Header: "Acciones",
              accessor: "acciones",
              width: "26%",
              Cell: ({ row }) => (
                <div>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => handleEditar(row.original.id)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={() => handleEliminar(row.original.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              ),
            },
          ],
          rows: programaData,
        }}
      />
      {/* Fin de parte de la tabla */}
      <br />
      <Footer />
    </DashboardLayout>
  );
};

Programas.propTypes = {
  // ... Otras propTypes que puedas tener
  row: PropTypes.shape({
    original: PropTypes.shape({
      id: PropTypes.string.isRequired, // Asegúrate de que el tipo sea correcto
      // ... Otras propiedades que puedas tener en tus objetos de datos
    }).isRequired,
  }).isRequired,
};

export default Programas;
