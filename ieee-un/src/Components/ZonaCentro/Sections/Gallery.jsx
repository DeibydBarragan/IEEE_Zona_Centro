import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";
import heroImage from "../../../Assets/zonaCentro/landing/hero.jpeg"
import {Button, Collapse} from "react-bootstrap";
export default  function Gallery() {
  const [open, setOpen] = useState(false);
  return (
    <Container fluid as="section" id="gallery" className="gallery">
      <h2>Galería</h2>
      <Row className="gap-2 justify-content-center mt-4">
        <div className="col col-5">
          <img src={ heroImage } alt="Evento Zona Centro" />
        </div>
        <div className="col col-3">
          <img src={ heroImage } alt="Evento Zona Centro" />
          <img src={ heroImage } alt="Evento Zona Centro" />
        </div>
        <div className="col col-3">
          <img src={ heroImage } alt="Evento Zona Centro" />
          <img src={ heroImage } alt="Evento Zona Centro" />
        </div>
      </Row>
      <Row className="justify-content-center mt-4">
        <Collapse in={open}>
          <div>
            <Row className="gap-2 justify-content-center mb-4 flex-row-reverse">
              <div className="col col-5">
                <img src={ heroImage } alt="Evento Zona Centro" />
              </div>
              <div className="col col-3">
                <img src={ heroImage } alt="Evento Zona Centro" />
                <img src={ heroImage } alt="Evento Zona Centro" />
              </div>
              <div className="col col-3">
                <img src={ heroImage } alt="Evento Zona Centro" />
                <img src={ heroImage } alt="Evento Zona Centro" />
              </div>
            </Row>
          </div>
        </Collapse>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="Ver más imágenes"
          aria-expanded={open}
          className="text-center"
        >
          {open ? <MdKeyboardArrowUp size={25}/> : <MdKeyboardArrowDown size={25}/>}
        </Button>
      </Row>
    </Container>
  );
}