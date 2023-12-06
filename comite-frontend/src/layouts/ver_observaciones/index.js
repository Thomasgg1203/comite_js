import React, { useEffect, useState } from "react";
import { useAuth } from "context";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { obtenerObservaciones } from "api/observaciones";
import PropTypes from "prop-types";
import { Container, Card, CardContent, Typography, CardActions, Button } from "@mui/material";

const ObservacionCard = ({ observacion }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Observación
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Detalles: {observacion.detalles}
        </Typography>
        {/* <Typography variant="body2" color="textSecondary">
          Aprendiz: {`${observacion.aprendiz.nombres} ${observacion.aprendiz.apellidos}`}
        </Typography> */}
        {/* Add more information as needed */}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Ver Detalles
        </Button>
      </CardActions>
    </Card>
  );
};

const ObservacionesList = () => {
  const { authData } = useAuth();
  const [observaciones, setObservaciones] = useState([]);

  useEffect(() => {
    const fetchObservaciones = async () => {
      try {
        const response = await obtenerObservaciones(authData.token);
        setObservaciones(response);
      } catch (error) {
        console.error("Error al obtener observaciones:", error);
        // Handle the error as needed
      }
    };

    fetchObservaciones();
  }, [authData.token]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Container component="main" maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Lista de Observaciones
        </Typography>
        {observaciones.map((observacion) => (
          <ObservacionCard key={observacion.id} observacion={observacion} />
        ))}
      </Container>
      <Footer />
    </DashboardLayout>
  );
};

ObservacionCard.propTypes = {
  observacion: PropTypes.shape({
    id: PropTypes.string.isRequired,
    detalles: PropTypes.string.isRequired,
    aprendiz: PropTypes.shape({
      nombres: PropTypes.string.isRequired,
      apellidos: PropTypes.string.isRequired,
    }).isRequired,
    // Add more properties as needed
  }).isRequired,
};

export default ObservacionesList;
