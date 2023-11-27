//importacion de axios para el consumo de la api
import axios from "axios";

const baseURL = "http://192.168.1.88:4000";

// En el archivo de API
export const allfichas = async (token) => {
  try {
    if (token) {
      const response = await axios.get(`${baseURL}/fichas/obtener`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Respuesta de la API (fichas):", response.data);
      return response;
    } else {
      console.error("No hay token disponible en la información de autenticación.");
      throw new Error("No hay token disponible");
    }
  } catch (error) {
    console.error("Error en allfichas:", error);
    throw error; // Lanza el error para que pueda ser capturado en el componente
  }
};
