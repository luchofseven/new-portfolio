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
            <img src="/vectors/cohete-3d.png" alt="vector cohete 3d" />
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
          <h2>HOBBIES</h2>
          <div>
            <img
              src="/vectors/palanca-de-mando-3d.png"
              alt="vector palanca de mando 3d"
            />
            <p>Jugar videojuegos</p>
          </div>
        </article>
        <article className="about-me-container-article-second">
          <TechStack />
        </article>
      </main>
    </section>
  )
}
