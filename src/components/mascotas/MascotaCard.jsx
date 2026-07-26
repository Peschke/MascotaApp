function MascotasCard({ listado }) {
    return (
        <>
            {listado.map((m) =>(
                <div key={m.id}>
                    <img src={m.imagen} alt={m.nombre} />
                    <h2>{m.nombre}</h2>
                    <p>{m.descripcion}</p>
                    <p>{m.tipo_animal}</p>
                    <p>{m.estado}</p>
                </div>
            ))}
        </>
    )
}

export default MascotasCard;