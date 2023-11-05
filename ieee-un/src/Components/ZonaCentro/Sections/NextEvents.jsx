import React from "react";
import Container from "react-bootstrap/Container";
import image from "../../../Assets/zonaCentro/nextevents/andes.jfif"
import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default  function NextEvents() {
  return (
    <Container as="section" fluid className="nextevents d-flex flex-column justify-content-center gap-3" id="nextEvents">
      <h2>Próximos eventos</h2>

      <Card className="shadow-lg">
        <Row>
          <Col md={4}>
            <img src={image} className="img-fluid" alt="..."/>
          </Col>
          <Col md={8} className="fw-semibold pe-5 d-flex align-items-center">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <h5 className="card-title fw-bold">Universidad de los Andes</h5>
              <div className="d-flex flex-column">
                <text className="fw-bold">Fecha</text>
                <text className="fw-normal">8 de nov, 2021</text>
              </div>

              <a className="cursor-pointer text-decoration-underline">Más información</a>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}