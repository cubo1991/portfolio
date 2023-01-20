import React from "react";
import s from "./Principal.module.css";
import perfil from "../../Media/PNG.png";


export const PrincipalDesktop = () => {
  return (
    <div>
      <div className={s.principal}>
        <div className={` container-fluid text-center `}>
          <div className={`row `}>
            <div className={`col ${s.colD}`}>
              <img
                className={`img-fluid mt-5 ${s.imagenPerfil}`}
                src={perfil}
                alt="imagen"
              ></img>

              <div className={`col mt-5`}>
                <h5 className={` ${s.efecto}`}>
                  Hola! Me llamo David Lopez y soy fullstack developer
                </h5>
              </div>
            </div>
            <div className={`col-9 ${s.colD2}`}>
             
              <div className={`col mt-5 p-5`} style={{border: "solid"}}>
                <h3> Tecnologias y herramientas</h3>
                <img className={`img-fluid mt-5 ${s.icono}`} src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React"></img>
                <img className={`img-fluid mt-5 ${s.icono}`} src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="Javascript"></img>
                <img className={`img-fluid mt-5 ${s.icono}`} src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3"></img>
                <img className={`img-fluid mt-5 ${s.icono}`} src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5"></img>
                <img className={`img-fluid mt-5 ${s.icono}`} src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="Redux"></img>
                
                </div>
                <div className={`col mt-5 p-5`} style={{border: "solid"}}>
                  <h3> Mis proyectos</h3>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
