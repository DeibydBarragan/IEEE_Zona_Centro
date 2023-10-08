import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../../Styles/NavbarZC.sass"
import icon from "../../Assets/zonaCentro/icon.png";
export default  function NavbarZC() {
  const navLinks = [
    { name: "Cronograma", scrollToId: "" },
    { name: "Invitados", scrollToId: "" },
    { name: "Comentarios", scrollToId: "" },
    { name: "Inscríbete", scrollToId: "" },
    { name: "Galería", scrollToId: ""},
    { name: "Eventos", scrollToId: "" },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-zc d-flex" sticky="top">
      <Container className="d-flex">
        <Navbar.Brand href="#home">
          <img
            src={icon}
            alt="logo Zona Centro"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto gap-5">
            {navLinks.map((id) => {
              return (
                <Nav.Link href={id.scrollToId} key={id.name}>
                  {id.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}