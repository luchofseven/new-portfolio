import TechStack from './TechStack';

export default function AboutMe(): JSX.Element {
  return (
    <section id="about-me" className="section-container">
      <header className="section-title"> </header>

      <main className="about-me-container">
        <section className="about-me-container-section">
          <h2>SOBRE MÍ</h2>
          <div>
            <picture>
              <source srcSet="/vectors/computadora-3d.avif" type="image/avif" />
              <img
                src="/vectors/computadora-3d.webp"
                alt="vector computadora 3d"
              />
            </picture>
            <p>
              Más de 3 años de experiencia en desarrollo de aplicaciones web.
              Especializado en <i>front end</i>, utilizando tecnologías como:{' '}
              <i>HTML, CSS, Sass, JavaScript, React</i>. También hago uso de{' '}
              <i>Next.Js, Tailwind, TypeScript, Node, NestJS, TypeORM</i>, entre
              otros.
            </p>
          </div>

          <div>
            <picture>
              <source srcSet="/vectors/cohete-3d.avif" type="image/avif" />
              <img
                src="/vectors/cohete-3d.webp"
                alt="vector cohete 3d"
                className="vector-rocket"
              />
            </picture>
            <p>
              Actualmente realizando aplicaciones <i>full stack</i>, con{' '}
              <i>React, TypeScript, NestJS y MYSQL o PostgreSQL</i>.
            </p>
          </div>

          <div>
            <picture>
              <source srcSet="/vectors/objetivo-3d.avif" type="image/avif" />
              <img src="/vectors/objetivo-3d.webp" alt="vector objetivo 3d" />
            </picture>
            <p>
              Estoy dispuesto y me encantaría formar parte de una empresa o
              contribuir a un proyecto en conjunto.
            </p>
          </div>

          <p className="contact">
            Cualquiera sean tus dudas podés contactarme a través de mis medios
            de
            <span>
              <a href="#contact"> contacto</a>
            </span>
            .
          </p>

          <p className="thanks">¡Gracias por tu atención!</p>
        </section>

        <article className="about-me-container-article-first">
          <h2>PASATIEMPOS</h2>

          <div>
            <picture>
              <source
                srcSet="/vectors/palanca-de-mando-3d.avif"
                type="image/avif"
              />
              <img
                src="/vectors/palanca-de-mando-3d.webp"
                alt="vector palanca de mando 3d"
                className="hobbies-image"
              />
            </picture>
            <aside className="hobbies-grid">
              <span>
                <span className="shadow"></span>
                <picture>
                  <source srcSet="/hobbies/btf2042.avif" type="image/avif" />
                  <img
                    src="/hobbies/btf2042.webp"
                    alt="icono de battlefield 2042"
                  />
                </picture>
              </span>
              <span>
                <span className="shadow"></span>
                <picture>
                  <source srcSet="/hobbies/btf5.avif" type="image/avif" />
                  <img src="/hobbies/btf5.webp" alt="icono de battlefield 5" />
                </picture>
              </span>
              <span>
                <span className="shadow"></span>
                <picture>
                  <source srcSet="/hobbies/btf1.avif" type="image/avif" />
                  <img src="/hobbies/btf1.webp" alt="icono de battlefield 1" />
                </picture>
              </span>
              <span>
                <span className="shadow"></span>
                <picture>
                  <source srcSet="/hobbies/btf4.avif" type="image/avif" />
                  <img src="/hobbies/btf4.webp" alt="icono de battlefield 4" />
                </picture>
              </span>
              <span>
                <span className="shadow"></span>
                <picture>
                  <source srcSet="/hobbies/cs2.avif" type="image/avif" />
                  <img
                    src="/hobbies/cs2.webp"
                    alt="icono de counter-strike 2"
                  />
                </picture>
              </span>
              <span>
                <span className="shadow"></span>
                <picture>
                  <source srcSet="/hobbies/lol.avif" type="image/avif" />
                  <img
                    src="/hobbies/lol.webp"
                    alt="icono de league of legends"
                  />
                </picture>
              </span>
            </aside>
          </div>
        </article>

        <article className="about-me-container-article-second">
          <TechStack />
        </article>
      </main>
    </section>
  );
}
