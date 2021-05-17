import React from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../Style/Parques.css"
import Cocuy1 from "../imagenes/Cocuy1.jfif"
import Cocuy2 from "../imagenes/Cocuy2.jfif"
import Cocuy3 from "../imagenes/Cocuy3.jfif"

function Cocuy() {
    return (
        <div id="elemento">
            <h1 id="titulo">Parque Nacional Natural El Cocuy</h1>
            <div id="Informacion">
                <p>El Cocuy es otro de los parques naturales de Colombia en los que
                aún hay presencia de nevados, en este parque ubicado entre los
                departamentos de Boyacá y Arauca se extiende una sierra de al menos 25 picos nevados que 
                se elevan entre los 4.800 y los 5.330 msnm; con alrededores pintados por cascadas, lagunas, 
                vegetación propia de páramo, como el frailejón y algunas especies de fauna, entre ellas la danta, 
                el oso de anteojos, el cóndor andino, el águila y el venado de páramo.</p>
                <p>Llegar al extremo superior de dichas montañas es tarea para alpinistas profesionales, 
                    pero acercarse a sus faldas e inmiscuirse en ese enorme panorama de la Sierra Nevada del 
                    Cocuy Güicán es un sueño al alcance de cualquier aventurero embelesado con la naturaleza. 
                    Sólo es cuestión de documentarse previamente al viaje y seguir las recomendaciones que dan 
                    los guías en el lugar y la Dirección de Parques Nacionales a través de sus oficinas.</p>
                <img id="imagen" src={Cocuy1}></img>
                <h2>¿Qué hacer?</h2>
                <p>En el parque hay 3 senderos autorizados, 1) Sendero Ritacuba, que llega al borde del
                glaciar del Ritacuba Blanco, 2) Sendero Laguna Grande de la Sierra, que lleva al borde
                del glaciar del Pico Cóncavo y 3) Sendero Lagunillas que termina en el emblemático
                    Pico Púlpito del Diablo.</p>
                <img id="imagen" src={Cocuy2}></img>
                <h2>¿Cómo llegar?: </h2>
                <p> Toma en Terminal Salitre de Bogotá un bus hasta el municipio El Cocuy. Los buses salen
                    a diario desde las 4:00 a.m., tardan 11 horas en llegar y el trayecto se consigue desde $100.000 COP.</p>
                <h2>Tarifas de ingreso:</h2>
                <p>Colombianos hasta 25 años, $21.000 COP, mayores de 25 años, $36.000 COP. Extranjeros $73.500 COP.
                    Obligatorio ir en compañía de un guía local.</p>
                <a href="https://landings.pinbus.com/pasajes-de-bus/medellin-bogota?utm_term=&utm_campaign=PINBUS_COL_SEM_PEF_CPC_CT_AON_DSA&utm_source=adwords&utm_medium=ppc&hsa_acc=6677378374&hsa_cam=2006925741&hsa_grp=70947755226&hsa_ad=516917678072&hsa_src=g&hsa_tgt=dsa-19959388920&hsa_kw=&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwnPOEBhA0EiwA609ReTYPtADxchjqdXWgWxHiNYfAaVZBRkqtTcp-WEa9b4_PBEUH6PEaRhoCz0wQAvD_BwE" target="_blank">Reserva aquí tu transporte</a><br></br>
                <a href="https://www.redbus.co/ciudad/el-cocuy-boy-pasajes-de-bus" target="_blank">Reserva aquí tu transporte</a>
                <br></br>
                <h2>Hospedaje</h2>
                <p>Dentro del parque no puedes pasar la noche. En El Cocuy: Hotel San Gabriel, Casa Museo la Posada del Molino
                y Hostal El Caminante. En Güicán: Hotel Casa del Colibrí, Hotel Güicán de la Sierra y Hotel Brisas del
                    Nevado.</p>
                <a href="https://www.booking.com/searchresults.es.html?aid=1492369;label=Parques;sid=a8eef381ded689e06353df20f0124fd8;city=-582696&class_interval=1&dest_id=-582696&dest_type=city&dtdisc=0&group_adults=1&inac=0&index_postcard=0&keep_landing=1&label_click=undef&no_rooms=1&offset=0&postcard=0&room1=A&sb_price_type=total&shw_aparth=1&slp_r_match=0&ss_all=0&ssb=empty&sshis=0&top_ufis=1&" target="_blank">Reserva aquí tu hospedaje</a><br></br>
                
                <h2>Plan recomendado: Asenso al nevado del Cocuy desde Bogotá 3 días / 2 noches</h2>
                <p>En este plan saldrás desde Bogotá y al llegar al municipio del Cocuy harás una
                caminata de aclimatación en el Cerro Mahoma, y los dos días siguientes ascenderás
                hasta la Laguna Grande de la Sierra, el Púlpito del Diablo y al borde de nieve del
                    Pan de Azúcar.</p>
                <p>El plan incluye transporte ida y regreso desde Bogotá, alojamiento, alimentación,
                ingreso al parque, seguro de viaje y guías montañistas certificados. Cada día caminarás
                    aproximadamente 8 horas.</p>
                <p>Precio por persona: $860.000 COP <br></br>
                Fechas programadas 2021: del 16 al 19 julio y del 13 al 16 de agosto.</p>
                <img id="imagen" src={Cocuy3}></img>
                <p id="sep">.</p>
                <div id="video">
                <iframe width="852" height="480" src="https://www.youtube.com/embed/L1WZ8lG4fVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p id="sep">.</p>
                </div>
                </div>
        </div>
            
    )
}

export default Cocuy;