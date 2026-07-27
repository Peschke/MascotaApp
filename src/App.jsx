import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MascotasList from "./components/mascotas/MascotasList";
import MascotaDetailPage from "./pages/mascotas/MascotaDetailPage";
import CrearMascotaPage from "./pages/mascotas/CrearMascotaPage";
import EditarMascota from  './components/mascotas/MascotasEditar'
import MascotasEliminar from './components/mascotas/MascotasEliminar'
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" end className="navlink">Inicio</NavLink> |
          <NavLink to="/mascotas">Mascotas</NavLink> |
          <NavLink to="/mascotas/nueva">Publicar Mascota</NavLink>
          <NavLink to={"/editar"}>Editar Mascota</NavLink>
          <NavLink to={"/eliminar"}>Eliminar Mascota</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mascotas" element={<MascotasList />} />
          <Route path="/mascotas/nueva" element={<CrearMascotaPage/>} />
          <Route path="/mascotas/:id" element={<MascotaDetailPage />} />
          <Route path="/editar" element={<EditarMascota />} />
          <Route path="/editar/:id" element={<EditarMascota />} />
          <Route path="/eliminar" element={<MascotasEliminar />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </>
  );
}

export default App;