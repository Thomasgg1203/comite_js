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

export const guardarFicha = async (token, fichaData) => {
  try {
    if (token) {
      const response = await axios.post(`${baseURL}/fichas/crear`, fichaData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        console.log("Datos guardados correctamente:", response.data);
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

export const eliminarFicha = async (token, id) => {
  try {
    if (token && id) {
      const response = await axios.delete(`${baseURL}/fichas/eliminar:${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        console.log("Ficha eliminada correctamente:", response.data);
        alert("Se elimino con exito");
        return response.data; // Puedes devolver los datos si es necesario
      } else {
        console.error("La respuesta de la API no tiene la estructura esperada:", response);
      }
    } else {
      console.error("No hay token o ID disponible en la información de autenticación.");
      throw new Error("No hay token o ID disponible");
    }
  } catch (error) {
    console.error("Error al eliminar ficha en la API:", error);
    throw error;
  }
};
