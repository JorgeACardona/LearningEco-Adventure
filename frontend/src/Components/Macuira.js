import React from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../Style/Parques.css"
import Macuira1 from "../imagenes/Macuira1.jfif"
import Macuira2 from "../imagenes/Macuira2.jfif"
import Macuira3 from "../imagenes/Macuira3.jfif"

function Macuira() {
    return (
        <div id="elemento">
            <h1 id="titulo">Parque Nacional Natural Macuira</h1>
            <div id="Informacion">
                <p>La Macuira es uno de los más inexplorados parques naturales de Colombia, 
                    un rincón tan alejado y tan mágico, que solo pocos se han atrevido a descubrir 
                    este oasis en medio del área semidesértica de la Alta Guajira.</p>
                <p>En La Macuira, además de bosques y arroyos en medio del árido desierto,
                     encontrarás un paraíso natural en el que habitan más de 140 especies 
                     de aves, de las cuales 17 son endémicas y más de 10 migratorias. Un lugar 
                     ideal para cualquier pajarero del mundo.</p>
                      <p>En la Macuira nunca llueve. Los árboles toman la humedad de las nubes. 
                        Este es otro milagro y así en el bosque nacen varios ríos y se forman hermosas 
                        pocetas de agua limpia y fresca.</p>
                <img id="imagen" src={Macuira1}></img>
                <h2>¿Qué hacer?</h2>
                <p>Caminar por las dunas e ir en compañía de un guía indígena que te lleve a 
                    descubrir todos los tesoros naturales del parque, especialmente el Chorro de Ipaq Wou, 
                    un escenario natural de gran significado ancestral para los Wayúu. Antes puedes visitar 
                    el Cabo de la Vela y Punta Gallinas.</p>
                 
                 <h2>¿Cómo llegar?</h2>
                 <p>Primero debes llegar a Riohacha y luego tomar un 4×4 que vaya hasta Uribia, el último lugar 
                     donde puedes abastecerte de provisiones para el viaje, y por seguridad, debes continuar tu 
                     camino con una agencia totalmente autorizada.</p>
                <a href="https://www.espanol.skyscanner.com/?associateid=AFF_TRA_00074_00002&utm_source=trade+doubler&utm_medium=affiliate&utm_campaign=es-travel-3029299-CTA&tduid=1afd98bdedd9a4a11d4d3e3f47fed06f&clickid=1afd98bdedd9a4a11d4d3e3f47fed06f&c=3029299" target="_blank">Reserva aquí tu vuelo</a><br></br>
                <a href="https://www.vivaair.com/co/es/?aitrk=&_aiid=14216&teng=go&beng=b&deng=c&keng=viva%20air&meng=e&peng=&ieng=108869113116&kieng=kwd-130433845&cieng=517707725422&cpieng=11098028347&feng=&cleng=CjwKCAjw-e2EBhAhEiwAJI5jg8HQp46WW84qZ6wJWbu-uIRRIEpUvnjNaPDzs3T4352G2FVaqrLj5RoC3dQQAvD_BwE&utm_source=google&utm_medium=cpc&utm_campaign=br" target="_blank">Reserva aquí tu vuelo</a>
                <br></br>
                <h2>Hospedaje</h2>
                <p>En el parque puedes dormir en rancherías típicas en medio del desierto, dotadas 
                    con hamacas y baños públicos.</p>
                <p>Hospedaje en Riohacha: Hostel Laguna Salá, Bona Vida Hostel La Quinta y Casa Profunda Hostel. 
                    En el Cabo de la Vela: Rancheria Utta y Tawi Kitecenter.</p>
                <a href="https://www.booking.com/searchresults.es.html?aid=1492369;label=Parques;sid=a8eef381ded689e06353df20f0124fd8;city=-596580&class_interval=1&dest_id=-596580&dest_type=city&dtdisc=0&group_adults=2&inac=0&index_postcard=0&keep_landing=1&label_click=undef&no_rooms=1&offset=0&postcard=0&room1=A%2CA&sb_price_type=total&shw_aparth=1&slp_r_match=0&ss_all=0&ssb=empty&sshis=0&top_ufis=1&" target="_blank">Reserva aquí tu hospedaje</a><br></br>
                <img id="imagen" src={Macuira2}></img>
                <h2>Plan recomendado: La Guajira el cavo de la vela y punta gallinas 3 días /2 noches</h2>
                <p>En este tour visitarás el Cabo de la Vela y Punta Gallinas, tendrás tiempo para bañar en 
                    las playas Ojo de Agua, Punta Arcoiris, Pilón de Azúcar, explorar el desierto de las dunas 
                    de Taroa, los Faros y disfrutar de los miradores de Bahía Honda y Bahía Portete.</p>
                <p>El plan inicia en Riohacha a las 8 a.m. e incluye transporte en vehículo 4x4, hospedaje 
                    en chinchorro, alimentación completa, hidratación, seguro de viaje y actividades en el 
                    Cabo de la Vela y Punta Gallinas.</p>
                <p>Precio por persona: $550.000 COP</p>
                <img id="imagen" src={Macuira3}></img>
               <br></br>
               <p id="sep">.</p>
                <div id="video">
                <iframe width="385" height="315" src="https://www.youtube.com/embed/yD2sUjPEmiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p id="sep">.</p>
                </div>
                </div>
        </div>
                
    )
}

export default Macuira;