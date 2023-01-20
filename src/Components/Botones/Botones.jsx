import React from 'react'
import s from './Botones.module.css'

export const Botones = () => {
  return (
    <div>
        <button className={s.botonContacto}> Contacto </button>
        <button className={s.botonProyectos}> Proyectos </button>
        <button className={s.botonSobreMi}> Sobre mi </button>
        <button className={s.botonOtra1}> Otra1 </button>
        <button className={s.botonOtra2}> Otra2 </button>
      
    </div>
  )
}
