import { useEffect, useState } from "react";
import api from "../../services/api";
import MascotasCard from "./MascotaCard";

function MascotasList(){
    const [mascotasList, setMascotasList] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMascotas = async () => {
            try {
                const response = await api.get("mascotas/");
                if (response.status === 200) {
                    setMascotasList(response.data);
                }
            } catch (error) {
                console.log(error.response);
                setError("No se pudieron cargar las mascotas.");
            }
        }

        fetchMascotas();
    }, []);

    return (
        <>
            <article>
                <h2>Lista de mascotas</h2>
                <div>
                    <MascotasCard listado={mascotasList} />
                </div>
            </article>
        </>
    )
}

export default MascotasList;