function ComentarioForm() {
    const [autor, setAutor] = useState('')
    const [contenido, setContenido] = useState('')

    return (
        <form>

            <h4>Agregar un comentario</h4>

            <div>
                <label>Tu nombre:</label>
                <input type="text" />

            </div>

            <div>
                <label>Comentario:</label>
            </div>

            <button type="submit">Publicar Comentario</button>


        </form>

    )
}

export default ComentarioForm