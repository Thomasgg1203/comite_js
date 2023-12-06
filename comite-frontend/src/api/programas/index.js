//importacion de axios para el consumo de la api
import axios from "axios";

const baseURL = "http://10.183.153.130:4000";
// const baseURL = "http://localhost:4000";
export const allProgramas = async (token) => {
  try {
    if (token) {
      const response = await axios.get(`${baseURL}/programas/obtener`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Respuesta de la API (programas):", response.data);
      return response;
    } else {
      console.error("No hay token disponible en la información de autenticación.");
      throw new Error("No hay token disponible");
    }
  } catch (error) {
    console.error("Error en allProgramas:", error);
    throw error; // Lanza el error para que pueda ser capturado en el componente
  }
};

// Guardar un nuevo programa
export const guardarPrograma = async (token, programaData) => {
  try {
    if (token) {
      const response = await axios.post(`${baseURL}/programas/crear`, programaData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        console.log("Datos del programa guardados correctamente:", response.data);
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

// Eliminar un programa por ID
export const eliminarPrograma = async (token, programaId) => {
  try {
    if (token) {
      const response = await axios.delete(`${baseURL}/programas/eliminar/${programaId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        console.log("Programa eliminado correctamente:", response.data);
        return response.data; // Puedes devolver los datos si es necesario
      } else {
        console.error("La respuesta de la API no tiene la estructura esperada:", response);
      }
    } else {
      console.error("No hay token disponible en la información de autenticación.");
      throw new Error("No hay token disponible");
    }
  } catch (error) {
    console.error("Error al enviar solicitud de eliminación a la API:", error);
    throw error;
  }
};
