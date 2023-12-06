//importacion de axios
import axios from "axios";
//Url
const baseURL = `http://10.183.153.130:4000`;
// const baseURL = "http://localhost:4000";

// En el archivo de API
export const allAprendices = async (token) => {
  try {
    if (token) {
      const response = await axios.get(`${baseURL}/usuarios/obtener`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        // Filtra los usuarios para incluir solo a aquellos con el rol "aprendiz"
        const aprendices = response.data.filter((user) => user.roles.includes("aprendiz"));
        console.log("Respuesta de la API (aprendices):", aprendices);
        return aprendices;
      } else {
        console.error("La respuesta de la API no tiene la estructura esperada:", response);
      }
    } else {
      console.error("No hay token disponible en la información de autenticación.");
      throw new Error("No hay token disponible");
    }
  } catch (error) {
    console.error("Error en allUsers:", error);
    throw error; // Lanza el error para que pueda ser capturado en el componente
  }
};

export const crearObservaciones = async (token, observacionesData) => {
  try {
    if (token) {
      const response = await axios.post(`${baseURL}/observaciones/crear`, observacionesData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        console.log("Observaciones creadas correctamente:", response.data);
        return response.data;
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

export const obtenerObservaciones = async (token) => {
  try {
    if (token) {
      const response = await axios.get(`${baseURL}/observaciones/obtener`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        console.log("Respuesta de la API (observaciones):", response.data);
        return response.data;
      } else {
        console.error("La respuesta de la API no tiene la estructura esperada:", response);
      }
    } else {
      console.error("No hay token disponible en la información de autenticación.");
      throw new Error("No hay token disponible");
    }
  } catch (error) {
    console.error("Error en obtenerObservaciones:", error);
    throw error;
  }
};
