//importacion de axios
import axios from "axios";
//Url
const baseURL = `http://192.168.1.88:4000`;
//funcion, que valida el post, para ingreso
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${baseURL}/auths/ingreso`, loginData);
    return response;
  } catch (error) {
    throw error;
  }
};

//all user
// En el archivo de API
export const allUsers = async (token) => {
  try {
    if (token) {
      const response = await axios.get(`${baseURL}/usuarios/obtener`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Respuesta de la API (allUsers):", response.data);
      return response;
    } else {
      console.error("No hay token disponible en la información de autenticación.");
      throw new Error("No hay token disponible");
    }
  } catch (error) {
    console.error("Error en allUsers:", error);
    throw error; // Lanza el error para que pueda ser capturado en el componente
  }
};

export const guardarUsuario = async (token, userData) => {
  try {
    if (token) {
      const response = await axios.post(`${baseURL}/usuarios/crear`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        console.log("Usuario creado correctamente:", response.data);
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

export const eliminarUsuario = async (token, userId) => {
  try {
    if (token) {
      const response = await axios.delete(`${baseURL}/usuarios/eliminar/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        console.log("Usuario eliminado correctamente:", response.data);
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
