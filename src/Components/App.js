import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import s from './App.module.css'
import { PrincipalMobile } from './Principal/PrincipalMobile';
import { PrincipalDesktop } from './Principal/PrincipalDesktop';
import { Contacto } from './Contacto/Contacto';
import { SobreMi } from './SobreMi/SobreMi';
import { InfoProyectos } from './InfoProyectos/InfoProyectos';
import { CV } from './CV/CV';
import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
// import { NavBar } from './NavBar/NavBar';



function App() {

  const [size, setSize] = useState(window.innerWidth)
  console.log(size)
  React.useEffect(() => {
    const handleResizeWindow = () => setSize(window.innerWidth);
 
     window.addEventListener("resize", handleResizeWindow);
    
   }, []);


  return (
  <div style={{padding:0}}>

    {
      window.innerWidth < 896
      ?
      <PrincipalMobile/>
      :
      <Routes>
      <Route path="/" exact element ={<PrincipalDesktop/>} />
      <Route path="/contacto" element ={<Contacto/>}/>
      <Route path="/about" element ={<SobreMi/>}/>
      <Route path="/proyectos" element ={<InfoProyectos/>}/>
      <Route path="/cv" element ={<CV/>}/>
      </Routes>
     
    }
    
     
    </div>
  );
}

export default App;
