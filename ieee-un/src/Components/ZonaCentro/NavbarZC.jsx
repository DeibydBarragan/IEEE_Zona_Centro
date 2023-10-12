import { React, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../../Styles/NavbarZC.sass"
import icon from "../../Assets/zonaCentro/icon.png";
import {Button, Offcanvas} from "react-bootstrap";
import {AiOutlineMenu} from "react-icons/ai";
export default  function NavbarZC() {
  const navLinks = [
    { name: "Cronograma", scrollToId: "#schedule" },
    { name: "Invitados", scrollToId: "#guests" },
    { name: "Comentarios", scrollToId: "#opinions" },
    { name: "Inscríbete", scrollToId: "#registrationForm" },
    { name: "Galería", scrollToId: "#gallery" },
    { name: "Eventos", scrollToId: "#nextEvents" },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="navbar-zc d-flex" sticky="top">
      <Container className="d-flex">
        <Navbar.Brand href="#">
          <img
            src={icon}
            alt="logo Zona Centro"
          />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto d-none d-lg-flex gap-5">
            {navLinks.map((link) => {
              return (
                <Nav.Link href={link.scrollToId} key={link.name}>
                  {link.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>

        {/* Side navbar */}
        <Button variant="outline-primary" className="d-lg-none" onClick={handleShow}>
          <AiOutlineMenu size={25} />
        </Button>

        <Offcanvas show={show} onHide={handleClose} responsive="lg">
          <Offcanvas.Header className="d-flex justify-content-end" closeButton />
          <Offcanvas.Body className="d-flex align-items-center justify-content-center mb-5">
            <Nav className="d-flex flex-column align-items-center gap-4">
              {navLinks.map((link) => {
                return (
                  <Nav.Link href={link.scrollToId} key={`side-${link.name}`}>
                    {link.name}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}