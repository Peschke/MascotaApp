import { useState } from 'react'

function MascotasForm() {

    return (
        <form>

            <label>Nombre:</label>
            <input type="text" />

            <label>Descripción:</label>
            <input type="text" />

            <label>Imagen:</label>
            <input type="text" />

            <label>Estado:</label>
            <input type="text" />

            <label>Tipo de animal</label>
            <input type="text" />

            <label>Edad:</label>
            <input type="text" />

            <label>Raza:</label>
            <input type="text" />

            <label>Sexo:</label>
            <input type="text" />

            <label>Tamaño:</label>
            <input type="text" />

            <button>Agregar</button>
        </form>
    )
}

export default MascotasForm