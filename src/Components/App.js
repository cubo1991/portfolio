import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import s from './App.module.css'
import { PrincipalMobile } from './Principal/PrincipalMobile';
import { PrincipalDesktop } from './Principal/PrincipalDesktop';
import React, {useState} from 'react';
// import { NavBar } from './NavBar/NavBar';



function App() {

  const [size, setSize] = useState(window.innerWidth)
  React.useEffect(() => {
    const handleResizeWindow = () => setSize(window.innerWidth);
 
     window.addEventListener("resize", handleResizeWindow);
    
   }, []);

console.log(size)
  return (
  <div style={{padding:0}}>

    {
      window.innerWidth < 896
      ?
      <PrincipalMobile/>
      :
      <PrincipalDesktop/>
    }
     
    </div>
  );
}

export default App;
