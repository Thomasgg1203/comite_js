// Material Dashboard - importacion de tablas
import DataTable from "examples/Tables/DataTable";
//Material ui Botones
import Button from "@material-ui/core/Button";
//importacion de react
import { useState, useEffect } from "react";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

//componente context
import { useAuth } from "context";
import { allUsers } from "api/usuario";

const Usuarios = () => {
  const { authData } = useAuth();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await allUsers(authData.token);
        if (res && res.data) {
          // Asegúrate de que res y res.data estén definidos
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
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* Parte de la tabla */}
      <DataTable
        table={{
          columns: [
            { Header: "Id", accessor: "id", width: "10%" },
            { Header: "Nombres", accessor: "nombres", width: "16%" },
            { Header: "Apellidos", accessor: "apellidos", width: "16%" },
            { Header: "Documento", accessor: "documento", width: "16%" },
            { Header: "Correo", accessor: "correo", width: "16%" },
            {
              Header: "Acciones",
              accessor: "acciones",
              width: "26%",
              Cell: ({}) => (
                <div>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditar(row.original._id)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleEliminar(row.original._id)}
                  >
                    Eliminar
                  </Button>
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={() => handleMostrar(row.original._id)}
                  >
                    Mostrar
                  </Button>
                </div>
              ),
            },
          ],
          rows: userData,
        }}
      />
      {/* Fin de parte de la tabla */}
      <br />
      <Footer />
    </DashboardLayout>
  );
};

export default Usuarios;
