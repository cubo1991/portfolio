import React, { useState } from 'react';
import { ColIZq } from '../ColIzq/ColIZq';
import s from './InfoProyectos.module.css';
import weather from '../../Media/Portadas/Weatherapp.jpg';
import changapp from '../../Media/Portadas/Changapp.jpg';
import dogs from '../../Media/Portadas/Dogsapp.jpg';
import cosmic from '../../Media/Portadas/Cosmicapp.jpg';
import startrek from '../../Media/Portadas/Startrekapp.jpg';
import { IoLogoYoutube, IoLogoGithub } from 'react-icons/io5';
import { ExternalLink } from 'react-external-link';

export const InfoProyectos = () => {
  const [size, setSize] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResizeWindow = () => setSize(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);
  }, []);

  return (
    <div>
      <div>
        <div className={` container-fluid text-center `}>
          <d className={`row `}>
            <ColIZq />
            {window.innerWidth > 933 ? (
              <div className={`col-9 ${s.colD2}`} style={{ padding: '2rem' }}>
                <div className={`row mt-1 p-1`}>
                  <h3 className={s.titulo}> Mis Proyectos</h3>

                  <div
                    className={`album py-5`}
                  
                  >
                    <div className={`container-fluid`}>
                      <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3`}>
                        <div className={`col`}>
                          <div className={`card shadow-sm`}>
                            <img
                              src={weather}
                              alt="Weather App"
                              className={`img-fluid ${s.image}`}
                            />
                            <div className={`card-body`}>
                              <h5 className="card-title">Weather App</h5>
                              <p className="card-text">
                                Pequeña app que consume una API de clima y nos da la información de
                                la ciudad que buscamos. Realizada con React y Redux. Solo Front.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <ExternalLink href="https://youtu.be/UpU9lYdXyYM">
                                  <IoLogoYoutube className={`${s.flechaBtn}`} />
                                </ExternalLink>

                                <ExternalLink href="https://github.com/cubo1991/WeatherApp">
                                  <IoLogoGithub className={`${s.flechaBtn}`} />
                                </ExternalLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`col`}>
                          <div className={`card shadow-sm`}>
                            <img
                              src={changapp}
                              alt="Changapp"
                              className={`img-fluid ${s.image}`}
                            />
                            <div className={`card-body`}>
                              <h5 className="card-title">Changapp</h5>
                              <p className="card-text">
                                Proyecto grupal que realice junto a otros 7 compañeros. Me encargue
                                principalmente del Front. Hecho con React, Redux, Bootstrap y más.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <ExternalLink href="https://www.youtube.com/watch?v=5FqolQbA9dw">
                                  <IoLogoYoutube className={`${s.flechaBtn}`} />
                                </ExternalLink>
                                <ExternalLink href="https://github.com/cubo1991/Changapp">
                                  <IoLogoGithub className={`${s.flechaBtn}`} />
                                </ExternalLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`col`}>
                          <div className={`card shadow-sm`}>
                            <img
                              src={dogs}
                              alt="Dogs App"
                              className={`img-fluid ${s.image}`}
                            />
                            <div className={`card-body`}>
                              <h5 className="card-title">Dogs App</h5>
                              <p className="card-text">
                                App que consume datos de una API y nos permite filtrar, ordenar y
                                crear razas de perros. Me encargué por mi mismo del Front y del Back.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <ExternalLink href="https://youtu.be/1_5Zig2uc1Q">
                                  <IoLogoYoutube className={`${s.flechaBtn}`} />
                                </ExternalLink>
                                <ExternalLink href="https://github.com/cubo1991/dogs">
                                  <IoLogoGithub className={`${s.flechaBtn}`} />
                                </ExternalLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`col`}>
                          <div className={`card shadow-sm`}>
                            <img
                              src={cosmic}
                              alt="Cosmic App"
                              className={`img-fluid ${s.image}`}
                            />
                            <div className={`card-body`}>
                              <h5 className="card-title">Cosmic App</h5>
                              <p className="card-text">
                              App que consume datos de una API propia y nos permite encontrar poderes aliens del juego de mesa Cosmic Encounters.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <ExternalLink href="#">
                                  <IoLogoYoutube className={`${s.flechaBtn}`} />
                                </ExternalLink>
                                <ExternalLink href="https://github.com/cubo1991/dogs">
                                  <IoLogoGithub className={`${s.flechaBtn}`} />
                                </ExternalLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`col`}>
                          <div className={`card shadow-sm`}>
                            <img
                              src={startrek}
                              alt="Star Trek App"
                              className={`img-fluid ${s.image}`}
                            />
                            <div className={`card-body`}>
                              <h5 className="card-title">Star Trek Selector</h5>
                              <p className="card-text">
                                App que consume datos de una API y nos permite elegir aleatoreamente un capitulo de cualquiera de las series de Star Trek
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <ExternalLink href="https://youtu.be/1_5Zig2uc1Q">
                                  <IoLogoYoutube className={`${s.flechaBtn}`} />
                                </ExternalLink>
                                <ExternalLink href="https://github.com/cubo1991/starTrekSelector">
                                  <IoLogoGithub className={`${s.flechaBtn}`} />
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
            ) : (
              <div className={`col-12 ${s.colD2Mobile}`} style={{ padding: '2rem' }}>
                <div className={`row mt-1 p-1`}>
                  <h3 className={s.titulo}> Mis Proyectos</h3>

                  <div
                    className={`album py-5 bg-light`}
                    style={{ background: 'linear-gradient(266deg,#FFE4C4, #FFFFFF)' }}
                  >
                    <div className={`container-fluid`}>
                      <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3`} style={{ height: '50rem' }}>
                        <div className={`col`}>
                          <div className={`card shadow-sm`}>
                            <img
                              src={weather}
                              alt="Weather App"
                              className={`img-fluid ${s.image}`}
                            />
                            <div className={`card-body`}>
                              <h5 className="card-title">Weather App</h5>
                              <p className="card-text">
                                Pequeña app que consume una API de clima y nos da la información de
                                la ciudad que buscamos. Realizada con React y Redux. Solo Front.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <ExternalLink href="https://youtu.be/UpU9lYdXyYM">
                                  <IoLogoYoutube className={`${s.flechaBtn}`} />
                                </ExternalLink>
                                <ExternalLink href="https://github.com/cubo1991/WeatherApp">
                                  <IoLogoGithub className={`${s.flechaBtn}`} />
                                </ExternalLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`col`}>
                          <div className={`card shadow-sm`}>
                            <img
                              src={changapp}
                              alt="Changapp"
                              className={`img-fluid ${s.image}`}
                            />
                            <div className={`card-body`}>
                              <h5 className="card-title">Changapp</h5>
                              <p className="card-text">
                                Proyecto grupal que realice junto a otros 7 compañeros. Me encargue
                                principalmente del Front. Hecho con React, Redux, Bootstrap y más.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <ExternalLink href="https://www.youtube.com/watch?v=5FqolQbA9dw">
                                  <IoLogoYoutube className={`${s.flechaBtn}`} />
                                </ExternalLink>
                                <ExternalLink href="https://github.com/cubo1991/Changapp">
                                  <IoLogoGithub className={`${s.flechaBtn}`} />
                                </ExternalLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`col`}>
                          <div className={`card shadow-sm`}>
                            <img
                              src={dogs}
                              alt="Dogs App"
                              className={`img-fluid ${s.image}`}
                            />
                            <div className={`card-body`}>
                              <h5 className="card-title">Dogs App</h5>
                              <p className="card-text">
                                App que consume datos de una API y nos permite filtrar, ordenar y
                                crear razas de perros. Me encargué por mi mismo del Front y del Back.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <ExternalLink href="https://youtu.be/1_5Zig2uc1Q">
                                  <IoLogoYoutube className={`${s.flechaBtn}`} />
                                </ExternalLink>
                                <ExternalLink href="https://github.com/cubo1991/dogs">
                                  <IoLogoGithub className={`${s.flechaBtn}`} />
                                </ExternalLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`col`}>
                          <div className={`card shadow-sm`}>
                            <img
                              src={cosmic}
                              alt="Cosmic App"
                              className={`img-fluid ${s.image}`}
                            />
                            <div className={`card-body`}>
                              <h5 className="card-title">Dogs App</h5>
                              <p className="card-text">
                                App que consume datos de una API propia y nos permite encontrar poderes aliens del juego de mesa Cosmic Encounters.
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <ExternalLink href="https://youtu.be/1_5Zig2uc1Q">
                                  <IoLogoYoutube className={`${s.flechaBtn}`} />
                                </ExternalLink>
                                <ExternalLink href="https://github.com/cubo1991/dogs">
                                  <IoLogoGithub className={`${s.flechaBtn}`} />
                                </ExternalLink>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`col`}>
                          <div className={`card shadow-sm`}>
                            <img
                              src={startrek}
                              alt="Star Trek App"
                              className={`img-fluid ${s.image}`}
                            />
                            <div className={`card-body`}>
                              <h5 className="card-title">Star Trek Selector</h5>
                              <p className="card-text">
                              App que consume datos de una API y nos permite elegir aleatoreamente un capitulo de cualquiera de las series de Star Trek
                              </p>
                              <div className="d-flex justify-content-between align-items-center">
                                <ExternalLink href="https://youtu.be/1_5Zig2uc1Q">
                                  <IoLogoYoutube className={`${s.flechaBtn}`} />
                                </ExternalLink>
                                <ExternalLink href="https://github.com/cubo1991/starTrekSelector">
                                  <IoLogoGithub className={`${s.flechaBtn}`} />
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
              
            )}
          </d>
        </div>
      </div>
    </div>
  );
};
