import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import s from './App.module.css'

import { PrincipalDesktop } from './Principal/PrincipalDesktop';
import { Contacto } from './Contacto/Contacto';
import { SobreMi } from './SobreMi/SobreMi';
import { InfoProyectos } from './InfoProyectos/InfoProyectos';
import { CV } from './CV/CV';

import { Routes, Route } from 'react-router-dom';
// import { NavBar } from './NavBar/NavBar';



function App() {



  return (
  <div >


      <Routes>
      <Route path="/" exact element ={<PrincipalDesktop/>} />
      <Route path="/contacto" element ={<Contacto/>}/>
      <Route path="/about" element ={<SobreMi/>}/>
      <Route path="/proyectos" element ={<InfoProyectos/>}/>
      <Route path="/cv" element ={<CV/>}/>
      </Routes>
     
    
    
     
    </div>
  );
}

export default App;
