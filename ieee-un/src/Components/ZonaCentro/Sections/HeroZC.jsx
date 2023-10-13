import React from "react";
import heroImage from "../../../Assets/zonaCentro/landing/hero.jpeg"
import "../../../Styles/ZonaCentro.sass"
import {Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import AOS from 'aos';
export default  function HeroZC() {
  return (
    <section className="hero-zc row justify-content-center align-items-center p-3 p-md-0 pb-md-5" id="hero">
      <Col md={6}  className="data-container d-flex flex-column">
        <h1 className="fw-bold text-white mt-3 mt-md-0">
          !Te invitamos a participar en la próxima edición de la Zona Centro de IEEE!
        </h1>
        <p>
          Acompáñanos a esta reunión, organizada por la sección de la rama de la Universidad Nacional de Colombia. Donde podrás aprender cosas nuevas, participar en actividades, conocer y compartir con otros integrantes de la rama, y mucho más
        </p>
        <div className="d-flex gap-3">
          <a href="#form">
            Inscríbete
          </a>
          <a href="#info" className="btn btn-outline-primary">
            Más información
          </a>
        </div>
      </Col>
      <Col md={6}>
        <img src={ heroImage } alt="Evento Zona Centro" />
      </Col>
    </section>
  );
}