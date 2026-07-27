import { useState } from "react";
import mascotasApi from "../../services/api";


function MascotasEliminar() {

    //buscar mascota por id
    const [mascota, setMascota] = useState([]);
    const [idBusqueda, setIdBusqueda] = useState("");
    //error
    const [error, setError] = useState("");

    const fetchEliminarMascota = async (id) => {
        try {
            const response = await mascotasApi.get(`mascotas/${id}`);
            console.log(response.data);
            setMascota(response.data);

        }catch (error) {
            console.error(error);
            manejarError(error);
        }
    }

    const manejarError = (error) => {
        console.error(error);

        const status = error.response?.status;

        if (status === 404) {
            setError("No se encontró la mascota.");
        } else if (status === 400) {
            setError("Los datos ingresados no son válidos. Revisa los campos.");
        } else {
            setError("Ocurrió un error. Intenta nuevamente más tarde.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!idBusqueda) return;
        fetchEliminarMascota(idBusqueda);
        setError(""); // Limpiar el mensaje de error al realizar la busqueda
    }

  return (
    <>
        <h2>Eliminar Mascota</h2>
                {/* Buscador por id */}
            <form onSubmit={handleSubmit}>
                <label>
                ID de la mascota:
                <input
                    type="number"
                    placeholder="Ej: 87"
                    value={idBusqueda}
                    onChange={(e) => setIdBusqueda(e.target.value)}
                />
                </label>
                <button >Buscar Mascota</button>
                <p>{error}</p>
                
                

            </form>

            <div>
                <h3>{mascota.nombre}</h3>

                <img src={mascota.imagen} alt={mascota.nombre} />
                <p><strong>Descripción:</strong> {mascota.descripcion}</p>
                <p><strong>Estado:</strong> {mascota.estado}</p>
                <p><strong>Tipo Animal:</strong> {mascota.tipo_animal}</p>
                <p><strong>Edad:</strong> {mascota.edad}</p>
                <p><strong>Raza:</strong> {mascota.raza}</p>
                <p><strong>Sexo:</strong> {mascota.sexo}</p>
                <p><strong>Tamaño:</strong> {mascota.tamano}</p>
            </div>
    </>
  );
}

export default MascotasEliminar;