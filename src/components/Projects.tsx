import Card from './Card'

export default function Projects (): JSX.Element {
  return (
    <section id="projects" className="section-container">
      <header className="section-title">
        <h2>PROYECTOS</h2>
      </header>
      <main className="projects-projects">
        <Card
          img="/project-ecomenuapp.webp"
          title="ECOMENU App"
          urlDeploy="https://ecomenuapp.com/"
          lastProject={true}
        >
          <p>
            Aplicación web para la administración de bares y/o restaurantes.
            Actualmente utilizada por bares locales. Construído con React,
            TypeScript, Redux, Tailwind, NestJS, TypeORM, MySQL, etc.
          </p>
        </Card>
        <Card
          img="/project-tesla-landing.webp"
          title="Tesla Clon"
          urlDeploy="https://tesla-clone-henna-nine.vercel.app/"
          urlRepo="https://github.com/luchofseven/tesla-clone"
        >
          <p>
            Clonación del sitio web de Tesla. En base a un stream de @midudev.
            Construído con Astro y Tailwind.
          </p>
        </Card>
        <Card
          img="/project-todo-app.webp"
          title="Lista de Tareas"
          urlDeploy="https://todo-app-next-woad.vercel.app/"
          urlRepo="https://github.com/luchofseven/crud-nextjs-tailwind"
        >
          <p>
            Aplicación tipo agenda o anotador, en la cual se pueden agregar,
            editar o eliminar dichas tareas. Construído con Next.Js y Tailwind.
          </p>
        </Card>
        <Card
          img="/project-search-movies-app.webp"
          title="Buscador de películas y series"
          urlDeploy="https://movies-search-app-phi.vercel.app/"
          urlRepo="https://github.com/luchofseven/movies-search-app"
        >
          <p>
            Realizado con React, implementando &quot;debouncing&quot;, para que
            la búsqueda se ejecute de forma automática luego de transcurrido
            algunos segundos.
          </p>
        </Card>
        <Card
          img="/project-mohana.webp"
          title="Mohana Indumentaria"
          urlDeploy="https://luchofseven.github.io/mohana-indumentaria/"
          urlRepo="https://github.com/luchofseven/mohana-indumentaria"
        >
          <p>
            Catálogo de Mohana Indumentaria. Utilizando Firestore para alojar
            los productos. Sitio construído con JavaScript y Firebase.
          </p>
        </Card>
      </main>
    </section>
  )
}
