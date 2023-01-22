import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Menu.module.css'
export const Menu = () => {
  return (
    <div>
    <ul>
     
      <li><NavLink to="/about">Sobre mi</NavLink></li>
   
      <li><NavLink to="/proyectos">Mis proyectos</NavLink></li>
      <li><NavLink to="/cv">Mi CV</NavLink></li>
      <li><NavLink to="/contacto">¡Contactame!</NavLink></li>
    </ul>
    </div>
  )
}
