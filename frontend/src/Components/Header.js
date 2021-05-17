import React from 'react'
import "../Style/Class.css"
import { Link } from "react-router-dom"
import logo from "../imagenes/logo.png"

function Header() {
    return (
        <div id="proyecto" class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 shadow-sm">
            <h5 class="my-0 mr-md-auto font-weight-normal font-weight-bold">Learning Eco-Adventure<img id="logo" src={logo}></img></h5> 
            <nav id="nave" class="my-2 my-md-0 mr-md-3 text-center">
                
            <Link to="/clases">
                <a id="navegacion" className="p-2 text-dark">
                  Inicio
                </a>
            </Link>
                <Link to="/cuestionario">
                <a id="navegacion" className="p-2 text-dark">
                Cuestionario
                </a>
                </Link>
                <Link to ="/Inquietudes">
                <a id="navegacion" className="p-2 text-dark">
                Juego
                </a>
                </Link>
                <Link to ="/Perfil"> 
                <a id="navegacion" className="p-2 text-dark">
                  Perfil
                </a>
                 </Link>
                
                <button id="mas"
            type="button"
            class="btn btn-default dropdown-toggle"
            data-toggle="dropdown"
          >
            Más<span class="caret"></span>
          </button>

          <ul class="dropdown-menu" role="menu">
            <li>
              <Link to="/Informacion">
              <a href="#">Información</a>
              </Link>
            </li>
            <li>
              <Link to="/contacto">
              <a href="#">Contacto</a>
              </Link>
            </li>
            <li>
              <Link to="/">
              <a href="#">Cerrar Sesión</a>
              </Link>
            </li>

            
            <li class="divider"></li>
          </ul>
           
            </nav>
            
            </div>

    )
}
export default Header;