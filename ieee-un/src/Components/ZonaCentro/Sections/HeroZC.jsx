import React from "react";
import heroImage from "../../../Assets/zonaCentro/landing/hero.jpeg"
import "../../../Styles/ZonaCentro.sass"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
export default  function HeroZC() {
  return (
    <Container fluid as="section">
      <Row className="hero-zc align-items-center p-3 p-md-0 pb-md-5">
        <Col md={6}  className="data-container d-flex flex-column">
          <h1 className="fw-bold text-white mt-3 mt-md-0">
            !Te invitamos a participar en la próxima edición de la Zona Centro de IEEE!
          </h1>
          <p>
            Acompáñanos a esta reunión, organizada por la sección de la rama de la Universidad Nacional de Colombia. Donde podrás aprender cosas nuevas, participar en actividades, conocer y compartir con otros integrantes de la rama, y mucho más
          </p>
          <div className="d-flex gap-3">
            <a href="#form" className="btn btn-primary">
              Inscríbete
            </a>
            <a href="#info" className="btn btn-outline-primary">
              Más información
            </a>
          </div>
        </Col>
        <Col md={6} className="p-0">
          <img src={ heroImage } alt="Evento Zona Centro" />
        </Col>
      </Row>
    </Container>
  );
}