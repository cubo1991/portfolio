import React from 'react'
import { ColIZq } from '../ColIzq/ColIZq'
import s from "./Contacto.module.css";

export const Contacto = () => {
  
  return (
    <div>
    <div>
      <div className={` container-fluid text-center `}>
        <div className={`row `}>
         <ColIZq/>
          <div className={`col-9 ${s.colD2}`} style={{ padding: "2rem" }}>
            <div className={`row mt-1 p-1`}>
              <h3> ¡Estemos en contacto!</h3>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfGFC0xZSsIwN6tzYdOCvyKqLAYDz8gcfzTKmp6sYyhEpQvmQ/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
             
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
