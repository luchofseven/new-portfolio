'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MenuCloseIcon, MenuOpenIcon } from '../icons/Icons';

export default function Navbar(): JSX.Element {
  const [menu, setMenu] = useState(false);

  const toggleMenu = (): void => {
    setMenu((isOpen) => !isOpen);
  };

  const closeMenu = (): void => {
    setMenu(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-nav-container">
        <aside className="navbar-aside">
          <a href="#" onClick={closeMenu}>
            <Image
              src="/lf-logo.webp"
              alt="Logo de Luciano Fernández"
              width={100}
              height={100}
            />
            {/* <span className="navbar-handle">luchofseven</span> */}
          </a>
        </aside>

        <button
          className="navbar-toggle"
          type="button"
          aria-label={menu ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menu}
          onClick={toggleMenu}
        >
          {menu ? <MenuOpenIcon /> : <MenuCloseIcon />}
        </button>

        <div className={`navbar-nav ${menu ? 'is-active' : ''}`}>
          <ul className="navbar-links" onClick={closeMenu}>
            <li>
              <a href="#experience">experiencia</a>
            </li>
            <li>
              <a href="#projects">proyectos</a>
            </li>
            <li>
              <a href="#about-me">sobre&nbsp;mí</a>
            </li>
            <li>
              <a href="#tech-stack">tecnologías</a>
            </li>
          </ul>
          <a href="#contact" className="navbar-cta" onClick={closeMenu}>
            contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
