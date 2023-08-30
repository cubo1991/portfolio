import React from 'react'
import perfil from "../../Media/PNG.png";
import { Menu } from '../Menu/Menu';
import s from "./ColIzq.module.css";
import { ExternalLink } from 'react-external-link';

export const ColIZq = () => {
  return (
    <div className={`col ${s.colD}` }  style={{padding: "1rem", height:"100vh"}}>
              <img
                className={`img-fluid mt-5 ${s.imagenPerfil}`}
                src={perfil}
                alt="imagen"
              ></img>

              <div className={`col mt-5`}>
                <h5 className={` ${s.efecto}`}>
                  Hola! Me llamo David Lopez y soy fullstack developer
                </h5>
              <div style={{padding: "2rem"}}>
                <Menu/>
                
              </div>
              <div className={s.redes}>
              <ExternalLink href={"https://www.linkedin.com/in/david-lopez-mathez/"}>
                      <img
                        className={`img-fluid ${s.icono}`}
                        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/linkedin-512.png"
                        alt="Linkedin"
                      ></img>
                    </ExternalLink>
                    <ExternalLink href={"https://github.com/cubo1991"}>
                      <img
                        className={`img-fluid ${s.icono}`}
                        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-128.png"
                        alt="GitHub"
                      ></img>
                    </ExternalLink>
                    

              </div>
              </div>
            </div>
  )
}
