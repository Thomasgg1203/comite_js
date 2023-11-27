/**
 * Logica por parte del diseño
 */
import { createContext, useContext, useReducer, useMemo, useState, useEffect } from "react";

// prop-types es una biblioteca para la verificación de tipos de accesorios
import PropTypes from "prop-types";

// Material Dashboard 2 React main context
const MaterialUI = createContext();

// Configuración de un nombre personalizado para el contexto que es visible en las herramientas de desarrollo de React
MaterialUI.displayName = "MaterialUIContext";

// Material Dashboard 2 React reducer
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Tipo de acción no controlada: ${action.type}`);
    }
  }
}

// Material Dashboard 2 React context provider
function MaterialUIControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    whiteSidenav: false,
    sidenavColor: "success",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
    darkMode: false,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

// Material Dashboard 2 React custom hook for using context
function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error("useMaterialUIController debe usarse dentro de MaterialUIControllerProvider.");
  }

  return context;
}

// Typechecking props for the MaterialUIControllerProvider
MaterialUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
const setMiniSidenav = (dispatch, value) => dispatch({ type: "MINI_SIDENAV", value });
const setTransparentSidenav = (dispatch, value) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
const setWhiteSidenav = (dispatch, value) => dispatch({ type: "WHITE_SIDENAV", value });
const setSidenavColor = (dispatch, value) => dispatch({ type: "SIDENAV_COLOR", value });
const setTransparentNavbar = (dispatch, value) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
const setFixedNavbar = (dispatch, value) => dispatch({ type: "FIXED_NAVBAR", value });
const setOpenConfigurator = (dispatch, value) => dispatch({ type: "OPEN_CONFIGURATOR", value });
const setDirection = (dispatch, value) => dispatch({ type: "DIRECTION", value });
const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });
const setDarkMode = (dispatch, value) => dispatch({ type: "DARKMODE", value });

/*
  --------------------------Fin de la logica por parte del diseño--------------------------------
*/

/**
 * --------------------------Inicio de logica por parte de Apis----------------------------------
 */

/*
Parte de usuarios
*/
const usuariosData = async () => {
  try {
    const res = await allUsers(authData.token);
    console.log("Respuesta de la API (usuariosData):", res);
    return res;
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
};

/*
Parte de usuarios
*/

/**
 * Parte de reglamento
 */
import { GetAllCapitulos } from "api/capitulo";
import { GetArticulosByCapituloId } from "api/articulo";

const reglamento = async () => {
  try {
    // Obtener todos los capítulos
    const response = await GetAllCapitulos();

    // Si la respuesta es un objeto, conviértela en un array
    const capitulos = Array.isArray(response.data) ? response.data : Object.values(response.data);

    // Recorrer los capítulos y obtener los artículos relacionados
    const datosRelacionados = await Promise.all(
      capitulos.map(async (capitulo) => {
        const articulos = await GetArticulosByCapituloId(capitulo._id);
        return {
          capitulo,
          articulos,
        };
      })
    );

    return datosRelacionados;
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
};

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Parte de ingreso de aplicacion>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    // Intentar obtener datos de autenticación desde localStorage al inicio
    const storedAuthData = localStorage.getItem("authData");
    return storedAuthData ? JSON.parse(storedAuthData) : null;
  });

  useEffect(() => {
    // Guardar en localStorage cada vez que authData cambie
    localStorage.setItem("authData", JSON.stringify(authData));
  }, [authData]);

  return <AuthContext.Provider value={{ authData, setAuthData }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

/**
 * En este ejemplo, PropTypes.node.isRequired especifica que children debe ser un nodo React y es requerido.
 * Asegúrate de importar PropTypes desde 'prop-types'. Esto debería resolver el problema del linter.
 */
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
//<>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<PArte fin de validacion del ingreso<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//usuarios logica

//logica para usuarios

//fin usuarios
/**
 * --------------------------Fin de logica por parte de Apis----------------------------------
 */

export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
  setDarkMode,
  reglamento,
  AuthContext,
  usuariosData,
  AuthProvider,
};
