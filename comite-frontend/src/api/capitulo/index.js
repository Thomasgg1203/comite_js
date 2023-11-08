//importar la libreria de axios
import axios from "axios";
//importar la libreria de react
import { useState, useEffect } from "react";

//endpoint para hacer la solicitud get(trae todos los capitulos)
const baseURL = "http://localhost:4000/capitulos/1c53f901-0c85-4202-9857-908d82ddcbad";

const GetAllCapitulos = () => {
  //Instansiamos los estados de la url como null
  const [post, setPost] = useState(null);
  //usamos el useEffect, para controlar los posibles estados de la api
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log(post);
  //Por si ocurre un error y envia eso vacio
  if (!post) {
    return <div>Hola mundo soy gay</div>;
  }

  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
};

export { GetAllCapitulos };
