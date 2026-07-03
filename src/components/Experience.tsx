'use client';

import { useState } from 'react';

interface Job {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

const experience: Job[] = [
  {
    role: 'Desarrollador Web Full Stack',
    company: 'ECOMENU · Freelance',
    period: 'Ago 2023 — Actualidad',
    current: true,
    bullets: [
      'Diseño y desarrollo de la UI del sistema con React, TypeScript y Tailwind, logrando una experiencia fluida y moderna para restaurantes.',
      'Manejo de estado global con Redux Toolkit y peticiones con RTK Query.',
      'Mejoras en el backend con NestJS y MySQL.',
    ],
  },
  {
    role: 'Desarrollador Web',
    company: 'midudev · Freelance',
    period: 'Oct 2024 — Nov 2024',
    bullets: [
      'Componentes reutilizables para el footer y la sección “Los trabajos más cool” con Astro y Tailwind.',
      'Construcción de una modal en la sección “Prepárate para ganar”.',
      'Búsqueda optimizada con API + debouncing para mejorar velocidad y precisión de las sugerencias.',
    ],
  },
];

export default function Experience(): JSX.Element {
  const [hovered, setHovered] = useState<string | null>(null);

  const dimClass = (role: string): string =>
    hovered !== null && hovered !== role ? 'is-dimmed' : '';

  return (
    <section id="experience" className="section-container">
      <p className="section-eyebrow">{'// 01 — trayectoria'}</p>
      <h2 className="section-title">Experiencia</h2>

      <div className="experience-grid">
        {experience.map((job) => (
          <article
            key={job.role}
            className={`experience-card ${dimClass(job.role)}`}
            onMouseEnter={() => {
              setHovered(job.role);
            }}
            onMouseLeave={() => {
              setHovered(null);
            }}
          >
            <div className="experience-card-head">
              <h3>{job.role}</h3>
              {job.current === true && (
                <span className="experience-tag">ACTUAL</span>
              )}
            </div>
            <p className="experience-company">{job.company}</p>
            <p className="experience-period">{job.period}</p>
            <ul className="experience-bullets">
              {job.bullets.map((bullet) => (
                <li key={bullet}>
                  <span className="experience-bullet-mark">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
