import { useState } from "react"
import api from "../../services/api"
import "./ComentarioForm.css"

function ComentarioForm({ mascotaId, onComentarioCreado }) {
    const [autor, setAutor] = useState('')
    const [contenido, setContenido] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

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
            console.error('Detalle del error:', error.response?.data)
            manejarError(error)
        }
    }

    const manejarError = (error) => {
        console.error(error)

        const status = error.response?.status

        if (status === 404) {
            setError("No se encontró la mascota.")
        } else if (status === 400) {
            setError("Los datos ingresados no son válidos. Revisa los campos.")
        } else {
            setError("Ocurrió un error. Intenta nuevamente más tarde.")
        }
    }

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <h4 className="subtitulo">Agregar un comentario</h4>

            <div className="campo">
                <label className="etiqueta">Tu nombre:</label>
                <input
                    className="entrada"
                    type="text"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                    placeholder="Ej: Pablo"
                    required
                />
            </div>

            <div className="campo">
                <label className="etiqueta">Comentario:</label>
                <textarea
                    className="area"
                    value={contenido}
                    onChange={(e) => setContenido(e.target.value)}
                    placeholder="Escribe tu duda o mensaje sobre esta mascota..."
                    required
                />
            </div>

            <button className="boton" type="submit">Publicar Comentario</button>

            {error ? <p className="mensajeerror">{error}</p> : null}
        </form>
    )
}

export default ComentarioForm