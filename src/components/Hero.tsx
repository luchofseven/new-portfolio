export default function Hero (): JSX.Element {
  return (
    <section className="hero-container">
      <div className="hero-container-top">
        <article className="hero-container-top-left">
          <h1>
            Luciano Fernández<span>Desarrollador Front-end</span>
          </h1>
          <p>
            ¡Me gusta destacar en los detalles! 😁
            <span>
              Por eso, doy lo mejor de mí para que tu web sea la más bonita, óptima y
              eficiente. 🚀
            </span>
          </p>
          <a href="/lf-cv.pdf" download>Descargar CV</a>
        </article>
        <article className="hero-container-top-right">
          <img src="/me.webp" alt="Foto de Luciano Fernández" />
        </article>
      </div>
      <div className="hero-container-bottom" />
    </section>
  )
}
