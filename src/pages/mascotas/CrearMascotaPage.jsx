import { useNavigate } from "react-router-dom"
import MascotasForm from "../../components/mascotas/MascotasForm"

function CrearMascotaPage() {
    const navigate = useNavigate()

    const ManejoMascotaCreada = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>Registrar Mascota</h1>
            <MascotasForm onMascotaCreada={ManejoMascotaCreada} />
        </div>
    )
}

export default CrearMascotaPage