import React from 'react'
import { ExternalLink } from 'react-external-link'
import { ColIZq } from '../ColIzq/ColIZq'
import s from "./SobreMi.module.css";


export const SobreMi = () => {
  
  return (
    <div>
    <div>
      <div className={` container-fluid text-center `}>
        <div className={`row `}>
         <ColIZq/>
          <div className={`col-9 ${s.colD2}`} style={{ padding: "2rem" }}>
            <div className={`row mt-1 p-1`}>
              <h3> Sobre Mi</h3>
             
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
