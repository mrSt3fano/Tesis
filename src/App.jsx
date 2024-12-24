import { React } from "react";
import Acceso from './Pages/RegistroAdmin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from "./Components/NavBar";
import Panel from "./Pages/PanelControl";
import Equipos from "./Pages/Equipos";
import Informacion from "./Pages/Servicios";
import Actualizar from "./Pages/Reportes";
import Home from "./Pages/Home";
import Guardar from "./Pages/Guardar";

function App() {

  return (

    <BrowserRouter>
      <div className="h-screen overflow-x-hidden">
        <NavBar />
        <Routes>

          <Route path="/" >
          <Route path="/" element={<Home />} />
            <Route path="/acceso" element={<Acceso />} />
            <Route path="/equipos" element={<Equipos />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/informacion" element={<Informacion />} />
            <Route path="/actualizacion" element={<Actualizar />} />
            <Route path="/guardar" element={<Guardar />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
