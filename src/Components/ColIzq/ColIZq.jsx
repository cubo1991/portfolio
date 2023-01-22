import React from 'react'
import perfil from "../../Media/PNG.png";
import { Menu } from '../Menu/Menu';
import s from "./ColIzq.module.css";

export const ColIZq = () => {
  return (
    <div className={`col ${s.colD}` }  style={{padding: "2rem"}}>
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
              </div>
            </div>
  )
}
