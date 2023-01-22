import React, { useState } from "react";
import s from "./Principal.module.css";
import perfil from "../../Media/PNG.png";
import { ExternalLink } from "react-external-link";
import { Proyects } from "../Proyects/Proyects";
import { AiFillCaretDown } from "react-icons/ai";
import { Menu } from "../Menu/Menu";
import { ColIZq } from "../ColIzq/ColIZq";

export const PrincipalDesktop = () => {
  const [proyectosOn, setProyectosOn] = useState(false);
  const onProyectos = () => {
    setProyectosOn(!proyectosOn);
  };

  return (
    <div>
      <div>
        <div className={` container-fluid text-center `}>
          <div className={`row `}>
           <ColIZq/>
            <div className={`col-9 ${s.colD2}`} style={{ padding: "2rem" }}>
              <div className={`row mt-1 p-1`}>
                <h3> Tecnologias y herramientas</h3>
                <div className={`col mt-1 p-1`} style={{ height: "10rem" }}>
                  <h4>Front-End</h4>
                  <div>
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
                <div className={`col mt-1 p-1`} style={{ height: "10rem" }}>
                  <h4>Back-End</h4>
                  <div>
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
              <div className={`col mt-1 p-1`}>
                <h3> Mis trabajos</h3>{" "}
                <AiFillCaretDown
                  className={`${s.flechaBtn}`}
                  onClick={onProyectos}
                />
                {proyectosOn ? <Proyects /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
