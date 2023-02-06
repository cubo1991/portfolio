import React from 'react'
import perfil from "../../Media/PNG.png";

import s from "./ColIzq.module.css";
import { ExternalLink } from 'react-external-link';

export const ColIZqMobile = () => {
  return (
    <div className={`col ${s.colDMobile}` }  style={{padding: "1rem"}}>
              <img
                className={`img-fluid mt-4 mb-4 ${s.imagenPerfilMobile}`}
                style={{margin: "4.5rem"}}
                src={perfil}
                alt="imagen"
              ></img>

              <div className={`col mt-1`}>
                <h5 className={` ${s.efecto}`}>
                  Hola! Me llamo David Lopez y soy fullstack developer
                </h5>           
              <div className={s.redes}>
              <ExternalLink href={"https://www.linkedin.com/in/david-lopez-mathez/"}>
                      <img
                        className={`img-fluid ${s.iconoMobile}`}
                        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/linkedin-512.png"
                        alt="Linkedin"
                      ></img>
                    </ExternalLink>
                    <ExternalLink href={"https://github.com/cubo1991"}>
                      <img
                        className={`img-fluid ${s.iconoMobile}`}
                        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-128.png"
                        alt="GitHub"
                      ></img>
                    </ExternalLink>
                    

              </div>
              </div>
            </div>
  )
}
