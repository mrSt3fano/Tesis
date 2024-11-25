import { React } from "react";
import RAdmin from './Pages/RegistroAdmin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import Panel from "./Pages/PanelControl";
import Equipos from "./Pages/Equipos";
import Servicios from "./Pages/Servicios";
import Reportes from "./Pages/Reportes";

function App() {

  return (

    <BrowserRouter>
      <div className="h-screen overflow-x-hidden">
        <Routes>

          <Route path="/" element={<NavBar />}>
            <Route path="/registrarse" element={<RAdmin />} />
            <Route path="/registroEquipos" element={<Equipos />} />
            <Route path="/mostrarInfo" element={<Panel />} />
            <Route path="/mostrarServicios" element={<Servicios />} />
            <Route path="/mostrarNotificaciones" element={<Reportes />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
