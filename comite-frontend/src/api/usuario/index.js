//importacion de axios
import axios from "axios";
//Url
const baseURL = `http://192.168.1.88:4000`;
// const baseURL = "http://localhost:4000";
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

export const obtenerUsuarioPorDocumento = async (token, documento) => {
  try {
    if (token) {
      const response = await axios.get(`${baseURL}/usuarios/obtener/${documento}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        console.log("Usuario obtenido correctamente:", response.data);
        return response.data;
      } else {
        console.error("La respuesta de la API no tiene la estructura esperada:", response);
      }
    } else {
      console.error("No hay token disponible en la información de autenticación.");
      throw new Error("No hay token disponible");
    }
  } catch (error) {
    console.error("Error al obtener datos del usuario:", error);
    throw error;
  }
};

// Función para actualizar un usuario
export const actualizarUsuario = async (token, userId, userData) => {
  try {
    if (token) {
      const response = await axios.put(`${baseURL}/usuarios/actualizar/${userId}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        console.log("Usuario actualizado correctamente:", response.data);
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
