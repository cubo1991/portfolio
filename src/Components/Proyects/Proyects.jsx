import React from 'react';
import s from './Proyects.module.css';
import changappImage from '../../Media/Portadas/Changapp.jpg';
import weatherAppImage from '../../Media/Portadas/Weatherapp.jpg';
import dogsAppImage from '../../Media/Portadas/Dogsapp.jpg';
import { ExternalLink } from 'react-external-link';

export const Proyects = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className={`carousel slide carousel-fade ${s.carouselWrapper}`}
        data-bs-ride="carousel"
      >
        <div className={`carousel-indicators ${s.carouselIndicators}`}>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className={`active ${s.carouselIndicator}`}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            className={`${s.carouselIndicator}`}
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            className={`${s.carouselIndicator}`}
            aria-label="Slide 3"
          ></button>
        </div>
        <div className={`carousel-inner ${s.carouselInner}`}>
          <div className={`carousel-item active ${s.carouselItem}`}>
            <img
              src={changappImage}
              alt="Changapp"
              className={`d-block w-100 ${s.image}`}
            />
            <div className={`carousel-caption d-none d-md-block ${s.carouselCaption}`}>
            <ExternalLink href="https://www.youtube.com/watch?v=5FqolQbA9dw">
              <h5 className={s.proyectsText}>Changapp</h5>           

              </ExternalLink>
            </div>
          </div>
          <div className={`carousel-item ${s.carouselItem}`}>
            <img
              src={weatherAppImage}
              alt="Weather App"
              className={`d-block w-100 ${s.image}`}
            />
            <div className={`carousel-caption d-none d-md-block ${s.carouselCaption}`}>
            <ExternalLink href="https://youtu.be/UpU9lYdXyYM">
              <h5 className={s.proyectsText}>Weather App</h5>
            </ExternalLink>
          
            </div>
          </div>
          <div className={`carousel-item ${s.carouselItem}`}>
            <img
              src={dogsAppImage}
              alt="Dog App"
              className={`d-block w-100 ${s.image}`}
            />
            <div className={`carousel-caption d-none d-md-block ${s.carouselCaption}`}>
            <ExternalLink href="https://youtu.be/1_5Zig2uc1Q">
              <h5 className={s.proyectsText}>Dog App</h5>
              </ExternalLink>
            
            </div>
          </div>
        </div>
        <button
          className={`carousel-control-prev ${s.carouselControlPrev}`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className={`carousel-control-prev-icon ${s.carouselControlPrevIcon}`} aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className={`carousel-control-next ${s.carouselControlNext}`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className={`carousel-control-next-icon ${s.carouselControlNextIcon}`} aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
