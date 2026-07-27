import { useEffect, useState } from "react";
import api from "../../services/api";
import "./MascotasEditar.css";

function MascotasEditar() {
    //select api choices
    const [estados, setEstados] = useState([]);
    const [tipoMascota, setTipoMascota] = useState([]);
    const [sexo, setSexo] = useState([]);
    const [tamano, setTamano] = useState([]);
    //editar campos
    const [campoEditar, setCampoEditar] = useState("");
    const [nuevoValor, setNuevoValor] = useState("");
    //buscar mascota
    const [idBusqueda, setIdBusqueda] = useState("");
    const [mascota, setMascota] = useState([]);
    //errores
    const [error, setError] = useState("");

    const fetchEditarMascota = async (id) => {
        try {
            const response = await api.get(`mascotas/${id}`);
            console.log(response.data);
            setMascota(response.data);

        }catch (error) {
            console.error(error);
            manejarError(error);
        }
    }
    
    const editarCampo = async (campo) => {
        try {
            await api.patch(`mascotas/${mascota.id}/`, {

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
            const response = await api.get('choices/');

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

    useEffect(()=>{
        fetchChoices();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (idBusqueda.trim() === "") {
            setError("Debe ingresar un ID.");
            return;
        }
        if (!idBusqueda) return;
        fetchEditarMascota(idBusqueda);
        setError(""); // Limpiar el mensaje de error al realizar la busqueda
    }

  return (
    <div className="contenedor">
        <div className="bloque">
            <h2 className="titulo">Editar Mascotas</h2>
            {/* Buscador por id */}
            <form className="buscador" onSubmit={handleSubmit}>
                <label className="etiqueta">
                ID de la mascota:
                <input
                    className="entrada"
                    type="number"
                    placeholder="Ej: 87"
                    value={idBusqueda}
                    onChange={(e) => setIdBusqueda(e.target.value)}
                />
                </label>
                <button className="boton">Buscar Mascota</button>
                <p className="mensajeerror">{error}</p>
            </form>
        </div>

        {mascota.id ? (
        <div className="tarjeta">
            <h3 className="subtitulo">Editando: {mascota.nombre}</h3>

            <p className="linea">
                <strong className="negrita">Nombre:</strong>

                {campoEditar === "nombre" ? (
                    <>
                        <input
                            className="entrada"
                            value={nuevoValor}
                            onChange={(e) => setNuevoValor(e.target.value)}
                        />

                        <button className="botonguardar" onClick={() => editarCampo("nombre")}>
                            Guardar
                        </button>

                        <button className="botoncancelar" onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.nombre}

                        <button
                            className="botoneditar"
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

            <p className="linea">
                <strong className="negrita">Descripción:</strong>

                {campoEditar === "descripcion" ? (
                    <>
                        <input
                            className="entrada"
                            value={nuevoValor}
                            onChange={(e) => setNuevoValor(e.target.value)}
                        />

                        <button className="botonguardar" onClick={() => editarCampo("descripcion")}>
                            Guardar
                        </button>

                        <button className="botoncancelar" onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.descripcion}

                        <button
                            className="botoneditar"
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
            <img className="imagen" src={mascota?.imagen} alt={mascota?.nombre} />

            <p className="linea">
                <strong className="negrita">Estado:</strong>

                {campoEditar === "estado" ? (
                    <>
                        <select className="desplegable" value={nuevoValor} onChange={(e) => setNuevoValor(e.target.value)}>
                            <option value={""} >Sin estado</option>
                            {
                                estados.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                            }
                        </select>

                        <button className="botonguardar" onClick={() => editarCampo("estado")}>
                            Guardar
                        </button>

                        <button className="botoncancelar" onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.estado}

                        <button
                            className="botoneditar"
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

            <p className="linea">
                <strong className="negrita">Tipo Animal:</strong>

                {campoEditar === "tipo_animal" ? (
                    <>
                        <select className="desplegable" value={nuevoValor} onChange={(e) => setNuevoValor(e.target.value)}>
                            <option value={""} >Sin estado</option>
                            {
                                tipoMascota.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                            }
                        </select>

                        <button className="botonguardar" onClick={() => editarCampo("tipo_animal")}>
                            Guardar
                        </button>

                        <button className="botoncancelar" onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.tipo_animal}

                        <button
                            className="botoneditar"
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

            <p className="linea">
                <strong className="negrita">Edad:</strong>

                {campoEditar === "edad" ? (
                    <>
                        <input
                            className="entrada"
                            value={nuevoValor}
                            onChange={(e) => setNuevoValor(e.target.value)}
                        />

                        <button className="botonguardar" onClick={() => editarCampo("edad")}>
                            Guardar
                        </button>

                        <button className="botoncancelar" onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.edad}

                        <button
                            className="botoneditar"
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

            <p className="linea">
                <strong className="negrita">Raza:</strong>

                {campoEditar === "raza" ? (
                    <>
                        <input
                            className="entrada"
                            value={nuevoValor}
                            onChange={(e) => setNuevoValor(e.target.value)}
                        />

                        <button className="botonguardar" onClick={() => editarCampo("raza")}>
                            Guardar
                        </button>

                        <button className="botoncancelar" onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.raza}

                        <button
                            className="botoneditar"
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

            <p className="linea">
                <strong className="negrita">Sexo:</strong>

                {campoEditar === "sexo" ? (
                    <>
                        <select className="desplegable" value={nuevoValor} onChange={(e) => setNuevoValor(e.target.value)}>
                            <option value={""} >Sin estado</option>
                            {
                                sexo.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                            }
                        </select>

                        <button className="botonguardar" onClick={() => editarCampo("sexo")}>
                            Guardar
                        </button>

                        <button className="botoncancelar" onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.sexo}

                        <button
                            className="botoneditar"
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

            <p className="linea">
                <strong className="negrita">Tamano:</strong>

                {campoEditar === "tamano" ? (
                    <>
                        <select className="desplegable" value={nuevoValor} onChange={(e) => setNuevoValor(e.target.value)}>
                            <option value={""} >desconocido</option>
                            {
                                tamano.map(e => <option value={e.value} key={e.value}>{e.label}</option>)
                            }
                        </select>

                        <button className="botonguardar" onClick={() => editarCampo("tamano")}>
                            Guardar
                        </button>

                        <button className="botoncancelar" onClick={() => setCampoEditar("")}>
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        {mascota.tamano}

                        <button
                            className="botoneditar"
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
        ) : (
            <p className="vacio">No hay mascota para mostrar.</p>
        )}
    </div>
  );
}

export default MascotasEditar;