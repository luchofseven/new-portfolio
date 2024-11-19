import {
  AstroIcon,
  // JavaScriptIcon,
  MySqlIcon,
  NextJsIcon,
  NodeJsIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon
} from '../../public/svgs/Icons'
import Card from './Card'
import ProjectTech from './ProjectTech'

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
          techProjectStack={
            <>
              <ProjectTech
                name="React"
                backgroundColor="#61dbfb15"
                border="1px solid #61dbfb"
                textColor="#61dbfb"
                icon={<ReactIcon />}
              />
              <ProjectTech
                name="TypeScript"
                backgroundColor="#2d79c715"
                border="1px solid #2d79c7"
                textColor="#2d79c7"
                icon={<TypeScriptIcon />}
              />
              <ProjectTech
                name="Redux"
                backgroundColor="#764abc15"
                border="1px solid #764abc"
                textColor="#764abc"
                icon={<ReduxIcon />}
              />
              <ProjectTech
                name="Tailwind"
                backgroundColor="#38bdf815"
                border="1px solid #38bdf8"
                textColor="#38bdf8"
                icon={<TailwindIcon />}
              />
              <ProjectTech
                name="Node.js"
                backgroundColor="#43853d15"
                border="1px solid #43853d"
                textColor="#43853d"
                icon={<NodeJsIcon />}
              />
              <ProjectTech
                name="MySQL"
                backgroundColor="#00719515"
                border="1px solid #007195"
                textColor="#007195"
                icon={<MySqlIcon />}
              />
            </>
          }
        >
          <p>
            Aplicación web para la administración de bares y/o restaurantes.{' '}
            <span className="highlighted">
              Actualmente utilizada por bares locales
            </span>
            .
          </p>
        </Card>
        <Card
          img="/project-infojobs-landing.webp"
          title="InfoJobs"
          urlDeploy="https://primer-trabajo.infojobs.net/"
          techProjectStack={
            <>
              <ProjectTech
                name="Astro"
                backgroundColor="#ff590415"
                border="1px solid #ff5904"
                textColor="#ff5904"
                icon={<AstroIcon />}
              />
              <ProjectTech
                name="Tailwind"
                backgroundColor="#38bdf815"
                border="1px solid #38bdf8"
                textColor="#38bdf8"
                icon={<TailwindIcon />}
              />
              <ProjectTech
                name="TypeScript"
                backgroundColor="#2d79c715"
                border="1px solid #2d79c7"
                textColor="#2d79c7"
                icon={<TypeScriptIcon />}
              />
            </>
          }
        >
          <p>
            Landing page de{' '}
            <a
              href="https://www.infojobs.net/"
              target="_blank"
              rel="noreferrer"
              className="highlighted"
            >
              InfoJobs
            </a>{' '}
            desarrollada en un equipo de 4 personas, liderado por{' '}
            <a
              href="https://www.twitch.tv/midudev"
              target="_blank"
              rel="noreferrer"
              className="highlighted"
            >
              @midudev
            </a>
            .
          </p>
        </Card>
        <Card
          img="/project-tesla-landing.webp"
          title="Tesla Clon"
          urlDeploy="https://tesla-clone-henna-nine.vercel.app/"
          urlRepo="https://github.com/luchofseven/tesla-clone"
          techProjectStack={
            <>
              <ProjectTech
                name="Astro"
                backgroundColor="#ff590415"
                border="1px solid #ff5904"
                textColor="#ff5904"
                icon={<AstroIcon />}
              />
              <ProjectTech
                name="Tailwind"
                backgroundColor="#38bdf815"
                border="1px solid #38bdf8"
                textColor="#38bdf8"
                icon={<TailwindIcon />}
              />
            </>
          }
        >
          <p>
            Clonación del sitio web de Tesla. En base a un stream de{' '}
            <a
              href="https://www.twitch.tv/midudev"
              target="_blank"
              rel="noreferrer"
              className="highlighted"
            >
              @midudev
            </a>
            .
          </p>
        </Card>
        <Card
          img="/project-todo-app.webp"
          title="Lista de Tareas"
          urlDeploy="https://todo-app-next-woad.vercel.app/"
          urlRepo="https://github.com/luchofseven/crud-nextjs-tailwind"
          techProjectStack={
            <>
              <ProjectTech
                name="Next.js"
                backgroundColor="#ffffff15"
                border="1px solid #ffffff"
                textColor="#ffffff"
                icon={<NextJsIcon />}
              />
              <ProjectTech
                name="Tailwind"
                backgroundColor="#38bdf815"
                border="1px solid #38bdf8"
                textColor="#38bdf8"
                icon={<TailwindIcon />}
              />
            </>
          }
        >
          <p>
            Aplicación tipo agenda o anotador, en la cual se pueden agregar,
            editar o eliminar dichas tareas.
          </p>
        </Card>
        <Card
          img="/project-search-movies-app.webp"
          title="Buscador de películas y series"
          urlDeploy="https://movies-search-app-phi.vercel.app/"
          urlRepo="https://github.com/luchofseven/movies-search-app"
          techProjectStack={
            <>
              <ProjectTech
                name="React"
                backgroundColor="#61dbfb15"
                border="1px solid #61dbfb"
                textColor="#61dbfb"
                icon={<ReactIcon />}
              />
            </>
          }
        >
          <p>
            Implementando &quot;debouncing&quot;, para que la búsqueda se
            ejecute de forma automática luego de transcurrido algunos segundos.
          </p>
        </Card>
        {/* <Card
          img="/project-mohana.webp"
          title="Mohana Indumentaria"
          urlDeploy="https://luchofseven.github.io/mohana-indumentaria/"
          urlRepo="https://github.com/luchofseven/mohana-indumentaria"
          techProjectStack={
            <>
              <ProjectTech
                name="JavaScript"
                backgroundColor="#f0dc4e15"
                border="1px solid #f0dc4e"
                textColor="#f0dc4e"
                icon={<JavaScriptIcon />}
              />
              <ProjectTech
                name="Tailwind"
                backgroundColor="#38bdf815"
                border="1px solid #38bdf8"
                textColor="#38bdf8"
                icon={<TailwindIcon />}
              />
            </>
          }
        >
          <p>
            Catálogo de Mohana Indumentaria. Utilizando Firestore para alojar
            los productos. Sitio construído con JavaScript y Firebase.
          </p>
        </Card> */}
      </main>
    </section>
  )
}
