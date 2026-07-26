import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mascotasApi from "../../services/api";
function MascotasEditar() {

    const [campoEditar, setCampoEditar] = useState("");
    const [nuevoValor, setNuevoValor] = useState("");

    const [idBusqueda, setIdBusqueda] = useState("");
    const [mascota, setMascota] = useState([])

    const [mostrarFormulario, setMostrarFormulario] = useState(false);

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
                
                {mascota?.id && (
                    <button onClick={() => setMostrarFormulario(true)}>
                        Editar Mascota
                    </button>)}

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
                        <input
                            value={nuevoValor}
                            onChange={(e) => setNuevoValor(e.target.value)}
                        />

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

        </div>
    </>
  );
}

export default MascotasEditar;