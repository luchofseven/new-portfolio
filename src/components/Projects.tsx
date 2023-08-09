import Card from './Card'

export default function Projects (): JSX.Element {
  return (
        <section id='projects' className="section-container">
        <header className="section-title">
          <h2>PROYECTOS</h2>
        </header>
        <main className="projects-projects">
          <Card
            img='/project-municipalidad-vera.webp'
            title='Muncipalidad de Vera'
            description='Sitio web de la Municipalidad de Vera. En el cual se realizó un rediseño de la página actual. Construído con React y TypeScript.'
            urlDeploy='https://municipalidad-vera.vercel.app/'
            urlRepo='https://github.com/luchofseven/municipalidad-vera'
          />
          <Card
          img='/project-tesla-landing.webp'
            title='Tesla Landing Clone'
            description='Clonación del sitio web de Tesla. En base a un stream de @midudev. Construído con Astro y Tailwind.'
            urlDeploy='https://tesla-clone-henna-nine.vercel.app/'
            urlRepo='https://github.com/luchofseven/tesla-clone'
          />
          <Card
          img='/project-todo-app.webp'
            title='TO-DO App'
            description='"Lista de tareas", en el cual se pueden agregar, editar o eliminar las mismas. Construído con Next.Js y Tailwind.'
            urlDeploy='https://todo-app-next-woad.vercel.app/'
            urlRepo='https://github.com/luchofseven/crud-nextjs-tailwind'
          />
          <Card
          img='/project-search-movies-app.webp'
            title='Movies Search App'
            description='Sitio web para buscar y listar películas y series. El mismo está realizado con React, haciendo uso de hooks y también la implementación de un debounce, para que al escribir la búsqueda, la petición se haga de forma automática luego de haber transcurrido algunos segundos.'
            urlDeploy='https://movies-search-app-phi.vercel.app/'
            urlRepo='https://github.com/luchofseven/movies-search-app'
          />
          <Card
          img='/project-bonsai.webp'
            title='Bonsai Clone'
            description='Clonación del sitio web de Bonsai, en el cual se puede elegir y simular el cambio de planes y precios. Proyecto obtenido de "Front-end Practice". El sitio está construído con React y Sass.'
            urlDeploy='https://bonsai-proyecto-react.vercel.app/'
            urlRepo='https://github.com/luchofseven/bonsai-proyecto-react'
          />
          <Card
          img='/project-mohana-indumentaria.webp'
            title='Mohana Indumentaria'
            description='Proyecto a modo de simular un comercio electrónico, dónde se pueden ver los productos disponibles, su stock, sus talles, así como también poder añadirlos al carrito de compras. Sitio construído con React y Firebase.'
            urlDeploy='https://mohana-proyecto-react.vercel.app/'
            urlRepo='https://github.com/luchofseven/mohana-proyecto-react'
          />
          <Card
          img='/project-mohana.webp'
            title='Mohana Indumentaria'
            description='Catálogo de Mohana Indumentaria. Utilizando Firestore para alojar los productos. Sitio construído con JavaScript y Firebase.'
            urlDeploy='https://luchofseven.github.io/mohana-indumentaria/'
            urlRepo='https://github.com/luchofseven/mohana-indumentaria'
          />
        </main>
      </section>
  )
}
