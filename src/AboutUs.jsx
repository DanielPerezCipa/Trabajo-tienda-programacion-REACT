import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>¡Bienvenido a Paradise Nursery,</h1>
          <p>donde el verde se encuentra con la serenidad!</p>
        </div>
      </section>

      {/* SECCIÓN 1 */}
      <section className="section">
        <h2>Sobre nosotros</h2>
        <div className="section-content">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNvSbBRnx40soHLYHO5mhnbMJy5_bGhKn_Rg&s"
            alt="Plants"
          />
          <p>
            En Viveros Paradise, nos apasiona acercarte la naturaleza. Nuestra misión es ofrecer una amplia gama de plantas de alta calidad que no solo realzan la belleza de tu entorno, sino que también contribuyen a un estilo de vida más saludable y sostenible. Desde plantas purificadoras de aire hasta plantas aromáticas, tenemos algo para todos los amantes de las plantas.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2 */}
      <section className="section dark">
        <h2>Nuestro equipo</h2>
        <div className="section-content reverse">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU18EMyeOyuF_F0ROFlRPvJyNeoHmt7fH0Pw&s"
            alt="Nursery"
          />
          <p>
           Nuestro equipo de expertos se dedica a garantizar que cada planta cumpla con nuestros estrictos estándares de calidad y cuidado.
Tanto si eres un jardinero experimentado como si estás empezando tu camino hacia la jardinería ecológica, estamos aquí para apoyarte en cada paso. Explora nuestra colección, haz preguntas y déjanos ayudarte a encontrar la planta perfecta para tu hogar u oficina.
          </p>
        </div>
      </section>

      {/* SECCIÓN 3 */}
      <section className="section">
        <h2>Nuestra Mision</h2>
        <div className="section-content">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtKaANYhObMNPMpGYFgycHkWtFMR9O4aAug&s"
            alt="Sustainability"
          />
          <p>
            Únete a nuestra misión de crear un mundo más verde y saludable. Visita Paradise Nursery hoy mismo y experimenta la belleza de la naturaleza a tu alcance.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
