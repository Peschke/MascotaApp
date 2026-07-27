import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import MascotasCard from "./MascotaCard";

function MascotasList(){
    const [mascotasList, setMascotasList] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMascotas = async () => {
            try {
                const response = await api.get("mascotas/");
                if (response.status === 200) {
                    setMascotasList(response.data);
                }
            } catch (error) {
                console.log(error.response);
                if (error.response?.status === 401) {
                    setError("No autorizado. Por favor inicia sesión.");
                } else if (error.response?.status === 404) {
                    setError("No se encontró a la mascota.");
                } else {
                    setError("No se pudo cargar el detalle de la mascota.");
                }
            }
        }

        fetchMascotas();
    }, []);

    return (
        <>
            <article>
                <h2>Lista de mascotas</h2>
                {error ? <p>{error}</p> : null}
                <div>
                    <MascotasCard listado={mascotasList} onVerDetalle={(id) => navigate(`/mascotas/${id}`)} />
                </div>
            </article>
        </>
    )
}

export default MascotasList;