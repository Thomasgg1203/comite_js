//importacion de axios
import axios from "axios";

//url
const baseURL = `http://localhost:4000`;

export const getAllArticulos = async () => await axios.get(`${baseURL}/articulos`);

//Parar traer articulo, por articulo
export const GetArticulosByCapituloId = async (capituloId) => {
  try {
    const response = await axios.get(`${baseURL}/articulos?capituloId=${capituloId}`);
    return response.data;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return [];
  }
};
