import React from 'react';
import { NavBar } from '../NavBar/NavBar';
// import tv from '../../Media/tv.png';
// import librero from '../../Media/librero.png';
// import sofa from '../../Media/sofa.png';
// import cuadro from '../../Media/cuadro.png';
// import retrato from '../../Media/retrato.jpg';
// import video1 from '../../Media/Videos/Ejemplo1.mp4';
// import video2 from '../../Media/Videos/Ejemplo2.mp4';
// import video3 from '../../Media/Videos/Ejemplo3.mp4';
// import estatica from '../../Media/Videos/estatica.mp4';
import s from './Principal.module.css'

export const PrincipalMobile = () => {


  return (
    <div style={{width:"100wv"}}>
          <NavBar/>
      <div className={`container-fluid text-center`}>
  <div className={`row `}>
    <div className={`col ${s.col}`}>
      Column
    </div>   
     </div>
</div>
</div>
  )
}
