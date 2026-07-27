import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import MascotasCard from "./MascotaCard";
import "./MascotasList.css";



function MascotasList(){
    const [mascotasList, setMascotasList] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const manejarError = (error) => {
        const status = error.response?.status;

        if (status === 404) {
            setError("No se encontró la mascota.");
        } else if (status === 400) {
            setError("Error en la dirrecion URL");
        } else {
            setError("Ocurrió un error. Intenta nuevamente más tarde.");
        }
    };

    useEffect(() => {
        const fetchMascotas = async () => {
            try {
                const response = await api.get("mascotas/");
                if (response.status === 200) {
                    setMascotasList(response.data);
                }
            } catch (error) {
                manejarError(error);
            }
        }

        fetchMascotas();
    }, []);


    return (
        <div className="contenedor">
            <article className="bloque">
                <h2 className="titulo">Lista de mascotas</h2>
                {error ? <p className="mensajeerror">{error}</p> : null}
                <div className="grilla">
                    <MascotasCard listado={mascotasList} onVerDetalle={(id) => navigate(`/mascotas/${id}`)} />
                </div>
            </article>
        </div>
    )
}

export default MascotasList;