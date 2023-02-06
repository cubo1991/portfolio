import React from 'react'
import { ExternalLink } from 'react-external-link'
import s from "./Acordeon.module.css";
import { IoLogoYoutube, IoLogoGithub } from "react-icons/io5";
import weather from "../../Media/Videos/Weather.mp4"
import changapp from "../../Media/Videos/Changapp.mp4"
import dogs from "../../Media/Videos/Dogs.mp4"





export const Acordeon = () => {
  
  return (
    <div className={`accordion ${s.principal}`}  id="accordionExample">
    <div className={`accordion-item container-fluid ${s.principal}`}>
      <h2 className="accordion-header" id="headingOne">
        <button className={`accordion-button ${s.principal}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Tecnologias y herramientas
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className={`accordion-body ${s.principal}`}>
        <div className={`col`} style={{ height: "5rem" }}>
                  <h4 className={s.tituloMobile}>Front-End</h4>
                  <div className={`${s.tecnologias} container-fluid`}>
                    <ExternalLink href="https://reactjs.org/">
                      <img
                        className={`img-fluid mt-5 ${s.icono}`}
                        src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
                        alt="React"
                      ></img>
                    </ExternalLink>

                    <ExternalLink href={"https://www.javascript.com/"}>
                      <img
                        className={`img-fluid mt-5 ${s.icono}`}
                        src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                        alt="Javascript"
                      ></img>
                    </ExternalLink>
                    <ExternalLink
                      href={"https://getbootstrap.com/docs/3.4/javascript/"}
                    >
                      <img
                        className={`img-fluid mt-5 ${s.icono}`}
                        src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
                        alt="Bootstrap"
                      ></img>
                    </ExternalLink>
                    <ExternalLink href={"https://www.w3schools.com/css/"}>
                      <img
                        className={`img-fluid mt-5 ${s.icono}`}
                        src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
                        alt="CSS3"
                      ></img>
                    </ExternalLink>
                    <ExternalLink href={"https://en.wikipedia.org/wiki/HTML5"}>
                      <img
                        className={`img-fluid mt-5 ${s.icono}`}
                        src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
                        alt="HTML5"
                      ></img>
                    </ExternalLink>
                    <ExternalLink href={"https://redux.js.org/"}>
                      <img
                        className={`img-fluid mt-5 ${s.icono}`}
                        src="https://profilinator.rishav.dev/skills-assets/redux-original.svg"
                        alt="Redux"
                      ></img>
                    </ExternalLink>
                  </div>
                </div>
                <div className={`col`} style={{ height: "5rem" }}>
                  <h4 className={s.tituloMobile}>Back-End</h4>
                  <div className={`${s.tecnologias} container-fluid`}>
                    <ExternalLink href={"https://nodejs.org/"}>
                      <img
                        className={`img-fluid mt-5 ${s.icono}`}
                        src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
                        alt="Node.js"
                      ></img>
                    </ExternalLink>
                    <ExternalLink href={"https://www.javascript.com/"}>
                      <img
                        className={`img-fluid mt-5 ${s.icono}`}
                        src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                        alt="Javascript"
                      ></img>
                    </ExternalLink>
                    <ExternalLink href={"https://expressjs.com/"}>
                      <img
                        className={`img-fluid mt-5 ${s.icono}`}
                        src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg"
                        alt="Express"
                      ></img>
                    </ExternalLink>
                    <ExternalLink href={"https://www.postgresql.org/"}>
                      <img
                        className={`img-fluid mt-5 ${s.icono}`}
                        src="https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg"
                        alt="PostgreSQL"
                      ></img>
                    </ExternalLink>
                    <ExternalLink href={"https://redux.js.org/"}>
                      <img
                        className={`img-fluid mt-5 ${s.icono}`}
                        src="https://profilinator.rishav.dev/skills-assets/redux-original.svg"
                        alt="Redux"
                      ></img>
                    </ExternalLink>
                  </div>
                </div>
        </div>
      </div>
    </div>
    <div className={`accordion-item container-fluid ${s.principal}`}>
      <h2 className="accordion-header" id="headingTwo">
        <button className={`accordion-button collapsed ${s.principal}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Sobre mi
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className={`accordion-body ${s.principal}`}>
        <div className={s.cuadroTexto}>
              <p>Me llamo David Lopez, nací en 1991 en la ciudad de Mar del Plata, Argentina. A los 6 años junto a mi familia nos fuimos a vivir al sur de la provincia de Mendoza, para en 1999 instalarnos definitivamente en la capital provincial, la Ciudad de Mendoza.</p>
              <br/>
              <p>En el 2009, tras completar mis estudios secundarios en la Escuela de Comercio Martín Zapata, dependiente de la Universidad Nacional de Cuyo, empecé la licenciatura en Comunicación Social en esta casa de altos estudios. Sin embargo, y debido a la incompatibilidad de tiempos con mi trabajo, tuve que abandonar la carrera en el 2015. No obstante, en el 2016 empece a estudiar la tecnicatura en Comuniación Social en el Instituto Fabián Calle. De esta forma, y solo habiendo desaprobado un parcial en toda la carrera, me recibí como Técnico Superior en el 2019. </p>
              <br/>
              <p>En el año 2014 entré a trabajar en la Municipalidad de la Ciudad de Mendoza en el área de Prensa de la institución. Desde entonces he trabajado en distintos aspectos de la comunicación del municipio, que incluyen la redacción de notas periodísticas hasta el moderamiento de las redes sociales.</p>
              <br/>
              <p>En el 2021 decidí que mi vida iba a tomar un giro impensado hasta ese momento. Fue en julio cuando decidí empezar a navegar por los oceanos del desarrollo web. Así fue que empece el curso de Desarrollo Web de Coderhouse, seguido por uno de Javascript y otro de React. Sin embargo, en febrero del 2022 llegué a la conclusión de que no era suficiente y por eso decidí empezar en Henry mi carrera como Fullstack. Si de algo me arrepiento es de no haberme decidio antes por este camino</p> 
              <br/>
              <p>En mis tiempos libres aprovecho para jugar juegos de mesa con amigos o videojuegos. También siento un cariño especial por la radio, por lo que siempre está pendiente hacer algo que la involucre.</p>
              <br/>
              <span>Si leíste hasta acá, ¡gracias por tomarte el tiempo de conocerme! Espero que podamos trabajar juntos.</span>

              </div>
        </div>
      </div>
    </div>
    <div className={`accordion-item container-fluid ${s.principal}`}>
      <h2 className="accordion-header" id="headingThree">
        <button className={`accordion-button collapsed ${s.principal}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    Mis proyectos        
    </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className={`accordion-body ${s.principal}`}>
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
  )
}


