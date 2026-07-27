function ComentarioForm() {

    return (
        <form>

            <h4>Agregar un comentario</h4>

            <div>
                <label>Tu nombre:</label>
                <input type="text" />

            </div>

            <div>
                <label>Comentario:</label>
                <input type="text" />
            </div>

            <button type="submit">Publicar Comentario</button>


        </form>

    )
}

export default ComentarioForm