import React from 'react';
import { Acordeon } from '../AcordeonMobile/Acordeon';

import { NavBar } from '../NavBar/NavBar';

import s from './PrincipalMobile.module.css'
export const PrincipalMobile = () => {

  
  return (
    <div style={{width:"100wv"}}>
          <NavBar/>
      <div className={`container-fluid text-center `} >
    <Acordeon/>
</div>
</div>
  )
}
