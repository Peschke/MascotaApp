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
                manejarError(error);
            }
        }

        fetchMascotas();
    }, []);

    const manejarError = (error) => {
        console.error(error);

        const status = error.response?.status;

        if (status === 404) {
            setError("No se encontró la mascota.");
        } else if (status === 400) {
            setError("Error en la dirrecion URL");
        } else {
            setError("Ocurrió un error. Intenta nuevamente más tarde.");
        }
    };

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