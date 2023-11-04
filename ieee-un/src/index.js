import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios'


Axios.defaults.baseURL = ""; // Aqui va el enlace de la base de datos montada en nube
Axios.defaults.baseURL = "http://localhost:4000";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <BrowserRouter basename="/Pagina_Web"> 
    // Linea de codigo para el despliege en github pages 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode> 
);


// import React from 'react'
// import ReactDOM from "react-dom"
// import App from "./App"
// import { HashRouter } from "react-router-dom"


// const rootElement = document.getElementById("root");

// ReactDOM.render(

//   <HashRouter>
//       <App />
//   </HashRouter>,
  
//   rootElement
// );