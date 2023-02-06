import React, {useState} from 'react'
import { ColIZq } from '../ColIzq/ColIZq'
import s from "./Contacto.module.css";

export const Contacto = () => {
  const [size, setSize] = useState(window.innerWidth)
  console.log(size)
  React.useEffect(() => {
    const handleResizeWindow = () => setSize(window.innerWidth);
 
     window.addEventListener("resize", handleResizeWindow);
    
   }, []);
  
  return (
    <div>
    <div>
      <div className={` container-fluid text-center `}>
        <div className={`row `}>
         <ColIZq/>
         {
       window.innerWidth > 933
   ?
          <div className={`col-9 ${s.colD2}`} style={{ padding: "2rem" }}>
            <div className={`row mt-1 p-1`}>
              <h3> ¡Estemos en contacto!</h3>
              <iframe title='Cargando' src="https://docs.google.com/forms/d/e/1FAIpQLSfGFC0xZSsIwN6tzYdOCvyKqLAYDz8gcfzTKmp6sYyhEpQvmQ/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
             
            </div>
           
          </div>
          :
          <div className={`col-12 ${s.colD2}`} style={{ padding: "2rem" }}>
          <div className={`row mt-1 p-1`}>
            <h3> ¡Estemos en contacto!</h3>
            <iframe title='Formulario' src="https://docs.google.com/forms/d/e/1FAIpQLSfGFC0xZSsIwN6tzYdOCvyKqLAYDz8gcfzTKmp6sYyhEpQvmQ/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
           
          </div>
         
        </div>
         }
        </div>
      </div>
    </div>
  </div>
  )
}
