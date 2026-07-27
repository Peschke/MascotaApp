import { useState } from "react";
import api from "../../services/api";
import "./MascotasEliminar.css";

function MascotasEliminar() {

    //buscar mascota por id
    const [mascota, setMascota] = useState([]);
    const [idBusqueda, setIdBusqueda] = useState("");
    //error
    const [error, setError] = useState("");

    const fetchEliminarMascota = async (id) => {
        try {
            const response = await api.get(`mascotas/${id}`);

            setMascota(response.data);

        }catch (error) {
            manejarError(error);
        }
    }

    const manejarError = (error) => {
        const status = error.response?.status;

        if (status === 404) {
            setError("No se encontró la mascota.");
        } else if (status === 400) {
            setError("Los datos ingresados no son válidos. Revisa los campos.");
        } else {
            setError("Ocurrió un error. Intenta nuevamente más tarde.");
        }
    };

    const eliminarMascota = async () => {
        if (idBusqueda.trim() === "") {
            setError("Para eliminar debe ingresar un ID.");
            return;
        }

        const confirmar = window.confirm(`¿Estás seguro de que deseas eliminar a ${mascota?.nombre}?`);
        if (!confirmar) return;
        
        try {
            setError("");
            await api.delete(`mascotas/${mascota.id}/`);

            setMascota(null);
            setIdBusqueda("");
        } catch (error) {
            setError("Ocurrió un error al eliminar la mascota. Intenta nuevamente.");
        }
    
        

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (idBusqueda.trim() === "") {
            setError("Debe ingresar un ID.");
            return;
        }
        if (!idBusqueda) return;
        fetchEliminarMascota(idBusqueda);
        setError(""); // Limpiar el mensaje de error al realizar la busqueda
    }

  return (
    <div className="contenedor">
        <div className="bloque">
            <h2 className="titulo">Eliminar Mascota</h2>
            {/* Buscador por id */}
            <form className="buscador" onSubmit={handleSubmit}>
                <label className="etiqueta">
                ID de la mascota:
                <input
                    className="entrada"
                    type="number"
                    placeholder="Ej: 87"
                    value={idBusqueda}
                    onChange={(e) => setIdBusqueda(e.target.value)}
                />
                </label>
                <button className="boton">Buscar Mascota</button> 
                <p className="mensajeerror">{error}</p>
            </form>
        </div>
            
        {mascota?.id ? (
            <div className="tarjeta">
                
                {mascota?.id && (
                    <button className="botoneliminar" type="button" onClick={eliminarMascota}>
                        Eliminar Mascota
                    </button>
                )}

                <h3 className="subtitulo">{mascota?.nombre}</h3> 

                <img className="imagen" src={mascota.imagen} alt={mascota?.nombre} />
                <p className="linea"><strong className="negrita">Descripción:</strong> {mascota?.descripcion}</p>
                <p className="linea"><strong className="negrita">Estado:</strong> {mascota?.estado}</p>
                <p className="linea"><strong className="negrita">Tipo Animal:</strong> {mascota?.tipo_animal}</p>
                <p className="linea"><strong className="negrita">Edad:</strong> {mascota?.edad}</p>
                <p className="linea"><strong className="negrita">Raza:</strong> {mascota?.raza}</p>
                <p className="linea"><strong className="negrita">Sexo:</strong> {mascota?.sexo}</p>
                <p className="linea"><strong className="negrita">Tamaño:</strong> {mascota?.tamano}</p>
            </div>
        ) : (
            <p className="vacio">No hay mascota para mostrar.</p>
        )}
    </div>
  );
}

export default MascotasEliminar;