import { useEffect, useState } from "react";
import api from "../../services/api";

function MascotasList(){
    const [mascotasList, setMascotasList] = useState([]);
    const [error, setError] = useState(null);

    const fetchMascotas = async () => {
        try {
            const response = await api.get('mascotas/');
            const data = response.data.results;
            setMascotasList(data);
        } catch (error) {
            console.error("Error al obtener mascotas:", error);
            setError("No se pudieron cargar las mascotas.");
        }
    }

    useEffect(() => {
        fetchMascotas();
    }, [])

    return (
        <>
            <h2>Lista de mascotas</h2>

            {/* agregar aqui el enlace a MascotasForm (NavLink) */}

            {
                mascotasList.map(m => (
                    
                    <div key={m.id}>
                        <h3>{m.nombre}</h3>,
                        <img src={m.imagen} />
                    </div>
                )
                )
            }

            {/* agregar aqui las Routes y Route hacia formulario */}
            
        </>
    )
}

export default MascotasList;