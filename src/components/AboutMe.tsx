import TechStack from './TechStack'

export default function AboutMe (): JSX.Element {
  return (
    <section id="about-me" className="section-container">

      <header className="section-title">
        <h2>SOBRE MÍ</h2>
      </header>

      <main className="about-me-container">

        <section className="about-me-container-section">

          <div>
            <img
              src="/vectors/computadora-3d.png"
              alt="vector computadora 3d"
            />
            <p>
              Tengo más de 2 años de experiencia utilizando tecnologías como:{' '}
              <i>HTML, CSS, Sass, JavaScript, React</i>. También hago uso de{' '}
              <i>Next.Js, Tailwind, TypeScript, Node, NestJS</i>, entre otros.
            </p>
          </div>

          <div>
            <img
              src="/vectors/cohete-3d.png"
              alt="vector cohete 3d"
              className="vector-rocket"
            />
            <p>
              Actualmente estoy realizando aplicaciones <i>full-stack</i>, con
              tecnologías como <i>React, TypeScript, NestJS y MYSQL</i>, con el
              fin de abarcar por completo el ecosistema de desarrollo web.
            </p>
          </div>

          <div>
            <img src="/vectors/objetivo-3d.png" alt="vector objetivo 3d" />
            <p>
              Estoy dispuesto y me encantaría formar parte de una empresa o
              contribuir a un proyecto en conjunto.
            </p>
          </div>

          <p>
            Cualquiera sean tus dudas podés contactarme a través de mis medios
            de
            <span>
              <a href="#contact"> contacto</a>
            </span>
            .
          </p>

          <p>¡Gracias por tu atención!</p>

        </section>

        <article className="about-me-container-article-first">

          <h2>PASATIEMPOS</h2>

          <div>
            <img
              src="/vectors/palanca-de-mando-3d.png"
              alt="vector palanca de mando 3d"
              className="hobbies-image"
            />
            <aside className="hobbies-grid">
              <span>
                <span className="shadow"></span>
                <img
                  src="/hobbies/btf2042.png"
                  alt="icono de battlefield 2042"
                />
              </span>
              <span>
                <span className="shadow"></span>
                <img src="/hobbies/btf5.jpg" alt="icono de battlefield 5" />
              </span>
              <span>
                <span className="shadow"></span>
                <img src="/hobbies/btf1.webp" alt="icono de battlefield 1" />
              </span>
              <span>
                <span className="shadow"></span>
                <img src="/hobbies/btf4.jpg" alt="icono de battlefield 4" />
              </span>
              <span>
                <span className="shadow"></span>
                <img src="/hobbies/cs2.png" alt="icono de counter-strike 2" />
              </span>
            </aside>
          </div>

        </article>

        <article className="about-me-container-article-second">
          <TechStack />
        </article>

      </main>

    </section>
  )
}
