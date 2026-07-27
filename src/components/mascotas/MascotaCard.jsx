import "./MascotaCard.css";

function MascotasCard({ listado, onVerDetalle }) {
    return (
        <div className="catalogo">
            {listado.map((m) => (
                <div key={m.id} className="ficha">
                    {m.imagen ? <img src={m.imagen} alt={m.nombre} className="foto" /> : null}
                    <h2 className="nombre">{m.nombre}</h2>
                    <p className="texto">{m.descripcion}</p>
                    <p className="tipo"><strong>Tipo:</strong> {m.tipo_animal}</p>
                    <p className="estado"><strong>Estado:</strong> {m.estado}</p>
                    <button type="button" className="boton" onClick={() => onVerDetalle(m.id)}>
                        Ver detalle
                    </button>
                </div>
            ))}
        </div>
    );
}

export default MascotasCard;