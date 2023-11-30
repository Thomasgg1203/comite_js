import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DataTable from "examples/Tables/DataTable";
import Button from "@material-ui/core/Button";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useAuth } from "context";
import { allUsers, guardarUsuario, eliminarUsuario } from "api/usuario";
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

const Usuarios = () => {
  const { authData } = useAuth();
  const [userData, setUserData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showAdditionalField, setShowAdditionalField] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await allUsers(authData.token);
        if (res && res.data) {
          setUserData(res.data);
        } else {
          console.error("La respuesta de la API no tiene la estructura esperada:", res);
        }
      } catch (error) {
        console.error(`Error al obtener datos de usuarios: ${error.message}`);
      }
    };
    fetchData();
  }, [authData.token]);

  const validationSchema = Yup.object({
    nombres: Yup.string().required("El nombre es requerido"),
    apellidos: Yup.string().required("Los apellidos son requeridos"),
    documento: Yup.string().required("El documento es requerido"),
    correo: Yup.string().email("Correo electrónico inválido").required("El correo es requerido"),
    roles: Yup.array()
      .min(1, "Selecciona al menos un rol")
      .required("Los roles son requeridos")
      .max(1, "Solo puedes seleccionar un rol"),
    fecha_nacimiento: Yup.date().required("La fecha de nacimiento es requerida"),
    direccion: Yup.string().required("La dirección es requerida"),
    telefono: Yup.string()
      .matches(/^\d{10}$/, "El teléfono debe tener 10 dígitos")
      .required("El teléfono es requerido"),
    numero_ficha: Yup.string().when(["roles"], (roles, schema) => {
      return roles && roles.includes("aprendiz")
        ? schema.required("Número de ficha es requerido cuando el rol es 'aprendiz'")
        : schema;
    }),
  });

  const MyModal = ({ open, handleClose }) => {
    const handleRolesChange = (event) => {
      const selectedRoles = event.target.value;
      setShowAdditionalField(selectedRoles.includes("aprendiz"));
      formik.setFieldValue("roles", selectedRoles);
    };
    const formik = useFormik({
      initialValues: {
        nombres: "",
        apellidos: "",
        documento: "",
        contrasenia: "",
        correo: "",
        fecha_nacimiento: "",
        direccion: "",
        telefono: "",
        roles: [],
        numero_ficha: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          if (!values.contrasenia && values.documento) {
            // Si el campo contrasenia está vacío y el campo documento tiene un valor,
            // asigna el valor del campo documento al campo contrasenia
            values.contrasenia = values.documento;
          }
          if (selectedUserId) {
            // Si hay un usuario seleccionado, realiza la actualización
            // Lógica para actualizar el usuario con el ID seleccionado
            console.log("Actualizar usuario con ID:", selectedUserId);
          } else {
            // Si no hay un usuario seleccionado, realiza la creación
            await guardarUsuario(authData.token, values);
          }
          alert("Operación exitosa");
          handleClose();
          window.location.reload();
        } catch (error) {
          alert("Error en la operación");
          console.error("Error:", error);
        }
      },
    });

    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedUserId ? "Editar Usuario" : "Crear Usuario"}</DialogTitle>
        <DialogContent>
          <MDBox component="form" role="form" onSubmit={formik.handleSubmit} mb={2}>
            <MDInput
              label="Nombres"
              fullWidth
              id="nombres"
              variant="standard"
              value={formik.values.nombres}
              onChange={formik.handleChange}
              error={formik.touched.nombres && Boolean(formik.errors.nombres)}
              success={formik.touched.nombres && Boolean(!formik.errors.nombres)}
            />
            {formik.touched.nombres && formik.errors.nombres && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.nombres}
              </MDTypography>
            )}
            <MDInput
              label="Apellidos"
              fullWidth
              id="apellidos"
              variant="standard"
              value={formik.values.apellidos}
              onChange={formik.handleChange}
              error={formik.touched.apellidos && Boolean(formik.errors.apellidos)}
              success={formik.touched.apellidos && Boolean(!formik.errors.apellidos)}
            />
            {formik.touched.apellidos && formik.errors.apellidos && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.apellidos}
              </MDTypography>
            )}
            <MDInput
              label="Documento"
              fullWidth
              id="documento"
              variant="standard"
              value={formik.values.documento}
              onChange={formik.handleChange}
              error={formik.touched.documento && Boolean(formik.errors.documento)}
              success={formik.touched.documento && Boolean(!formik.errors.documento)}
            />
            {formik.touched.documento && formik.errors.documento && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.documento}
              </MDTypography>
            )}
            <MDInput
              mt={2}
              type="text"
              fullWidth
              label="Dirección"
              id="direccion"
              name="direccion"
              variant="standard"
              value={formik.values.direccion}
              onChange={(event) => formik.handleChange(event)}
              error={formik.touched.direccion && Boolean(formik.errors.direccion)}
              success={formik.touched.direccion && !formik.errors.direccion}
            />

            {formik.touched.direccion && formik.errors.direccion && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.direccion}
              </MDTypography>
            )}
            <MDInput
              mt={2}
              type="tel"
              fullWidth
              label="Teléfono"
              id="telefono"
              name="telefono"
              variant="standard"
              value={formik.values.telefono}
              onChange={(event) => formik.handleChange(event)}
              error={formik.touched.telefono && Boolean(formik.errors.telefono)}
              success={formik.touched.telefono && !formik.errors.telefono}
            />

            {formik.touched.telefono && formik.errors.telefono && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.telefono}
              </MDTypography>
            )}

            {/* // Asumiendo que MDInput acepta las propiedades id, name, value y onChangek */}
            <MDInput
              type="date"
              fullWidth
              label="Fecha De Nacimiento"
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              variant="standard"
              value={formik.values.fecha_nacimiento}
              onChange={(event) => formik.setFieldValue("fecha_nacimiento", event.target.value)}
              error={formik.touched.fecha_nacimiento && Boolean(formik.errors.fecha_nacimiento)}
              success={formik.touched.fecha_nacimiento && !formik.errors.fecha_nacimiento}
              // Otras propiedades que puedas necesitar
            />
            <MDInput
              label="Correo"
              fullWidth
              id="correo"
              variant="standard"
              value={formik.values.correo}
              onChange={formik.handleChange}
              error={formik.touched.correo && Boolean(formik.errors.correo)}
              success={formik.touched.correo && Boolean(!formik.errors.correo)}
            />
            {formik.touched.correo && formik.errors.correo && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.correo}
              </MDTypography>
            )}
            <FormControl fullWidth variant="standard" margin="normal">
              <InputLabel id="roles-label">Roles</InputLabel>
              <Select
                labelId="roles-label"
                id="roles"
                name="roles"
                multiple
                value={formik.values.roles} // Asegúrate de que este valor sea un array
                onChange={handleRolesChange}
              >
                <MenuItem value="administrador">Administrador</MenuItem>
                <MenuItem value="gestor-comite">Gestor Comite</MenuItem>
                <MenuItem value="gestor-grupo">Gestor de Grupo</MenuItem>
                <MenuItem value="aprendiz">Aprendiz</MenuItem>
              </Select>
            </FormControl>
            {formik.touched.roles && formik.errors.roles && (
              <MDTypography variant="caption" color="error" textGradient>
                {formik.errors.roles}
              </MDTypography>
            )}
            {showAdditionalField && (
              <MDInput
                label="Numero Ficha"
                fullWidth
                id="numero_ficha"
                variant="standard"
                value={formik.values.numero_ficha}
                onChange={formik.handleChange}
                error={formik.touched.numero_ficha && Boolean(formik.errors.numero_ficha)}
                success={formik.touched.numero_ficha && Boolean(!formik.errors.numero_ficha)}
              />
            )}
            <Button variant="text" color="primary" type="submit" mt={2}>
              {selectedUserId ? "Actualizar Usuario" : "Crear Usuario"}
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

  const handleCrearUsuario = () => {
    setModalOpen(true);
    setSelectedUserId(null);
  };

  const handleEditarUsuario = (id) => {
    const selectedUser = userData.find((user) => user.id === id);
    if (selectedUser) {
      setModalOpen(true);
      setSelectedUserId(id);
    }
  };

  const handleEliminarUsuario = async (id) => {
    try {
      // Lógica para eliminar el usuario con el ID proporcionado
      await eliminarUsuario(authData.token, id);
      alert("Usuario eliminado correctamente");
      window.location.reload();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      alert("Error al eliminar usuario");
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Button variant="outlined" color="primary" onClick={handleCrearUsuario}>
        Crear Usuario
      </Button>
      <br />
      <br />
      <MyModal open={isModalOpen} handleClose={handleCloseModal} />
      <DataTable
        table={{
          columns: [
            { Header: "Nombres", accessor: "nombres", width: "16%" },
            { Header: "Apellidos", accessor: "apellidos", width: "16%" },
            { Header: "Documento", accessor: "documento", width: "16%" },
            { Header: "Correo", accessor: "correo", width: "16%" },
            { Header: "Roles", accessor: "roles", width: "16%" },
            {
              Header: "Acciones",
              accessor: "acciones",
              width: "26%",
              Cell: ({ row }) => (
                <div>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => handleEditarUsuario(row.original.documento)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={() => handleEliminarUsuario(row.original.documento)}
                  >
                    Eliminar
                  </Button>
                </div>
              ),
            },
          ],
          rows: userData,
        }}
      />
      <br />
      <Footer />
    </DashboardLayout>
  );
};

Usuarios.propTypes = {
  // ... Otras propTypes que puedas tener
  row: PropTypes.shape({
    original: PropTypes.shape({
      documento: PropTypes.string.isRequired, // Asegúrate de que el tipo sea correcto
      // ... Otras propiedades que puedas tener en tus objetos de datos
    }).isRequired,
  }).isRequired,
};

export default Usuarios;
