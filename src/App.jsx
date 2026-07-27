import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MascotasList from "./components/mascotas/MascotasList";
import MascotaDetailPage from "./pages/mascotas/MascotaDetailPage";
import CrearMascotaPage from "./pages/mascotas/CrearMascotaPage";
import EditarMascota from './components/mascotas/MascotasEditar'
import MascotasEliminar from './components/mascotas/MascotasEliminar'
import "./App.css";

function App() {
  return (
    <div className="estructura">
      <header className="encabezado">
        <nav className="navegacion">
          <NavLink to="/" end className="enlace">Inicio</NavLink> |
          <NavLink to="/mascotas" className="enlace">Mascotas</NavLink> |
          <NavLink to="/mascotas/nueva" className="enlace">Publicar</NavLink> |
          <NavLink to="/editar" className="enlace">Editar</NavLink> |
          <NavLink to="/eliminar" className="enlace">Eliminar</NavLink>
        </nav>
      </header>

      <main className="contenido">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mascotas" element={<MascotasList />} />
          <Route path="/mascotas/nueva" element={<CrearMascotaPage />} />
          <Route path="/mascotas/:id" element={<MascotaDetailPage />} />
          <Route path="/editar" element={<EditarMascota />} />
          <Route path="/editar/:id" element={<EditarMascota />} />
          <Route path="/eliminar" element={<MascotasEliminar />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;