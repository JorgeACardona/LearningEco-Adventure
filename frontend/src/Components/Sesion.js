import React from 'react';
import "../Style/Sesion.css"

import logo from '../imagenes/logo.png'
import responder from '../imagenes/responder.png'
import { Link } from 'react-router-dom'

function Sesion (){
    return(
        <div>
        <div>
        <Link to="/">
              <img id="regresar" src={responder} alt="" width="45" height="45"></img>
            </Link></div>
       <div id="contenedorin">
      
        <img id="fotologo" src={logo} alt="" width="120" height="120"></img>
       
        
        <form>
        <h1 id="titulito">Learning Eco -Adventure</h1>
        <label id="labelsito" for="username">Correo Electrónico</label>
        <input type="text" placeholder="Ingrese su correo"></input>
       
        <label id="labelsito2" for="password">Contraseña</label>
        <input type="password" placeholder="Ingrese su contraseña"></input>
       
        <br></br>
        <br></br>
        <Link to="/contraseña">
        <a id="olvido" href="#">¿Has olvidado la contraseña?</a>
        </Link>
        <Link to="/clases">
         <button  id="botingresar" class="btn btn-lg btn-primary btn-block" type="submit">Iniciar Sesión</button>
         </Link>
      </form>
  
      </div> 
      </div>
      
     
      
       )

}

export default Sesion;