import React from 'react';
import { Acordeon } from '../AcordeonMobile/Acordeon';
import { ColIZqMobile } from '../ColIzq/ColIzqMobile';


import s from './PrincipalMobile.module.css'
export const PrincipalMobile = () => {

  
  return (
    <div className={`container ${s.principal}`} style={{width:"100wv"}}>
     <ColIZqMobile/>    
    <Acordeon/>

</div>
  )
}
