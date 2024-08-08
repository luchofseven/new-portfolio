'use client'

import { GithubIcon, VisitWebsiteIcon } from '@/icons/Icons'
import { useState } from 'react'

interface CardInfo {
  img: string
  title: string
  description: string
  urlDeploy: string
  urlRepo?: string
  lastProject?: boolean
}

export default function Card ({
  img,
  title,
  description,
  urlDeploy,
  urlRepo,
  lastProject = false
}: CardInfo): JSX.Element {
  const [cardInfo, setCardInfo] = useState(false)

  const handleOnMouseEnter = () => {
    setCardInfo(true)
  }

  const handleOnMouseLeave = () => {
    setCardInfo(false)
  }

  return (
    <article
      className="projects-card"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {lastProject && (
        <div className={`${lastProject ? 'last-project' : ''}`}>
          <p>¡Último proyecto!</p>
        </div>
      )}
      <div className="projects-card-img">
        <a href={urlDeploy} rel="noreferrer" target="_blank">
          <span />
          <img src={img} alt={`Foto portada del proyecto ${title}`} />
        </a>
      </div>
      <div className={`projects-card-info ${cardInfo ? 'is-active' : ''}`}>
        <div className='projects-card-info-container'>
          <h3>{title}</h3>
          <p>{description}</p>
          <footer>
            <a href={urlDeploy} rel="noreferrer" target="_blank">
              <VisitWebsiteIcon />
              Visitar
            </a>
            {urlRepo !== undefined && (
              <a href={urlRepo} rel="noreferrer" target="_blank">
                <GithubIcon />
                GitHub
              </a>
            )}
          </footer>
        </div>
      </div>
    </article>
  )
}
