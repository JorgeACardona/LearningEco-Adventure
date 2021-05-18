import React from "react"
import logo from '../imagenes/logo.png'
import '../Style/Datos.css'
import { Link } from 'react-router-dom'
import responder from '../imagenes/responder.png'
import axios from 'axios'



function Datos (){
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
      <label id="labelsito" for="username">Nombre</label>
      <input type="text" placeholder="Ingrese su nombre completo"></input>
     
      <label id="labelsito2" for="Email">Correo</label>
      <input type="text" placeholder="Ingrese su correo"></input>

      <label id="labelsito2" for="password">Contraseña</label>
      <input type="password" placeholder="Ingrese su contraseña"></input>

     
      
      <Link to="/clases">
       <button  id="botingresar" class="btn btn-lg btn-primary btn-block" type="submit">Registrarse</button>
       </Link>
    </form>

    </div> 
    </div>
    
   
    
     )

}

export default Datos;