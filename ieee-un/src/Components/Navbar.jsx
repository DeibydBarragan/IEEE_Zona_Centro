import { React, useEffect, useState } from 'react'

import '../Styles/NavBar.sass'
import logo from '../Assets/logo.svg';
import routes from '../Helpers/routes'
import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar () {
    const [logeo, setLogeo] = useState(false)
    const [rol, setRol] = useState('')
    useEffect(() => {
        if(sessionStorage.getItem('token') && sessionStorage.getItem('rolUser')){
          setLogeo(true);
          setRol(sessionStorage.getItem('rolUser'));
        } 
    }, [])
    
    console.log("el rol del visitante es: "+rol)
     
    const salir=()=>{
        sessionStorage.clear()
        window.location.href="/"
    }

    // const navLinks = [
    //     { navLinkName: 'Inicio', scrollToId: routes.seccionInicio },
	// 	{ navLinkName: 'Quienes Somos', scrollToId: routes.seccionQuienesSomos },
	// 	{ navLinkName: 'Capítulos', scrollToId: routes.seccionCapitulos },
	// 	{ navLinkName: 'Equipo', scrollToId: routes.seccionEquipo },
    //     { navLinkName: 'Comentarios', scrollToId: routes.seccionComentarios }
	// ];

    const navLinks = [
		{ navLinkName: 'Quienes Somos', scrollToId: routes.seccionQuienesSomos },
		{ navLinkName: 'Capítulos', scrollToId: routes.seccionCapitulos },
		{ navLinkName: 'Equipo', scrollToId: routes.seccionEquipo },
        { navLinkName: 'Eventos', scrollToId: routes.seccionEventos },
        { navLinkName: 'Comentarios', scrollToId: routes.seccionComentarios }
	];
    
    // window.onscroll = function() {scrollFunction()};

    // function scrollFunction() {
    //     if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550 ) {
    //         document.getElementById("navbar").style.padding = "10px 30px";
    //         document.getElementById("navbar").style.background = "#070C20";
    //         document.getElementById("logo").style.width = "40px";
    //         // document.getElementById("navbar").style.backgroundColor = "ras-bg-color";
    //     } else {
    //         document.getElementById("navbar").style.background = "transparent";
    //         document.getElementById("navbar").style.padding = "30px 30px";
    //         document.getElementById("logo").style.width = "60px";
    //     }
    // }

    return (
        <>
            <Navbar collapseOnSelect expand="md" className="section__navbar scroll-navbar"  id="navbar" sticky="top" >
                <Container>
                    <Navbar.Brand href={routes.home}>
                        <img
                            alt="logo IEEE-UN"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top logo-small"
                            id="logo"
                        />{' '}
                    </Navbar.Brand>
                    {/* <Navbar.Brand href="#home">
                        <a className="section__navbar-logo" rel="noopener noreferrer" href={routes.home}>
                            <img id="logo" className="logo-small" src={logo} alt="logo IEEE-UN" />
                        </a>
                    </Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav section__navbar-list">
                        <Nav className="me-auto section__navbar-items">

                            {
                                navLinks.map(id => {
                                    return (
                                        <Nav.Link className="section__navbar-item" href={id.scrollToId}>
                                            {id.navLinkName}
                                            <span></span>
                                        </Nav.Link>
                                    )
                                })
                            }

                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">


                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            
                        </Nav>
                        <Nav className="section__navbar-items">
                            <a class="btn login" href={routes.login}>Iniciar Sesión</a>
                        </Nav>
                        {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <nav className="section__navbar navbar-collapse" id="navbar">
                <div className="section__navbar-container">
                    <a className="section__navbar-logo" rel="noopener noreferrer" href={routes.home}>
                        <img id="logo" className="logo-small" src={logo} alt="logo IEEE-UN" />
                    </a>
                <div>
            {
              rol === "Administrador" || rol === "Gestor"
               ? 
              rol === "Administrador" ? 
              <div className="section__navbar-list">
                <ul className="section__navbar-items" id="supportedContent">
                    <NavLink to={routes.admin} className="nav-item nav-link">Dashport</NavLink>
                    <NavLink to={routes.home} className="nav-item nav-link" onClick={()=>salir()}>Salir</NavLink>
                </ul>
              </div>
              : 
              <div className="section__navbar-list"> 
              </div>
            : <div className="section__navbar-list">
                <ul className="section__navbar-items" id="supportedContent">
                    {navLinks.map((id, index) => {  return ( <li key={index} className="section__navbar-item"> <a href={id.scrollToId} rel="noopener noreferrer"> {id.navLinkName} </a><span></span></li>)}) }
                    <li className="section__navbar-item">
                        <Link rel="noopener noreferrer" to={routes.login}> Login </Link>
                        <span></span>
                    </li>
                </ul>
                </div>
            }
            </div>
                    {/* <div className="section__navbar-list">
                        <ul className="section__navbar-items" id="supportedContent">
                            {
                                navLinks.map(id => {  
                                    return (
                                    <li className="section__navbar-item">
                                        <a rel="noopener noreferrer" href={id.scrollToId}> {id.navLinkName} </a>
                                        <span></span>
                                    </li>
                                    )
                                }) 
                            }
                            <li className="section__navbar-item">
                                <Link rel="noopener noreferrer" to={routes.login}> Login </Link>
                                <span></span>
                            </li>
                        </ul>
                    </div> 
                </div>
            </nav> */}
        </>
    )
}