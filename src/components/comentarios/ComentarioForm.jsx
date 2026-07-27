import { useState } from "react"
import api from "../../services/api"

function ComentarioForm({ mascotaId, onComentarioCreado }) {
    const [autor, setAutor] = useState('')
    const [contenido, setContenido] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const nuevoComentario = {
            mascota: mascotaId,
            autor: autor,
            contenido: contenido
        }

        try {
            const response = await api.post('comentarios/', nuevoComentario)
            console.log('Comentario publicado:', response.data)
            alert('Comentario agregado con éxito.')

            setAutor('')
            setContenido('')

            if (onComentarioCreado) {
                onComentarioCreado()
            }
        } catch (error) {
            console.error('Detalle del error 400:', error.response?.data)
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

    return (
        <form onSubmit={handleSubmit}>
            <h4>Agregar un comentario</h4>

            <div>
                <label>Tu nombre:</label>
                <input
                    type="text"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                    placeholder="Ej: Pablo"
                    required
                />
            </div>

            <div>
                <label>Comentario:</label>
                <textarea
                    value={contenido}
                    onChange={(e) => setContenido(e.target.value)}
                    placeholder="Escribe tu duda o mensaje sobre esta mascota..."
                    required
                />
            </div>

            <button type="submit">Publicar Comentario</button>
        </form>
    )
}

export default ComentarioForm