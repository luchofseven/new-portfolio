'use client';

import { useState } from 'react';

interface Project {
  name: string;
  desc: string;
  tags: string[];
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    name: 'ECOMENU App',
    desc: 'Aplicación web para administración de bares y restaurantes. Actualmente utilizada por +30 negocios.',
    tags: ['React', 'TypeScript', 'Redux', 'Tailwind', 'Node.js', 'MySQL'],
    image: '/project-ecomenuapp.webp',
    url: 'https://ecomenuapp.com/',
  },
  {
    name: 'App de encomiendas',
    desc: 'Plataforma para administrar un servicio de encomiendas o paquetería.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'],
    image: '/project-shipping-service.webp',
    url: 'https://shipping-service-front.vercel.app/',
  },
  {
    name: 'InfoJobs',
    desc: 'Landing de InfoJobs desarrollada en equipo de 4, liderado por @midudev.',
    tags: ['Astro', 'Tailwind', 'TypeScript'],
    image: '/project-infojobs-landing.webp',
    url: 'https://primer-trabajo.infojobs.net/',
  },
  {
    name: 'Tesla Clon',
    desc: 'Clonación del sitio de Tesla, en base a un stream de @midudev.',
    tags: ['Astro', 'Tailwind'],
    image: '/project-tesla-landing.webp',
    url: 'https://tesla-clone-henna-nine.vercel.app/',
  },
  {
    name: 'Lista de Tareas',
    desc: 'App tipo agenda/anotador: agregar, editar y eliminar tareas.',
    tags: ['Next.js', 'Tailwind'],
    image: '/project-todo-app.webp',
    url: 'https://todo-app-next-woad.vercel.app/',
  },
];

export default function Projects(): JSX.Element {
  const [hovered, setHovered] = useState<string | null>(null);

  const [featured, ...rest] = projects;

  const dimClass = (name: string): string =>
    hovered !== null && hovered !== name ? 'is-dimmed' : '';

  return (
    <section id="projects" className="section-container">
      <p className="section-eyebrow">{'// 02 — trabajos seleccionados'}</p>
      <h2 className="section-title">Proyectos</h2>

      <div className="projects-layout">
        <a
          href={featured.url}
          target="_blank"
          rel="noreferrer"
          className={`project-featured ${dimClass(featured.name)}`}
          onMouseEnter={() => {
            setHovered(featured.name);
          }}
          onMouseLeave={() => {
            setHovered(null);
          }}
        >
          <div className="project-featured-img">
            <img src={featured.image} alt={featured.name} />
            {/* <span className="project-featured-badge">★ Proyecto principal</span> */}
          </div>
          <div className="project-featured-body">
            <h3>{featured.name}</h3>
            <p>{featured.desc}</p>
            <div className="project-tags">
              {featured.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <span className="project-link">
              visitar sitio <span aria-hidden="true">→</span>
            </span>
          </div>
        </a>

        <div className="projects-grid">
          {rest.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={`project-card ${dimClass(project.name)}`}
              onMouseEnter={() => {
                setHovered(project.name);
              }}
              onMouseLeave={() => {
                setHovered(null);
              }}
            >
              <div className="project-card-img">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-card-body">
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
