interface CardInfo {
  img: string
  title: string
  description: string
  urlDeploy: string
  urlRepo: string
}

export default function Card ({
  img,
  title,
  description,
  urlDeploy,
  urlRepo
}: CardInfo): JSX.Element {
  return (
    <article className="projects-card">
      <div className="projects-card-img">
        <a href={urlDeploy} rel="noreferrer" target="_blank">
          <img src={img} alt={`Foto portada del proyecto ${title}`} />
        </a>
      </div>
      <div className="projects-card-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <footer>
          <a href={urlDeploy} rel="noreferrer" target="_blank">
            Despliegue del proyecto
          </a>
          <a href={urlRepo} rel="noreferrer" target="_blank">
            Repositorio en GitHub
          </a>
        </footer>
      </div>
    </article>
  )
}
