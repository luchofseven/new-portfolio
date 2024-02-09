export default function AboutMe (): JSX.Element {
  return (
    <section id="about-me" className="section-container">
      <header className="section-title">
        <h2>SOBRE MÍ</h2>
      </header>
      <main className="about-me-container">
        <section className="about-me-container-section">
          <p>👋 ¡Hola! Soy Luciano.</p>
          <p>
            🧑‍💻 Tengo más de 2 años de experiencia utilizando tecnologías como:{' '}
            <i>HTML, CSS, Sass, JavaScript, React</i>. También hago uso de{' '}
            <i>Next.Js, Tailwind, TypeScript, Node, NestJS</i>, entre otros.
          </p>
          <p>
            🚀 Actualmente estoy realizando aplicaciones <i>full-stack</i>, con
            tecnologías como <i>React, TypeScript, NestJS y MYSQL</i>, con el
            fin de abarcar por completo el ecosistema de desarrollo web.
          </p>
          <p>
            🎯 Estoy dispuesto y me encantaría formar parte de una empresa o
            contribuir a un proyecto en conjunto.
          </p>
          <p>
            ✉️ Cualquiera sean tus dudas podés contactarme a través de mis
            medios de
            <span>
              <a href="#contact"> contacto</a>
            </span>
            .
          </p>
          <p>¡Gracias! 😁</p>
        </section>
      </main>
    </section>
  )
}
