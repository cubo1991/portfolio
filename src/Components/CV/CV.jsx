import React from 'react'
import { ColIZq } from '../ColIzq/ColIZq'
import s from "./CV.module.css";

export const CV = () => {
  
  
  return (
    <div>
    <div>
      <div className={` container-fluid text-center `}>
        <div className={`row `}>
         <ColIZq/>
          <div className={`col-9 ${s.colD2}`} style={{ padding: "2rem" }}>
            <div className={`row mt-1 p-1`}>
              <h3>CV</h3>
             
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
