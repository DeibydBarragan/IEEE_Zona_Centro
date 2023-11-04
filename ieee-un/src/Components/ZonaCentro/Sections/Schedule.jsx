import React from "react";
import "../../../Styles/scheduleZC.sass"
export default  function Schedule() {
  return (
    <div id="schedule">
      <h2>Cronograma</h2>
      <div className="secciones">
        <div className="seccIzq">
          <div className="izqSup">
            <span className="izqSup-Reloj"></span>
            <div className="izqSup-textos">
              <h3>Sábado 23 de septiembre de 2023</h3>
              <h3>7:00 am</h3>
            </div>
          </div>
          <div className="izqInf">
            <span className="izqInf-Pointer"></span>
            <div className="izqInf-textos">
              <h3>Universidad Nacional de Colombia</h3>
              <h3>Edifico 411 - Patios</h3>
            </div>
          </div>
        </div>
        <div className="seccDer">
          <div className="seccDer-Evento">
            <h3 className="seccDer-t2">7:00</h3>
            <h3>Bienvenida al evento</h3>
          </div>
          <span></span>
          <div className="seccDer-Evento">
            <h3 className="seccDer-t2">8:00</h3>
            <h3>Reunión de presidentes de la rama</h3>
          </div>
          <span></span>
          <div className="seccDer-Evento">
            <h3 className="seccDer-t2">12:30</h3>
            <h3>Almuerzo - Networking</h3>
          </div>
          <span></span>
          <div className="seccDer-Evento">
            <h3 className="seccDer-t2">14:00</h3>
            <h3>Juego de Rol - Glass Onion: ¿Quién mató a EMB?</h3>
          </div>
        </div>
      </div>
    </div>
  );
}