import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {

  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <p className="navbar-brand"><NavLink to="/">David Lopez</NavLink></p>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <li><NavLink to="/">Inicio</NavLink></li>
        </li>
        <li className="nav-item">
        <li><NavLink to="/about">Sobre mi</NavLink></li>
        </li>
        <li className="nav-item">
        <li><NavLink to="/proyectos">Mis proyectos</NavLink></li>
        </li>
        <li className="nav-item">
        <li><NavLink to="/contacto">¡Contactame!</NavLink></li>
        </li>
      </ul>     
    </div>
  </div>
</nav>

    </div>
  )
}
