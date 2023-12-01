//Axios
import axios from "axios";

//Url
const baseURL = `http://localhost:4000`;
// const baseURL = "http://192.168.1.88:4000";

//get all capitulos
export const GetAllCapitulos = async () => await axios.get(`${baseURL}/capitulos`);
