import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Navegacion from "./components/navegacion";
import Formulario from "./components/formulario";
import Footer from "./components/footer";
import Lista from "./components/lista";
import Reservas from "./components/reservas";



function App() {
  
  return (
    <div className="App">
      <Navegacion />
          <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/Contact" element={ <Formulario /> } />
          <Route path="/Reserva" element={ <Reservas /> } />
          <Route path="/Gastronomia" element={ <Lista /> } />
          <Route path="/Paseo Delta" element={ <Lista /> } />
          <Route path="/Almuerzo Catamaran" element={ <Lista /> } /> 
          </Routes>
      
      <Footer />
      
       
    </div>
  )
}

export default App;
