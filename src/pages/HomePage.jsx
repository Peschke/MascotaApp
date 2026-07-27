import { NavLink } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="inicio">
      <section className="principal">
        <h1>Bienvenido a la Red de Mascotas</h1>
        <p>
          Encuentra publicaciones sobre mascotas en adopción, perdidas o historias de la comunidad. 
        </p>
        
        <div className="acciones">
          <NavLink to="/mascotas" className="boton">
            Ver todas las mascotas
          </NavLink>
          
          <NavLink to="/mascotas/nueva" className="boton">
            Publicar una mascota
          </NavLink>
        </div>
      </section>

      <section className="bloques">
        <div className="tarjeta">
          <h3>Registro</h3>
          <p>Explora publicaciones detalladas con fotos e información sobre cada mascota.</p>
        </div>

        <div className="tarjeta">
          <h3>Comunidad</h3>
          <p>Comenta en las publicaciones de otros usuarios.</p>
        </div>

        <div className="tarjeta">
          <h3>Publicación Fácil</h3>
          <p>Agrega a tu mascota desde nuestra API.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;