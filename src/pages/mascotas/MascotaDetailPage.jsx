import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";
import ComentarioForm from "../../components/comentarios/ComentarioForm";
import "./MascotaDetailPage.css";

function MascotaDetailPage() {
    const { id } = useParams();
    const [mascota, setMascota] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchMascota = async () => {
        try {
            setLoading(true);
            const response = await api.get(`mascotas/${id}/`);
            setMascota(response.data);
        } catch (error) {
            console.log(error.response);
            if (error.response?.status === 401) {
                setError("No autorizado. Por favor inicia sesión.");
            } else if (error.response?.status === 404) {
                setError("No se encontró a la mascota.");
            } else {
                setError("No se pudo cargar el detalle de la mascota.");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMascota();
    }, [id]);

    const getComentarioAutor = (comentario) => {
        if (!comentario) return "Anónimo";

        if (typeof comentario.autor === "string" && comentario.autor.trim()) {
            return comentario.autor;
        }

        if (typeof comentario.autor === "object") {
            return comentario.autor.nombre || comentario.autor.username || comentario.autor.email || "Anónimo";
        }

        return comentario.autor_nombre || comentario.usuario || "Anónimo";
    };

    const handleComentarioCreado = () => {
        fetchMascota();
    };

    if (loading) {
        return <p className="cargando">Cargando detalle...</p>;
    }

    if (error) {
        return <p className="mensajeerror">{error}</p>;
    }

    if (!mascota) {
        return <p className="mensajeerror">No se encontró la mascota.</p>;
    }

    return (
        <article className="detalle">
            <Link to="/mascotas" className="volver">Volver a la lista</Link>

            <h2 className="titulo">{mascota.nombre}</h2>

            {mascota.imagen ? <img src={mascota.imagen} alt={mascota.nombre} className="imagen" /> : null}

            <div className="datos">
                <p><strong>Descripción:</strong> {mascota.descripcion}</p>
                <p><strong>Tipo:</strong> {mascota.tipo_animal}</p>
                <p><strong>Estado:</strong> {mascota.estado}</p>
                <p><strong>Edad:</strong> {mascota.edad}</p>
                <p><strong>Raza:</strong> {mascota.raza}</p>
                <p><strong>Sexo:</strong> {mascota.sexo}</p>
                <p><strong>Tamaño:</strong> {mascota.tamano}</p>
            </div>

            <section className="comentarios">
                <h3>Comentarios</h3>
                {mascota.comentarios?.length > 0 ? (
                    <ul className="lista">
                        {mascota.comentarios.map((comentario) => {
                            const texto = comentario.texto || comentario.comentario || comentario.contenido || "Sin Texto";
                            const autor = getComentarioAutor(comentario);

                            return (
                                <li key={comentario.id} className="item">
                                    <div className="autor"><strong>{autor}</strong></div>
                                    <div className="texto">{texto}</div>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p className="vacio">No hay comentarios para esta mascota.</p>
                )}
            </section>

            <section className="formulario">
                <ComentarioForm mascotaId={id} onComentarioCreado={handleComentarioCreado} />
            </section>
        </article>
    );
}

export default MascotaDetailPage;