//importacion de axios
import axios from "axios";

//url
const baseURL = `http://localhost:4000`;

export const getAllArticulos = async () => await axios.get(`${baseURL}/articulos`);
