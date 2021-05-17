import React from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../Style/Cuestionario.css"

function Cuestionario() {
    return (
        <div id="divContenedor">
            <h1 id="tit_cuestionario">Cuestionario</h1>
            <div class="pregresp">
                <div class="pregunta">1. ¿Cuál es el tipo de lugar que prefiere visitar al salir de vacaciones?<br />
                </div>
                <div class="respuestas">
                    <input type="radio" name="preg1" value="1" /> Playas<br />
                    <input type="radio" name="preg1" value="2" /> Selvas<br />
                    <input type="radio" name="preg1" value="3" /> Montañas<br />
                    <input type="radio" name="preg1" value="4" /> Desiertos<br />
                </div>
            </div>

            <div class="pregresp">
                <div class="pregunta">2. ¿Cuántas veces al año viaja?<br />
                </div>
                <div class="respuestas">
                    <input type="radio" name="preg1" value="1" /> 1<br />
                    <input type="radio" name="preg1" value="2" /> 2<br />
                    <input type="radio" name="preg1" value="3" /> 3 o más<br />
                </div>
            </div>

            <div class="pregresp">
                <div class="pregunta">3. ¿Qué factores toma en cuenta al adquirir un paquete de viaje?<br />
                </div>
                <div class="respuestas">
                    <input type="radio" name="preg1" value="1" /> Precios<br />
                    <input type="radio" name="preg1" value="2" /> Servicios en el hospedaje<br />
                    <input type="radio" name="preg1" value="3" /> Actividades que ofrece<br />
                </div>
            </div>

            <div class="pregresp">
                <div class="pregunta">4. ¿Por qué se caracteriza el Parque Tayrona?<br />
                </div>
                <div class="respuestas">
                    <input type="radio" name="preg1" value="1" /> Por sus hermosas playas<br />
                    <input type="radio" name="preg1" value="2" /> Por sus diferentes ecosistemas<br />
                    <input type="radio" name="preg1" value="3" /> Por la ausencia de fauna y flora<br />
                </div>
            </div>

            <div class="pregresp">
                <div class="pregunta">5. ¿Por qué en la Macuira nunca llueve?<br />
                </div>
                <div class="respuestas">
                    <input type="radio" name="preg1" value="1" /> Porque los árboles toman la humedad de las nubes<br />
                    <input type="radio" name="preg1" value="2" /> Porque es un lugar desértico<br />
                    <input type="radio" name="preg1" value="3" /> Porque el agua es obtenida directamente de mares y ríos<br />
                </div>
            </div>

            <div class="pregresp">
                <div class="pregunta">6. ¿Cuál es la actividad principal del Cocuy?<br />
                </div>
                <div class="respuestas">
                    <input type="radio" name="preg1" value="1" /> Escalar el nevado del Cocuy<br />
                    <input type="radio" name="preg1" value="2" /> Realizar esquí<br />
                    <input type="radio" name="preg1" value="3" /> Practicar tubing<br />
                </div>
            </div>

            <div class="pregresp">
                <div class="pregunta">7. ¿Cómo te gusta viajar?<br />
                </div>
                <div class="respuestas">
                    <input type="radio" name="preg1" value="1" /> Solo<br />
                    <input type="radio" name="preg1" value="2" /> Con amigos<br />
                    <input type="radio" name="preg1" value="3" /> En familia<br />
                </div>
            </div>

            <div class="pregresp">
                <div class="pregunta">8. ¿En qué lugar prefieres hospedarte?<br />
                </div>
                <div class="respuestas">
                    <input type="radio" name="preg1" value="1" /> Hotel<br />
                    <input type="radio" name="preg1" value="2" /> Hostal<br />
                    <input type="radio" name="preg1" value="3" /> Cabaña o ranchería<br />
                </div>
            </div>

            <div class="pregresp">
                <div class="pregunta">9. ¿Qué medios utilizas para buscar hospedaje?<br />
                </div>
                <div class="respuestas">
                    <input type="radio" name="preg1" value="1" /> Páginas web<br />
                    <input type="radio" name="preg1" value="2" /> Redes sociales<br />
                    <input type="radio" name="preg1" value="3" /> Agencias físicas<br />
                </div>
            </div>

            <div class="pregresp">
                <div class="pregunta">10. ¿Cuál es tu medio de transporte favorito para viajar?<br />
                </div>
                <div class="respuestas">
                    <input type="radio" name="preg1" value="1" /> Avión<br />
                    <input type="radio" name="preg1" value="2" /> Flota de buses<br />
                    <input type="radio" name="preg1" value="3" /> Vehículo personal<br />
                </div>

            </div>

            <button id="enviar" type="submit" class="btn btn-primary" data-toggle="modal">
              Enviar
            </button>
            
            <p id="sep">.</p>
            </div>

    )
}

export default Cuestionario;