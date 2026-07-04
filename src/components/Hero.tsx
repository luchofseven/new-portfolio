import { ArrowRightIcon, DownloadIcon, EmailIcon } from '../icons/Icons';

export default function Hero(): JSX.Element {
  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* <span className="hero-badge">
          <span className="hero-badge-dot" />
          Disponible para nuevos proyectos
        </span> */}

        <p className="hero-role">&lt;desarrollador full&nbsp;stack /&gt;</p>

        <h1 className="hero-title">
          Luciano
          <span className="hero-title-gradient">Fernández</span>
        </h1>

        <p className="hero-description">
          Te ayudo a escalar tu marca o negocio construyendo aplicaciones web de
          una manera eficiente y optimizada.{' '}
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Ver proyectos
            <ArrowRightIcon />
          </a>
          <a href="#contact" className="btn btn-ghost">
            <EmailIcon />
            Contactarme
          </a>
          <a
            href="/cv-luciano-fernandez.pdf"
            download
            className="btn btn-outline"
          >
            <DownloadIcon />
            CV
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">2+</span>
            <span className="hero-stat-label">años de exp.</span>
          </div>
          <span className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">5+</span>
            <span className="hero-stat-label">proyectos</span>
          </div>
        </div>
      </div>

      <div className="hero-photo">
        <span className="hero-photo-glow" />
        <span className="hero-photo-ring" />
        <img src="/me.webp" alt="Foto de Luciano Fernández" />
      </div>
    </section>
  );
}
