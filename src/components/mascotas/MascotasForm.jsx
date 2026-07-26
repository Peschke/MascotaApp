import { useState } from 'react'

function MascotasForm() {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [imagen, setImagen] = useState(null)
    const [estado, setEstado] = useState('perdida')
    const [tipoAnimal, setTipoAnimal] = useState('otro')
    const [edad, setEdad] = useState('')
    const [raza, setRaza] = useState('')
    const [sexo, setSexo] = useState('')
    const [tamano, setTamano] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData()

        data.append('nombre', nombre)
        data.append('descripcion', descripcion)
        data.append('estado', estado)
        data.append('tipo_animal', tipo_animal)

        if (imagen) data.append('imagen', imagen)
        if (edad) data.append('edad', edad)
        if (raza) data.append('raza', raza)
        if (sexo) data.append('sexo', sexo)
        if (tamano) data.append('tamano', tamano)

        try {
            const response = await api.post('mascotas/', data)
            console.log('Mascota creada:', response.data)
            alert('Se ha creado la mascota con éxito.')

            // Limpieza de campos al terminar
            setNombre('')
            setDescripcion('')
            setImagen(null)
            setEstado('perdida')
            setTipoAnimal('otro')
            setEdad('')
            setRaza('')
            setSexo('')
            setTamano('')

            // Avisamos al componente padre si existe la función
            if (onMascotaCreada) {
                onMascotaCreada()
            }
        } catch (error) {
            console.error('Error al crear mascota:', error.response)
            alert('Hubo un error al registrar la mascota.')
        }
    }


    return (
        <form>

            <label>Nombre:</label>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />

            <label>Descripción:</label>
            <input
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
            />

            <label>Imagen:</label>
            <input
                type="file"
                onChange={(e) => setImagen(e.target.files[0])}
            />

            <label>Estado:</label>
            <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option value="perdida">Perdida</option>
                <option value="encontrada">Encontrada</option>
                <option value="en_adopcion">En adopción</option>
                <option value="adoptada">Adoptada</option>
            </select>

            <label>Tipo animal:</label>
            <select value={tipoAnimal} onChange={(e) => setTipoAnimal(e.target.value)}>
                <option value="perro">Perro</option>
                <option value="gato">Gato</option>
                <option value="ave">Ave</option>
                <option value="roedor">Roedor</option>
                <option value="reptil">Reptil</option>
                <option value="otro">Otro</option>
            </select>

            <label>Edad:</label>
            <input
                type="number"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />

            <label>Raza:</label>
            <input
                type="text"
                value={raza}
                onChange={(e) => setRaza(e.target.value)}
            />

            <label>Sexo:</label>
            <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                <option value="">--------</option>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
                <option value="desconocido">Desconocido</option>
            </select>

            <label>Tamaño:</label>
            <select value={tamano} onChange={(e) => setTamano(e.target.value)}>
                <option value="">--------</option>
                <option value="pequeno">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
                <option value="desconocido">Desconocido</option>
            </select>

            <button type="submit">Agregar</button>
        </form>
    )
}

export default MascotasForm