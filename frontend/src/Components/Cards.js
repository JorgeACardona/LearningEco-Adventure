import React from "react";
import "../Style/Class.css"
import { Link } from "react-router-dom"
import tayrona from "../imagenes/tayrona.jpg"
import macuira from "../imagenes/macuira.jpg"
import cocuy from "../imagenes/cocuy.jpg"

function Cards() {
  return (
    <div id="cont_tarjetas" className="row">

      <div className="col-md-4 text-center fondo mb-2">
        <div className="card md-4 shadow-sm">
          
          <div id="body" className="card-body">
            <h4 className="my-0 font-weight-normal font-weight-bold">Parque Nacional Natural Tayrona</h4>
              <ul className="list-unstyled mt-3 mb-4">
                  <img id="pq1"src={tayrona} alt="" width="250" height="200"></img>
              </ul>
              <Link to="/pnt">
                <button
                  id="boton" type="button"
                  className="btn btn-lg btn-block btn-outline-primary mb-2">
                  Conoce más
                </button>
              </Link>
          </div>
        </div>
      </div>

      <div className="col-md-4 text-center fondo mb-2">
        <div className="card md-4 shadow-sm">
          
          <div id="body" className="card-body">
            <h4 className="my-0 font-weight-normal font-weight-bold">Parque Nacional Natural La Macuira</h4>
              <ul className="list-unstyled mt-3 mb-4">
                  <img id="pq1"src={macuira} alt="" width="250" height="200"></img>
              </ul>
              <Link to="/pnm">
                <button
                  id="boton" type="button"
                  className="btn btn-lg btn-block btn-outline-primary mb-2">
                  Conoce más
                </button>
              </Link>
          </div>
        </div>
      </div>

      <div className="col-md-4 text-center fondo mb-2">
        <div className="card md-4 shadow-sm">
          
          <div id="body" className="card-body">
            <h4 className="my-0 font-weight-normal font-weight-bold">Parque Nacional Natural El Cocuy</h4>
              <ul className="list-unstyled mt-3 mb-4">
                  <img id="pq1"src={cocuy} alt="" width="250" height="200"></img>
              </ul>
              <Link to="/pnc">
                <button
                  id="boton" type="button"
                  className="btn btn-lg btn-block btn-outline-primary mb-2">
                  Conoce más
                </button>
              </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Cards;