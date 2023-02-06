import React from 'react'
import { ColIZq } from '../ColIzq/ColIZq'
import s from "./InfoProyectos.module.css";
import weather from "../../Media/Videos/Weather.mp4"
import changapp from "../../Media/Videos/Changapp.mp4"
import dogs from "../../Media/Videos/Dogs.mp4"
import { IoLogoYoutube, IoLogoGithub } from "react-icons/io5";
import { ExternalLink } from "react-external-link";

export const InfoProyectos = () => {
  return (
    
    <div>
    <div>
      <div className={` container-fluid text-center `}>
        <div className={`row `}>
         <ColIZq/>
          <div className={`col-9 ${s.colD2}`} style={{ padding: "2rem" }}>
            <div className={`row mt-1 p-1`}>
              <h3 className={s.titulo}> Mis Proyectos</h3>
              
              <div class="album py-5 bg-light" style={{ background: "linear-gradient(266deg,#FFE4C4, #FFFFFF)"}}> 
    <div class="container" >

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
        <div class="col">
          <div class="card shadow-sm" >
                        <video src={weather}  height="151rem" autoPlay="true" muted="true" loop="true"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></video>
            <div class="card-body">
            <h5 class="card-title">Wheather App</h5>
              <p class="card-text">Pequeña app que consume una API de clima y nos da la información de la ciudad que buscamos. Realizada con React y Redux. Solo Front.</p>
              <div class="d-flex justify-content-between align-items-center">
                  <ExternalLink href='https://youtu.be/UpU9lYdXyYM'>
                  <IoLogoYoutube className={`${s.flechaBtn}`}/>
                  </ExternalLink>
                  
                
                  <ExternalLink href='https://github.com/cubo1991/WeatherApp'>
                  <IoLogoGithub className={`${s.flechaBtn}`}/>
                  </ExternalLink>
         
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <video src={changapp} height="151rem" autoPlay="true" muted="true" loop="true"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></video>
            <div class="card-body">
            <h5 class="card-title">Changapp</h5>
              <p class="card-text">Proyecto grupal que realice junto a otros 7 compañeros. Me encargue principalmente del Front. Hecho con React, Redux, Bootstrap y más.</p>
              <div class="d-flex justify-content-between align-items-center">
              <ExternalLink href='https://www.youtube.com/watch?v=5FqolQbA9dw'>
                  <IoLogoYoutube className={`${s.flechaBtn}`}/>
                  </ExternalLink>
                  <ExternalLink href='https://github.com/cubo1991/Changapp'>
                  <IoLogoGithub className={`${s.flechaBtn}`}/>
                  </ExternalLink>
                
               
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <video src={dogs}  height="151rem" autoPlay="true" muted="true" loop="true"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></video>
            <div class="card-body">
            <h5 class="card-title">Dogs App</h5>
              <p class="card-text">App que consume datos de una API y nos permite filtrar, ordenar y crear razas de perros. Me encargué por mi mismo del Front y  del Back.</p>
              <div class="d-flex justify-content-between align-items-center"> 
              <ExternalLink href='https://youtu.be/1_5Zig2uc1Q'>
              <IoLogoYoutube className={`${s.flechaBtn}`}/>  
              </ExternalLink>            
              <ExternalLink href='https://github.com/cubo1991/dogs'>
                  <IoLogoGithub className={`${s.flechaBtn}`}/>     
                  </ExternalLink>           

              </div>
            </div>
          </div>
        </div>
        </div>
     
      </div>
    </div>
  </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>

  )
}
