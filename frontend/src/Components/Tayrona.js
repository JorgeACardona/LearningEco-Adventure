import React from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../Style/Parques.css"
import Tayrona1 from "../imagenes/Tayrona1.jpg"
import Tayrona2 from "../imagenes/Tayrona2.jpg"
import Tayrona3 from "../imagenes/Tayrona3.jpg"

function Tayrona() {
    return (
        <div id="elemento">
            <h1 id="titulo">Parque Nacional Natural Tayrona</h1>
            <div id="Informacion">
                <p>El Tayrona sin lugar a dudas es uno de los parques
                naturales de Colombia que debes visitar al menos
                una vez en tu vida. Un escenario natural único en
                el que habitan pueblos indígenas ancestrales y conviven
                cientos de especies entre caimanes, monos y osos perezosos.</p>
                <p>Además, este es uno de los pocos parques naturales de Colombia
                que reúnen en un mismo lugar ecosistemas de manglar, corales,
                praderas de algas, bosques secos y húmedos, y toda la flora y
                fauna propia de la Sierra Nevada de Santa Marta, la montaña
                costera más grande del mundo.</p>
                <img id="imagen" src={Tayrona2}></img>
                <h2>¿Qué hacer?</h2>
                <p>Desde la entrada del parque conocida como El Zaino, tendrás que
                caminar cerca de 3 horas, y a lo largo del camino podrás ver monos,
                aves y detenerte en playas de ensueño como Cañaveral, La Piscina
                 y Arenilla, hasta finalmente llegar a Cabo San Juan.</p>
                 <img id="imagen" src={Tayrona1}></img>
                <h2>Fechas de cierre: </h2>
                <p> Del 1 al 15 de febrero, del 1 al 15 de junio y del 19 de octubre al 2 de noviembre.</p>
                <h2>Tarifas de ingreso:</h2>
                <p>Temporada alta: Colombianos hasta 25 años, $20.500 COP, mayores de 25 años, $29.000 COP.
                Extranjeros $64.500 COP. Temporada baja: Colombianos hasta 25 años, $18.500 COP.
                Colombianos mayores de 25 años, $24.500 COP. Extranjeros $54.500 COP.
                Además, debes comprar un seguro que por día tiene un precio de $5.000.</p>
                <a href="https://www.espanol.skyscanner.com/?associateid=AFF_TRA_00074_00002&utm_source=trade+doubler&utm_medium=affiliate&utm_campaign=es-travel-3029299-CTA&tduid=1afd98bdedd9a4a11d4d3e3f47fed06f&clickid=1afd98bdedd9a4a11d4d3e3f47fed06f&c=3029299" target="_blank">Reserva aquí tu vuelo</a><br></br>
                <a href="https://www.vivaair.com/co/es/?aitrk=&_aiid=14216&teng=go&beng=b&deng=c&keng=viva%20air&meng=e&peng=&ieng=108869113116&kieng=kwd-130433845&cieng=517707725422&cpieng=11098028347&feng=&cleng=CjwKCAjw-e2EBhAhEiwAJI5jg8HQp46WW84qZ6wJWbu-uIRRIEpUvnjNaPDzs3T4352G2FVaqrLj5RoC3dQQAvD_BwE&utm_source=google&utm_medium=cpc&utm_campaign=br" target="_blank">Reserva aquí tu vuelo</a>
                <br></br>
                <h2>Hospedaje</h2>
                <p>Dentro del parque: Hotel Jasayma y Playa Brava Teyumakke. Cerca a la entrada: Eco Hostal Yuluka, Eco Hotel
                Chayrama, Viajero Hostel & Ecohabs, Manigua Hostel, Hostal Villa del río y Maloka Barlovento.</p>
                <p>En Santa Marta: Hotel Catedral Plaza, Masaya Hostel y República Hostel.</p>
                <a href="https://www.booking.com/searchresults.es.html?aid=1492369;label=Parques;sid=a8eef381ded689e06353df20f0124fd8;city=900052033&class_interval=1&dest_id=900052033&dest_type=city&dtdisc=0&group_adults=1&inac=0&index_postcard=0&keep_landing=1&label_click=undef&no_rooms=1&offset=0&postcard=0&room1=A&sb_price_type=total&shw_aparth=1&slp_r_match=0&ss_all=0&ssb=empty&sshis=0&top_ufis=1&" target="_blank">Reserva aquí tu hospedaje</a><br></br>
                <img id="imagen" src={Tayrona3}></img>
                <p id="sep">.</p>
                <div id="video">
                <iframe  width="560" height="315" src="https://www.youtube.com/embed/A0U7FoCni-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p id="sep">.</p>
                </div>
                </div>
        </div>
    )
}

export default Tayrona;