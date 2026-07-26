import { useState } from "react";
import mascotasApi from "../../services/api";


function MascotasEliminar() {

    const [mascota, setMascota] = useState([]);
    
    const [idBusqueda, setIdBusqueda] = useState("");

    const fetchEliminarMascota = async (id) => {
        try {
            const response = await mascotasApi.get(`mascotas/${id}`);
            console.log(response.data);
            setMascota(response.data);

        }catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!idBusqueda) return;
        fetchEliminarMascota(idBusqueda);
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
                
                

            </form>
    </>
  );
}

export default MascotasEliminar;