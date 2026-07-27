import { useNavigate } from "react-router-dom";
import MascotasForm from "../../components/mascotas/MascotasForm";
import "./CrearMascotaPage.css";

function CrearMascotaPage() {
    const navigate = useNavigate();

    const ManejoMascotaCreada = () => {
        navigate("/");
    };

    return (
        <div className="pagina">
            <h1 className="titulo"></h1>
            <div className="bloque">
                <MascotasForm onMascotaCreada={ManejoMascotaCreada} />
            </div>
        </div>
    );
}

export default CrearMascotaPage;