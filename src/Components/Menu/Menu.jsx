import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./Menu.module.css";
export const Menu = () => {
  return (
    <div>
    <ul>
      <li className={s.menuLi}><NavLink to="/">Incio</NavLink></li>
      <li className={s.menuLi}><NavLink to="/about">Sobre mi</NavLink></li>
      <li className={s.menuLi}><NavLink to="/proyectos">Mis proyectos</NavLink></li>
      <li className={s.menuLi}><NavLink to="/contacto">¡Contactame!</NavLink></li>
    </ul>
    </div>
  )
}
