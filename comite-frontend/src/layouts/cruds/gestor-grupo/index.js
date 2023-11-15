// Material Dashboard - importacion de tablas
import DataTable from "examples/Tables/DataTable";
//Material ui Botones
import Button from "@material-ui/core/Button";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

const Gestor_grupo = () => {
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
            { Header: "Id", accessor: "Id", with: "10%" },
            { Header: "Nombres", accessor: "Nombres", width: "16%" },
            { Header: "Apellidos", accessor: "Apellidos", width: "16%" },
            { Header: "Documento", accessor: "Documento", width: "16%" },
            { Header: "Correo", accessor: "Correo", width: "16%" },
            {
              Header: "Acciones",
              accessor: "acciones",
              width: "26%",
              Cell: ({}) => (
                <div>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditar(rows.original.Id)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleEliminar(rows.original.Id)}
                  >
                    Eliminar
                  </Button>
                  <Button
                    variant="outlined"
                    color="default"
                    onClick={() => handleMostrar(rows.original.Id)}
                  >
                    Mostrar
                  </Button>
                </div>
              ),
            },
          ],
          rows: [
            {
              Id: "1",
              Nombres: "Hanny",
              Apellidos: "Baniard",
              Documento: 10023233,
              Correo: "HannyBarto100@gmail.com",
              startDate: "4/11/2021",
              salary: "$474,978",
            },
            {
              Id: "2",
              Nombres: "John",
              Apellidos: "Doe",
              Documento: 12345678,
              Correo: "john.doe@example.com",
              startDate: "10/5/2022",
              salary: "$60,000",
            },
            {
              Id: "3",
              Nombres: "Maria",
              Apellidos: "González",
              Documento: 98765432,
              Correo: "maria@example.com",
              startDate: "2/15/2020",
              salary: "$75,000",
            },
            {
              Id: "4",
              Nombres: "Robert",
              Apellidos: "Smith",
              Documento: 55555555,
              Correo: "robert.smith@example.com",
              startDate: "8/20/2019",
              salary: "$80,000",
            },
            {
              Id: "5",
              Nombres: "Alice",
              Apellidos: "Johnson",
              Documento: 77777777,
              Correo: "alice.johnson@example.com",
              startDate: "6/30/2021",
              salary: "$65,000",
            },
            {
              Id: "6",
              Nombres: "Laura",
              Apellidos: "Perez",
              Documento: 99999999,
              Correo: "laura.perez@example.com",
              startDate: "9/10/2023",
              salary: "$70,000",
            },
            {
              Id: "7",
              Nombres: "Michael",
              Apellidos: "Brown",
              Documento: 11111111,
              Correo: "michael.brown@example.com",
              startDate: "3/25/2022",
              salary: "$55,000",
            },
            {
              Id: "8",
              Nombres: "Sara",
              Apellidos: "Williams",
              Documento: 44444444,
              Correo: "sara.williams@example.com",
              startDate: "7/15/2019",
              salary: "$90,000",
            },
            {
              Id: "9",
              Nombres: "David",
              Apellidos: "Martinez",
              Documento: 66666666,
              Correo: "david.martinez@example.com",
              startDate: "1/8/2022",
              salary: "$62,000",
            },
            {
              Id: "10",
              Nombres: "Elena",
              Apellidos: "Lopez",
              Documento: 33333333,
              Correo: "elena.lopez@example.com",
              startDate: "11/20/2020",
              salary: "$78,000",
            },
            {
              Id: "11",
              Nombres: "Daniel",
              Apellidos: "Wilson",
              Documento: 88888888,
              Correo: "daniel.wilson@example.com",
              startDate: "5/14/2021",
              salary: "$67,000",
            },
            {
              Id: "12",
              Nombres: "Isabel",
              Apellidos: "Turner",
              Documento: 22222222,
              Correo: "isabel.turner@example.com",
              startDate: "12/3/2018",
              salary: "$85,000",
            },
            {
              Id: "13",
              Nombres: "Carlos",
              Apellidos: "Ramirez",
              Documento: 77777777,
              Correo: "carlos.ramirez@example.com",
              startDate: "4/17/2017",
              salary: "$72,000",
            },
            {
              Id: "14",
              Nombres: "Sophia",
              Apellidos: "Davis",
              Documento: 55555555,
              Correo: "sophia.davis@example.com",
              startDate: "2/9/2019",
              salary: "$68,000",
            },
            {
              Id: "15",
              Nombres: "Luis",
              Apellidos: "Hernandez",
              Documento: 12345678,
              Correo: "luis.hernandez@example.com",
              startDate: "8/7/2020",
              salary: "$73,000",
            },
          ],
        }}
      />
      {/* Fin de parte de la tabla */}
      <br />
      <Footer />
    </DashboardLayout>
  );
};

export default Gestor_grupo;
