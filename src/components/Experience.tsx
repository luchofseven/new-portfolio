export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <header className="section-title">
        <h2>EXPERIENCIA</h2>
      </header>

      <article className="experience-container">
        <div className="experience-article">
          <h4>Desarrollador Web Full Stack</h4>
          <div className="experience-work-info">
            <span className="experience-worksite">ECOMENU - Freelance</span>
            <span className="experience-workdate">
              Agosto 2023 - Actualidad
            </span>
          </div>

          <div className="experience-work-info-list">
            <ul>
              <li>
                Diseñamos y desarrollamos la interfaz de usuario del sistema con
                React, TypeScript y Tailwind, logrando una experiencia fluida y
                moderna para los restaurantes.
              </li>
              <li>Implementamos estados globales con Redux Toolkit.</li>
              <li>Realizamos peticiones a la API con RTK Query.</li>
              <li>Aplicamos mejoras en el backend con NestJS y MySQL.</li>
            </ul>
          </div>
        </div>

        <div className="experience-article">
          <h4>Desarrollador Web</h4>
          <div className="experience-work-info">
            <span className="experience-worksite">midudev - Freelance</span>
            <span className="experience-workdate">
              Octubre 2024 - Noviembre 2024
            </span>
          </div>

          <div className="experience-work-info-list">
            <ul>
              <li>
                Implementamos componentes reutilizables para el footer y la
                sección “Los trabajos más cool”, optimizando el código con Astro
                y Tailwind.
              </li>
              <li>
                Construimos una modal en la sección “Prepárate para ganar”.
              </li>
              <li>
                Optimizamos la búsqueda de palabras clave mediante una API y una
                función de debouncing, mejorando la velocidad y precisión de las
                sugerencias.
              </li>
              <li>
                Maquetamos y estilamos la página en general, con Astro y
                Tailwind CSS.
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
