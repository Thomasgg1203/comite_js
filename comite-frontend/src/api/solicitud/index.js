import axios from "axios";

const baseURL = "http://192.168.1.88:4000"; // Reemplaza con tu URL de la API

// Crear una nueva solicitud
export const crearSolicitud = async (token, solicitudData) => {
  try {
    if (token) {
      const response = await axios.post(`${baseURL}/solicitudes/crear`, solicitudData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        console.log("Solicitud creada correctamente:", response.data);
        return response.data; // Puedes devolver los datos si es necesario
      } else {
        console.error("La respuesta de la API no tiene la estructura esperada:", response);
      }
    } else {
      console.error("No hay token disponible en la información de autenticación.");
      throw new Error("No hay token disponible");
    }
  } catch (error) {
    console.error("Error al enviar datos a la API:", error);
    throw error;
  }
};
