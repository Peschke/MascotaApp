import { NavLink, Route, Routes, Router } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EditarMascota from  './components/mascotas/MascotasEditar'
import MascotasEliminar from './components/mascotas/MascotasEliminar'

function App() {
  

  return (
  <>
     
      <nav>
        <li>
        <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
        <NavLink to={"/editar"}>Editar Mascota</NavLink>
        </li>
        <li>
        <NavLink to={"/eliminar"}>Eliminar Mascota</NavLink>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editar" element={<EditarMascota />} />
        <Route path="/editar/:id" element={<EditarMascota />} />
        <Route path="/eliminar" element={<MascotasEliminar />} />
      </Routes>
    
  </>
  )
}

export default App
