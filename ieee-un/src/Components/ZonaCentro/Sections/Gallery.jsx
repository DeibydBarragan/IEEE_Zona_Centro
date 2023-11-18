import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";
import heroImage from "../../../Assets/zonaCentro/landing/hero.jpeg"
import {Button, Collapse} from "react-bootstrap";
import ImagesGroup from "../Components/ImagesGroup";

const IMAGES = [heroImage,
  heroImage,
  heroImage,
  heroImage,
  heroImage,
  heroImage,
  heroImage,
  heroImage,
  heroImage,
  heroImage,
  heroImage,
]

export default  function Gallery() {
  const [open, setOpen] = useState(false);
  return (
    <Container fluid as="section" id="gallery" className="gallery">
      <h2>Galería</h2>
      <Row className="gap-2 justify-content-center mt-4">
        <ImagesGroup images={IMAGES.slice(0, 5)} alt="Evento Zona Centro" />
      </Row>
      <Row className="justify-content-center">
        <Collapse in={open}>
          <div>
            <ImagesGroup images={IMAGES.slice(5)} alt="Evento Zona Centro" reverse />
          </div>
        </Collapse>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="Ver más imágenes"
          aria-expanded={open}
          className="text-center mt-2"
        >
          {open ? <MdKeyboardArrowUp size={25}/> : <MdKeyboardArrowDown size={25}/>}
        </Button>
      </Row>
    </Container>
  );
}