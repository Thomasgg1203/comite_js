import axios, { CancelToken } from "axios";

const baseURL = "http://localhost:4000";

export const getAllArticulos = async () => {
  const { token, cancel } = CancelToken.source();

  const response = await axios.get(`${baseURL}/articulos`, { cancelToken: token });

  // Resto del código...

  return response.data;
};

export const GetArticulosByCapituloId = async (capituloId) => {
  try {
    const { token, cancel } = CancelToken.source();

    const response = await axios.get(`${baseURL}/articulos?capituloId=${capituloId}`, {
      cancelToken: token,
    });

    // Resto del código...

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Solicitud cancelada:", error.message);
    } else {
      console.error(`Error: ${error.message}`);
    }
    return [];
  }
};
