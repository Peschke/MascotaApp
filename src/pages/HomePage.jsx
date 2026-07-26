import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <section>
        <h1>Bienvenido a la Red de Mascotas</h1>
        <p>
          Encuentra publicaciones sobre mascotas en adopción, perdidas o historias de la comunidad. 
        </p>
        
        <div>
        |
          <NavLink to="/mascotas/">
            Ver todas las mascotas
          </NavLink>
        |   |
          <NavLink to="/mascotas/nueva/">
            Publicar una mascota
          </NavLink>
        |
        </div>
      </section>

      {/* Sección de características o accesos rápidos */}
      <section>
        <div>
          <h3>🐕 Registro</h3>
          <p>Explora publicaciones detalladas con fotos e información sobre cada mascota.</p>
        </div>

        <div>
          <h3>💬 Comunidad</h3>
          <p>Comenta en las publicaciones de otros usuarios.</p>
        </div>

        <div>
          <h3>📢 Publicación Fáci</h3>
          <p>Agrega a tu mascotabdesde nuestra API.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;