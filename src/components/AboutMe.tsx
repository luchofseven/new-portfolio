import TechStack from './TechStack';

export default function AboutMe(): JSX.Element {
  return (
    <section id="about-me" className="section-container about-me-container">
      <div className="about-me-bio">
        <p className="section-eyebrow">{'// 03 — quién soy'}</p>
        <h2 className="section-title">Sobre mí</h2>
        <p>
          Más de <span className="highlighted">2 años</span> creando
          aplicaciones web. Especializado en el ecosistema de{' '}
          <span className="highlighted">React con TypeScript</span> para el
          frontend, y{' '}
          <span className="highlighted">
            NestJS, TypeORM y MySQL/PostgreSQL
          </span>{' '}
          para el backend.
        </p>
        <p>
          Hoy trabajo como desarrollador full stack en{' '}
          <span className="highlighted">ECOMENU</span>. Me encantaría sumarme a
          un equipo donde pueda seguir creciendo y aportar mi experiencia y
          conocimientos.
        </p>
      </div>

      <TechStack />
    </section>
  );
}
