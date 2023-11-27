// Material Dashboard - importacion de tablas
import DataTable from "examples/Tables/DataTable";
//Material ui Botones
import Button from "@material-ui/core/Button";
//importacion de react
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

//componente context
import { useAuth } from "context";
import { allfichas } from "api/fichas";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
//uso del yup para validar
import * as Yup from "yup";
import { useFormik } from "formik";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

const Fichas = () => {
  const { authData } = useAuth();

  const [fichaData, setFichaData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await allfichas(authData.token);
        if (res && res.data) {
          // Asegúrate de que res y res.data estén definidos
          setFichaData(res.data);
          console.log(fichaData);
        } else {
          console.error("La respuesta de la API no tiene la estructura esperada:", res);
        }
      } catch (error) {
        console.error(`Error al obtener datos de usuarios: ${error.message}`);
      }
    };
    fetchData();
  }, [authData.token]);

  //validaciones de ficha
  // Define el esquema de validación con Yup
  const validationSchema = Yup.object({
    numero_ficha: Yup.string().required("El número de ficha es requerido"),
    jornada: Yup.string().required("La jornada es requerida"),
    modalidad: Yup.string().required("La modalidad es requerida"),
    fecha_inicio_productiva: Yup.date().required("La fecha de inicio productiva es requerida"),
    fecha_fin_productiva: Yup.date().required("La fecha de fin productiva es requerida"),
    fecha_inicio_lectiva: Yup.date().required("La fecha de inicio lectiva es requerida"),
    fecha_fin_lectiva: Yup.date().required("La fecha de fin lectiva es requerida"),
  });
  /**
   * Componente para el formulario de crear ficha
   */
  const MyModal = ({ open, handleClose }) => {
    const formik = useFormik({
      initialValues: {
        numero_ficha: "",
        jornada: "",
        modalidad: "",
        fecha_inicio_productiva: "",
        fecha_fin_productiva: "",
        fecha_inicio_lectiva: "",
        fecha_fin_lectiva: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        // Aquí puedes realizar la lógica para enviar los datos del formulario
        console.log("Valores del formulario:", values);
        // También puedes llamar a la función para manejar el evento de crear aquí
      },
    });
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Crear Ficha</DialogTitle>
        <DialogContent>
          <MDBox component="form" role="form" onSubmit={formik.handleSubmit} my={2} mx={1}>
            {/* Campos de entrada del formulario */}
            <MDInput
              label="Número de Ficha"
              fullWidth
              id="numero_ficha"
              name="numero_ficha"
              value={formik.values.numero_ficha}
              onChange={formik.handleChange}
              error={formik.touched.numero_ficha && Boolean(formik.errors.numero_ficha)}
              helperText={formik.touched.numero_ficha && formik.errors.numero_ficha}
            />
            {formik.touched.numero_ficha && formik.errors.numero_ficha && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.numero_ficha}
              </MDTypography>
            )}
            <MDInput
              label="Jornada"
              fullWidth
              id="jornada"
              name="jornada"
              value={formik.values.jornada}
              onChange={formik.handleChange}
              error={formik.touched.jornada && Boolean(formik.errors.jornada)}
              helperText={formik.touched.jornada && formik.errors.jornada}
              margin="normal"
            />
            {/* Agrega más campos de entrada según sea necesario */}
            {/* ... */}

            {/* Botón para enviar el formulario */}
            <Button variant="contained" color="primary" type="submit">
              Crear Ficha
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
    // Lógica para editar el elemento con el id proporcionado
    console.log("Editar elemento con id:", id);
  };

  // Función para manejar el evento de eliminar
  const handleEliminar = (id) => {
    // Lógica para eliminar el elemento con el id proporcionado
    console.log("Eliminar elemento con id:", id);
  };

  // Función para manejar el evento de mostrar
  const handleMostrar = (id) => {
    // Lógica para mostrar el elemento con el id proporcionado
    console.log("Mostrar elemento con id:", id);
  };

  //parte del modal
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
      <Button variant="outlined" color="primary" onClick={handleOpenModal}>
        Crear Ficha
      </Button>
      <br />
      <br />
      {/* Llamada al componente del modal */}
      <MyModal open={isModalOpen} handleClose={handleCloseModal} />
      {/* Parte de la tabla */}
      <DataTable
        table={{
          columns: [
            { Header: "Numero Ficha", accessor: "numero_ficha", width: "16%" },
            { Header: "Jornada", accessor: "jornada", width: "16%" },
            { Header: "Modalidad", accessor: "modalidad", width: "16%" },
            {
              Header: "Acciones",
              accessor: "acciones",
              width: "26%",
              Cell: ({}) => (
                <div>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => handleEditar(row.original._id)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={() => handleEliminar(row.original._id)}
                  >
                    Eliminar
                  </Button>
                  <Button
                    variant="text"
                    color="default"
                    onClick={() => handleMostrar(row.original._id)}
                  >
                    Mostrar
                  </Button>
                </div>
              ),
            },
          ],
          rows: fichaData,
        }}
      />
      {/* Fin de parte de la tabla */}
      <br />
      <Footer />
    </DashboardLayout>
  );
};

export default Fichas;
