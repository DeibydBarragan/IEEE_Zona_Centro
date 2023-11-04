import React from "react";
import "../../../Styles/OpinionsZC.sass"

import Carousel from 'react-bootstrap/Carousel';
import JohnChina from "./../../../Assets/zonaCentro/john-china.jpg"
import quote from "./../../../Assets/zonaCentro/icon_quote.png"

export default  function Opinions() {
  return (
    <div id="opinions">
      <div className="carrusel">
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="carrItem1">
              <img src={quote} alt="" />
              <p>
                “ESTE EVENTO ME CAMBIÓ LA VIDA. CONOCÍ EL CAPÍTULO DE ROBÓTICA Y LOS CHICOS FUERON MUY AMABLES. YA SÉ EN QUÉ QUIERO TRABAJAR CUANDO ME GRADÚE”
              </p>
              <div className="carrPersona">
                <img src={JohnChina} alt="" />
                <div className="carDatos">
                  <h3 className="carDatos-Titulo">John Xina</h3>
                  <h3>Estudiante</h3>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carrItem2">
              <img src={quote} alt="" />
              <p>
                “ESTE EVENTO ME CAMBIÓ LA VIDA. CONOCÍ EL CAPÍTULO DE ROBÓTICA Y LOS CHICOS FUERON MUY AMABLES. YA SÉ EN QUÉ QUIERO TRABAJAR CUANDO ME GRADÚE”
              </p>
              <div className="carrPersona">
                <img src={JohnChina} alt="" />
                <div className="carDatos">
                  <h3 className="carDatos-Titulo">John Xina</h3>
                  <h3>Estudiante</h3>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carrItem1">
              <img src={quote} alt="" />
              <p>
                “ESTE EVENTO ME CAMBIÓ LA VIDA. CONOCÍ EL CAPÍTULO DE ROBÓTICA Y LOS CHICOS FUERON MUY AMABLES. YA SÉ EN QUÉ QUIERO TRABAJAR CUANDO ME GRADÚE”
              </p>
              <div className="carrPersona">
                <img src={JohnChina} alt="" />
                <div className="carDatos">
                  <h3 className="carDatos-Titulo">John Xina</h3>
                  <h3>Estudiante</h3>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <h2>Algunos comentarios acerca del evento</h2>
    </div>
  );
}