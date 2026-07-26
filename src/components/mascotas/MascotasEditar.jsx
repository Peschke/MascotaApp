import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mascotasApi from "../../services/api";
function MascotasEditar() {
    //select api choices
    const [estados, setEstados] = useState([]);
    const [tipoMascota, setTipoMascota] = useState([]);
    const [sexo, setSexo] = useState([]);
    const [tamano, setTamano] = useState([]);
    //seleccionado
    const [selectedEstado, setEstado] = useState("");
    const [selectedTipoMascota, setTipoMascotaSeleccionada] = useState("");
    const [selectedSexo, setSexoSeleccionado] = useState("");
    const [selectedTamano, setTamanoSeleccionado] = useState("");

    const [campoEditar, setCampoEditar] = useState("");
    const [nuevoValor, setNuevoValor] = useState("");

    const [idBusqueda, setIdBusqueda] = useState("");
    const [mascota, setMascota] = useState([]);


    const fetchEditarMascota = async (id) => {
        try {
            const response = await mascotasApi.get(`mascotas/${id}`);
            console.log(response.data);
            setMascota(response.data);

        }catch (error) {
            console.error(error);
        }
    }
    
    const editarCampo = async (campo) => {
        try {
            await mascotasApi.patch(`mascotas/${mascota.id}/`, {
                [campo]: nuevoValor
            });

            // Vuelve a consultar la mascota
            fetchEditarMascota(mascota.id);

            setCampoEditar("");
            setNuevoValor("");

        } catch (error) {
            console.error(error);
        }
    }

    const fetchChoices = async () =>{
        try{
            const response = await mascotasApi.get('choices/');
            console.log(response.data);
            setEstados(response.data.estado);
            setTipoMascota(response.data.tipo_animal);
            console.log(response.data.tipo_animal);
            setSexo(response.data.sexo);
            setTamano(response.data.tamano);
            console.log(response.data.tamano);
        }catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        fetchChoices();
    },[])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!idBusqueda) return;
        fetchEditarMascota(idBusqueda);
    }

    

        
  return (
    <>
        <div>
                <h2>Editar Mascotas</h2>
                {/* Buscador por id */}
            <form onSubmit={handleSubmit}>
                <label>
                ID de la mascota:
                <input
                    type="number"
                    placeholder="Ej: 87"
                    value={idBusqueda}
                    onChange={(e) => setIdBusqueda(e.target.value)}
                />
                </label>
                <button >Buscar Mascota</button>
                
                

            </form>


        

        <h3>Editando: {mascota.nombre}</h3>

            <p>
                <strong>Nombre:</strong>

                {campoEditar === "nombre" ? (
                    <>
                        <input
                            value={nuevoValor}
                            onChange={(e) => setNuevoValor(e.target.value)}
                        />

                        <button onClick={() => editarCampo("nombre")}>
                            Guardar
                        </button>

                        <button onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.nombre}

                        <button
                            onClick={() => {
                                setCampoEditar("nombre");
                                setNuevoValor(mascota.nombre);
                            }}
                        >
                            Editar
                        </button>
                    </>
                )}
            </p>

            <p>
                <strong>Descripción:</strong>

                {campoEditar === "descripcion" ? (
                    <>
                        <input
                            value={nuevoValor}
                            onChange={(e) => setNuevoValor(e.target.value)}
                        />

                        <button onClick={() => editarCampo("descripcion")}>
                            Guardar
                        </button>

                        <button onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.descripcion}

                        <button
                            onClick={() => {
                                setCampoEditar("descripcion");
                                setNuevoValor(mascota.descripcion);
                            }}
                        >
                            Editar
                        </button>
                        
                    </>
                )}
            </p>
            <img src={mascota?.imagen} alt={mascota?.nombre} />

            <p>
                <strong>Estado:</strong>

                {campoEditar === "estado" ? (
                    <>
                        <select value={selectedEstado} onChange={(e) => setNuevoValor(e.target.value)}>
                            <option value={""} >Sin estado</option>
                            {
                                estados.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                            }
                        </select>

                        <button onClick={() => editarCampo("estado")}>
                            Guardar
                        </button>

                        <button onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.estado}

                        <button
                            onClick={() => {
                                setCampoEditar("estado");
                                setNuevoValor(mascota.estado);
                            }}
                        >
                            Editar
                        </button>
                        
                    </>
                )}
            </p>

            <p>
                <strong>Tipo Animal:</strong>

                {campoEditar === "tipo_animal" ? (
                    <>
                        <select value={selectedTipoMascota} onChange={(e) => setNuevoValor(e.target.value)}>
                            <option value={""} >Sin estado</option>
                            {
                                tipoMascota.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                            }
                        </select>

                        <button onClick={() => editarCampo("tipo_animal")}>
                            Guardar
                        </button>

                        <button onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.tipo_animal}

                        <button
                            onClick={() => {
                                setCampoEditar("tipo_animal");
                                setNuevoValor(mascota.tipo_animal);
                            }}
                        >
                            Editar
                        </button>
                        
                    </>
                )}
            </p>

            <p>
                <strong>Edad:</strong>

                {campoEditar === "edad" ? (
                    <>
                        <input
                            value={nuevoValor}
                            onChange={(e) => setNuevoValor(e.target.value)}
                        />

                        <button onClick={() => editarCampo("edad")}>
                            Guardar
                        </button>

                        <button onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.edad}

                        <button
                            onClick={() => {
                                setCampoEditar("edad");
                                setNuevoValor(mascota.edad);
                            }}
                        >
                            Editar
                        </button>
                        
                    </>
                )}
            </p>

            <p>
                <strong>Raza:</strong>

                {campoEditar === "raza" ? (
                    <>
                        <input
                            value={nuevoValor}
                            onChange={(e) => setNuevoValor(e.target.value)}
                        />

                        <button onClick={() => editarCampo("raza")}>
                            Guardar
                        </button>

                        <button onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.raza}

                        <button
                            onClick={() => {
                                setCampoEditar("raza");
                                setNuevoValor(mascota.raza);
                            }}
                        >
                            Editar
                        </button>
                        
                    </>
                )}
            </p>

            <p>
                <strong>Sexo:</strong>

                {campoEditar === "sexo" ? (
                    <>
                        <select value={selectedSexo} onChange={(e) => setNuevoValor(e.target.value)}>
                            <option value={""} >Sin estado</option>
                            {
                                sexo.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                            }
                        </select>

                        <button onClick={() => editarCampo("sexo")}>
                            Guardar
                        </button>

                        <button onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.sexo}

                        <button
                            onClick={() => {
                                setCampoEditar("sexo");
                                setNuevoValor(mascota.sexo);
                            }}
                        >
                            Editar
                        </button>
                        
                    </>
                )}
            </p>

            <p>
                <strong>Tamano:</strong>

                {campoEditar === "tamano" ? (
                    <>
                        <select value={selectedTamano} onChange={(e) => setNuevoValor(e.target.value)}>
                            <option value={""} >desconocido</option>
                            {
                                tamano.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                            }
                        </select>

                        <button onClick={() => editarCampo("tamano")}>
                            Guardar
                        </button>

                        <button onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.tamano}

                        <button
                            onClick={() => {
                                setCampoEditar("tamano");
                                setNuevoValor(mascota.tamano);
                            }}
                        >
                            Editar
                        </button>
                        
                    </>
                )}
            </p>

        </div>
    </>
  );
}

export default MascotasEditar;