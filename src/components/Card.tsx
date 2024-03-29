'use client'

import { GithubIcon, VisitWebsiteIcon } from '@/icons/Icons'
import { useState } from 'react'

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
      <div className="projects-card-img">
        <a href={urlDeploy} rel="noreferrer" target="_blank">
          <span />
          <img src={img} alt={`Foto portada del proyecto ${title}`} />
        </a>
      </div>
      <div className={`projects-card-info ${cardInfo ? 'is-active' : ''}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <footer>
          <a href={urlDeploy} rel="noreferrer" target="_blank">
            <VisitWebsiteIcon />
            Visitar
          </a>
          <a href={urlRepo} rel="noreferrer" target="_blank">
            <GithubIcon />
            GitHub
          </a>
        </footer>
      </div>
    </article>
  )
}
