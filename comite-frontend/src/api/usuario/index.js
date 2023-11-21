//importacion de axios
import axios from "axios";
//Url
const baseURL = `http://localhost:4000`;
//funcion, que valida el post, para ingreso
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${baseURL}/auths/ingreso`, loginData);
    return response;
  } catch (error) {
    throw error;
  }
};
