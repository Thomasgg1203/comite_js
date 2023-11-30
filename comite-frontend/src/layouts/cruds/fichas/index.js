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
import { allfichas, guardarFicha, eliminarFicha } from "api/fichas";

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
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Fichas = () => {
  const { authData } = useAuth();

  const [fichaData, setFichaData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await allfichas(authData.token);
        if (res && res.data) {
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

  // Define el esquema de validación con Yup
  const validationSchema = Yup.object({
    numero_ficha: Yup.number()
      .typeError("El número de ficha debe ser un número")
      .required("El número de ficha es requerido")
      .integer("El número de ficha debe ser un número entero")
      .positive("El número de ficha debe ser un número positivo")
      .max(99999999, "El número de ficha no puede tener más de 10 dígitos"),
    jornada: Yup.string().required("La jornada es requerida"),
    fecha_inicio_productiva: Yup.date().required("La fecha de inicio productiva es requerida"),
    fecha_fin_productiva: Yup.date()
      .required("La fecha de fin productiva es requerida")
      .test(
        "is-after",
        "La fecha de fin productiva debe ser después de la fecha de inicio",
        function (value) {
          const { fecha_inicio_productiva } = this.parent; // Obtiene el valor de fecha_inicio_productiva
          return (
            !fecha_inicio_productiva ||
            !value ||
            new Date(value) > new Date(fecha_inicio_productiva)
          );
        }
      ),
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
        modalidad: "presencial",
        fecha_inicio_productiva: "2000-11-23",
        fecha_fin_productiva: "2000-11-23",
        fecha_inicio_lectiva: "2000-11-23",
        fecha_fin_lectiva: "2000-11-23",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          // Llama a la función para guardar la ficha
          await guardarFicha(authData.token, values);
          // Aquí puedes realizar otras acciones después de guardar exitosamente
          // Recarga la página después de guardar exitosamente
          alert("Se creo con exito");
          window.location.reload();
        } catch (error) {
          alert("No se pudo crear");
          console.log("Error:", error);
          // Maneja el error, por ejemplo, mostrando un mensaje al usuario
        }
      },
    });
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Crear Ficha</DialogTitle>
        <DialogContent>
          <MDBox component="form" role="form" onSubmit={formik.handleSubmit} mb={2}>
            {/* Campos de entrada del formulario */}
            <MDInput
              label="Número de Ficha"
              fullWidth
              id="numero_ficha"
              textGradient
              name="numero_ficha"
              variant="standard"
              value={formik.values.numero_ficha}
              onChange={formik.handleChange}
              error={formik.touched.numero_ficha && Boolean(formik.errors.numero_ficha)}
              success={formik.touched.numero_ficha && Boolean(!formik.errors.numero_ficha)}
            />
            {formik.touched.numero_ficha && formik.errors.numero_ficha && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.numero_ficha}
              </MDTypography>
            )}
            {/* Parte de select, para la jornada */}
            <FormControl
              fullWidth
              variant="standard"
              error={formik.touched.jornada && Boolean(formik.errors.jornada)}
              success={formik.touched.jornada && Boolean(!formik.errors.jornada)}
              margin="normal"
            >
              <InputLabel id="jornada-label">Jornada</InputLabel>
              <Select
                labelId="jornada-label"
                id="jornada"
                name="jornada"
                variant="standard"
                value={formik.values.jornada}
                onChange={formik.handleChange}
                MenuProps={{
                  anchorOrigin: { vertical: "bottom", horizontal: "center" },
                  transformOrigin: { vertical: "top", horizontal: "center" },
                }}
              >
                <MenuItem value="mañana">Mañana</MenuItem>
                <MenuItem value="tarde">Tarde</MenuItem>
                <MenuItem value="noche">Noche</MenuItem>
                <MenuItem value="mixta">Mixta</MenuItem>
              </Select>
            </FormControl>
            {formik.touched.jornada && formik.errors.jornada && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.jornada}
              </MDTypography>
            )}
            {/* Parte de select, para la jornada */}
            {/* Selector de fecha para fecha_inicio_lectiva */}
            <MDInput
              mt={2}
              type="date"
              fullWidth
              variant="standard"
              label="Fecha Inicio Lectiva"
              id="fecha_inicio_lectiva"
              name="fecha_inicio_lectiva"
              value={formik.values.fecha_inicio_lectiva}
              onChange={formik.handleChange}
              error={
                formik.touched.fecha_inicio_lectiva && Boolean(formik.errors.fecha_inicio_lectiva)
              }
              success={
                formik.touched.fecha_inicio_lectiva && Boolean(!formik.errors.fecha_inicio_lectiva)
              }
              // Puedes agregar cualquier otra prop necesaria
            />
            {formik.touched.fecha_inicio_lectiva && formik.errors.fecha_inicio_lectiva && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.fecha_inicio_lectiva}
              </MDTypography>
            )}
            {/* Selector de fecha para fecha_fin_lectiva */}
            <MDInput
              my={5}
              type="date"
              fullWidth
              variant="standard"
              label="Fecha Fin Lectiva"
              id="fecha_fin_lectiva"
              name="fecha_fin_lectiva"
              value={formik.values.fecha_fin_lectiva}
              onChange={formik.handleChange}
              error={formik.touched.fecha_fin_lectiva && Boolean(formik.errors.fecha_fin_lectiva)}
              success={
                formik.touched.fecha_fin_lectiva && Boolean(!formik.errors.fecha_fin_lectiva)
              }
              // Puedes agregar cualquier otra prop necesaria
            />
            {formik.touched.fecha_fin_lectiva && formik.errors.fecha_fin_lectiva && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.fecha_fin_lectiva}
              </MDTypography>
            )}
            {/* Fecha productiva */}
            {/* Selector de fecha para fecha_inicio_productiva */}
            <MDInput
              mt={2}
              type="date"
              fullWidth
              variant="standard"
              label="Fecha Inicio Productiva"
              id="fecha_inicio_productiva"
              name="fecha_inicio_productiva"
              value={formik.values.fecha_inicio_productiva}
              onChange={formik.handleChange}
              error={
                formik.touched.fecha_inicio_productiva &&
                Boolean(formik.errors.fecha_inicio_productiva)
              }
              success={
                formik.touched.fecha_inicio_productiva &&
                Boolean(!formik.errors.fecha_inicio_productiva)
              }
              // Puedes agregar cualquier otra prop necesaria
            />
            {formik.touched.fecha_inicio_productiva && formik.errors.fecha_inicio_productiva && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.fecha_inicio_productiva}
              </MDTypography>
            )}
            {/* Selector de fecha para fin_productiva*/}
            <MDInput
              my={5}
              type="date"
              fullWidth
              variant="standard"
              label="Fecha Fin Productiva"
              id="fecha_fin_productiva"
              name="fecha_fin_productiva"
              value={formik.values.fecha_fin_productiva}
              onChange={formik.handleChange}
              error={
                formik.touched.fecha_fin_productiva && Boolean(formik.errors.fecha_fin_productiva)
              }
              success={
                formik.touched.fecha_fin_productiva && Boolean(!formik.errors.fecha_fin_productiva)
              }
              // Puedes agregar cualquier otra prop necesaria
            />
            {formik.touched.fecha_fin_productiva && formik.errors.fecha_fin_productiva && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.fecha_fin_productiva}
              </MDTypography>
            )}
            {/* Fin de fecha productiva */}
            <Button variant="text" color="primary" type="submit" mt={2} textGradient>
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
    // Validar si el id es válido
    if (!id || typeof id !== "string") {
      console.error("El ID proporcionado no es válido:", id);
      // Puedes mostrar un mensaje de error al usuario si lo deseas
      return;
    }

    // Lógica para eliminar el elemento con el id proporcionado
    console.log("Eliminar elemento con id:", id);

    // Llama a la función para eliminar de la API
    eliminarFicha(authData.token, id);
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
      <Button variant="outlined" color="primary" onClick={handleOpenModal} textGradient>
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
              Cell: ({ row }) => (
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

Fichas.propTypes = {
  // ... Otras propTypes que puedas tener
  row: PropTypes.shape({
    original: PropTypes.shape({
      _id: PropTypes.string.isRequired, // Asegúrate de que el tipo sea correcto
      // ... Otras propiedades que puedas tener en tus objetos de datos
    }).isRequired,
  }).isRequired,
};

export default Fichas;
