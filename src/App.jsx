import { NavLink, Route, Routes, Router } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EditarMascota from  './components/mascotas/MascotasEditar'

function App() {
  

  return (
  <>
     
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/editar"}>Editar Mascota</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editar" element={<EditarMascota />} />
        <Route path="/editar/:id" element={<EditarMascota />} />
      </Routes>
    
  </>
  )
}

export default App
