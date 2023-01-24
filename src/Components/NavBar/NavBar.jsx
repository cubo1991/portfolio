import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {

  return (
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <p class="navbar-brand"><NavLink to="/">David Lopez</NavLink></p>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <li><NavLink to="/">Inicio</NavLink></li>
        </li>
        <li class="nav-item">
        <li><NavLink to="/about">Sobre mi</NavLink></li>
        </li>
        <li class="nav-item">
        <li><NavLink to="/proyectos">Mis proyectos</NavLink></li>
        </li>
        <li class="nav-item">
        <li><NavLink to="/contacto">¡Contactame!</NavLink></li>
        </li>
      </ul>     
    </div>
  </div>
</nav>

    </div>
  )
}
