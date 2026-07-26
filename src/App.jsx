import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MascotasList from "./components/mascotas/MascotasList"; 

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" end>Inicio</NavLink> | 
          <NavLink to="/mascotas">Mascotas</NavLink> | 
          <NavLink to="/mascotas/nueva">Publicar Mascota</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mascotas" element={<MascotasList />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </>
  );
}

export default App;