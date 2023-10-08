import React from "react";
import heroImage from "../../../Assets/zonaCentro/landing/hero.jpeg"
import "../../../Styles/ZonaCentro.sass"
import {Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import AOS from 'aos';
export default  function HeroZC() {
  return (
    <section className="hero-zc d-flex align-items-center pb-5" id="hero">
      <Col className="data-container d-flex flex-column col-6">
        <h1 className="fw-bold text-white">
          !Te invitamos a participar en la próxima edición de la Zona Centro de IEEE!
        </h1>
        <p>
          Acompáñanos a esta reunión, organizada por la sección de la rama de la Universidad Nacional de Colombia. Donde podrás aprender cosas nuevas, participar en actividades, conocer y compartir con otros integrantes de la rama, y mucho más
        </p>
        <div className="d-flex gap-3">
          <Button>
            Inscríbete
          </Button>
          <Button variant="outline-primary">
            Más información
          </Button>
        </div>
      </Col>
      <Col className="col-6">
        <img src={ heroImage } alt="Evento Zona Centro" />
      </Col>
    </section>
  );
}