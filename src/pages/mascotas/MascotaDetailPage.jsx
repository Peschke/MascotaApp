import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";
import ComentarioForm from "../../components/comentarios/ComentarioForm";

function MascotaDetailPage() {
    const { id } = useParams();
    const [mascota, setMascota] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMascota = async () => {
            try {
                setLoading(true);
                const response = await api.get(`mascotas/${id}/`);
                setMascota(response.data);
            } catch (error) {
                console.log(error.response);
                setError("No se pudo cargar el detalle de la mascota.");
            } finally {
                setLoading(false);
            }
        };

        fetchMascota();
    }, [id]);

    if (loading) {
        return <p>Cargando detalle...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!mascota) {
        return <p>No se encontró la mascota.</p>;
    }

    return (
        <article>
            <Link to="/mascotas">Volver a la lista</Link>
            <h2>{mascota.nombre}</h2>
            {mascota.imagen ? <img src={mascota.imagen} alt={mascota.nombre} /> : null}
            <p><strong>Descripción:</strong> {mascota.descripcion}</p>
            <p><strong>Tipo:</strong> {mascota.tipo_animal}</p>
            <p><strong>Estado:</strong> {mascota.estado}</p>
            <p><strong>Edad:</strong> {mascota.edad}</p>
            <p><strong>Raza:</strong> {mascota.raza}</p>
            <p><strong>Sexo:</strong> {mascota.sexo}</p>
            <p><strong>Tamaño:</strong> {mascota.tamano}</p>

            <h3>Comentarios</h3>
            {mascota.comentarios?.length > 0 ? (
                <ul>
                    {mascota.comentarios.map((comentario) => (
                        <li key={comentario.id}>{comentario.texto || comentario.comentario || comentario.contenido || "Sin texto"}</li>
                    ))}
                </ul>
            ) : (
                <p>No hay comentarios para esta mascota.</p>
            )}

            <section>
                <ComentarioForm mascotaId={id}/>
            </section>

        </article>
    );
}

export default MascotaDetailPage;