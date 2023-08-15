'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { GithubIcon, LinkedinIcon, MenuOpenIcon, MenuCloseIcon } from '../icons/Icons'

export default function Navbar (): JSX.Element {
  const [menu, setMenu] = useState(false)

  const handleClick = (): void => {
    setMenu(!menu)
  }

  const handleClickMenu = (e: MouseEvent): void => {
    const target = e.target as HTMLElement
    if (
      target?.matches('.navbar-nav') ||
      target?.matches('.navbar-nav *') ||
      target?.matches('.navbar-aside *')
    ) {
      setMenu(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickMenu)

    return () => {
      document.removeEventListener('click', handleClickMenu)
    }
  }, [])

  return (
    <header className="navbar-header">
      <aside className="navbar-aside">
        <a href="#">
          <Image
            src="/lf-logo.webp"
            alt="Logo de Luciano Fernández"
            width={100}
            height={100}
          />
        </a>
      </aside>
      <button onClick={handleClick}>{menu ? <MenuOpenIcon /> : <MenuCloseIcon /> }</button>
      <nav className={`navbar-nav ${menu ? 'is-active' : ''}`}>
        <ul>
          <a href="#projects">PROYECTOS</a>
          <a href="#about-me">SOBRE MÍ</a>
          <a href="#contact">CONTACTO</a>
        </ul>
        <article className="navbar-nav-social">
          <a
            href="https://github.com/luchofseven"
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/luchofseven/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
        </article>
      </nav>
    </header>
  )
}
