import React from 'react';
import "../Style/Sesion.css"
import logo from '../imagenes/logo.png'
import { Link } from 'react-router-dom'
import responder from '../imagenes/responder.png'

function Recuperar (){
    return(
        <div>
        <div>
        <Link to="/iniciar">
              <img id="regresar" src={responder} alt="" width="45" height="45"></img>
            </Link></div>
       <div id="contenedorin">
      
        <img id="fotologo" src={logo} alt="" width="120" height="120"></img>
       
        
        <form>
        <h1 id="titulito">Learning Eco -Adventure</h1>
        <label id="labelsito" for="username">Nombre</label>
        <input type="text" placeholder="Ingrese su nombre completo"></input>
       
        <label id="labelsito2" for="Email">Correo</label>
        <input type="text" placeholder="Ingrese su correo"></input>
  
        <label id="labelsito2" for="password">Nueva Contraseña</label>
        <input type="password" placeholder="Ingrese su nueva contraseña"></input>
  
       
        
        <Link to="/clases">
         <button  id="botingresar" class="btn btn-lg btn-primary btn-block" type="submit">Recuperar contraseña</button>
         </Link>
      </form>
  
      </div> 
      </div>
      
     
      
       )
  
  }
export default Recuperar;