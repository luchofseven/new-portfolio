export default function Footer(): JSX.Element {
  return (
    <section id="contact" className="section-container">
      <div className="contact-card">
        <div className="contact-card-glow" />
        <div className="contact-card-body">
          {/* <p className="section-eyebrow">{'// hablemos'}</p> */}
          <h2 className="contact-title">¿Trabajamos juntos?</h2>
          <p className="contact-text">
            Estoy abierto a oportunidades full-time y proyectos freelance.
            Espero tu contacto para coordinar una charla o reunión.
          </p>
          <div className="contact-actions">
            <a href="mailto:luchofseven@gmail.com" className="btn btn-primary">
              Enviar email
            </a>
            <a
              href="https://github.com/luchofseven"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/luchofseven/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
