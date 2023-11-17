import React from "react";
import Container from "react-bootstrap/Container";
import image from "../../../Assets/zonaCentro/nextevents/andes.jfif"
import NextEvent from "../Components/NextEvent";

const PROXIMOS_EVENTOS = [
  {
    nombre: "Universidad de los Andes",
    fecha: "8 de nov, 2021",
    link: "https://www.uniandes.edu.co/",
    imagen: image
  }
]
export default  function NextEvents() {
  return (
    <Container as="section" fluid className="nextevents d-flex flex-column justify-content-center gap-3" id="nextEvents">
      <h2>Próximos eventos</h2>
      {PROXIMOS_EVENTOS.map((evento, index) => (
        <NextEvent
          key={index}
          name={evento.nombre}
          date={evento.fecha}
          link={evento.link}
          image={evento.imagen}
        />
      ))}
    </Container>
  );
}