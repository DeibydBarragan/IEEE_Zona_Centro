import { React, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import routes from '../Helpers/routes'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { validateEmail } from '../Components/utils/Validation';
import InlineError from './InlineError';
import InputGroup from 'react-bootstrap/InputGroup';

import '../Styles/modal.sass'

import popUpImage from '../Assets/popUpImage2.png';

function StaticExample(props) {
    const [show, setShow] = useState(true);
    const [mail, setMail] = useState('')
    const [mailError, setMailError] = useState();

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
    // myModal.show();

    useEffect(() => {
        // *********** VALIDACION CORREO ***************
        validateEmail({ mail, setMailError });
    }, [mail])

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button> */}
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                id="exampleModal"
            >

                <Modal.Header closeButton>
                    {/* <Modal.Title id="contained-modal-title-vcenter"> */}
                    {/* Invitación nuevos miembros */}
                    {/* </Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <Container className='modal-image'>
                        <a rel="noopener noreferrer" target="blank_" href={popUpImage}>
                            <img src={popUpImage} alt="imagen convocatoria 2023" />
                        </a>
                    </Container>

                    {/* Container evento  */}
                    {/* <Container className='modal-text'>
                        <h3 className='modal-text__title'>¡Asiste a nuestro próximo evento!</h3>
                        <p className='modal-text__text'>
                        Entre Ceimtun-RAS y DIMA UN (grupo de investigación liderado por el profesor Ernesto Córdoba) estamos organizando un Seminario para este viernes 24 de febrero de 9am a 1pm. Nuestro compañero Alejandro Ojeda será uno de los ponentes. Los invitamos a que se inscriban y asistan a este evento, hay charlas bastante interesantes...</p>
                    </Container> */}

                    {/* Container con formulario */}
                    <Container className='modal-text'>
                        {/* <h3 className='modal-text__title'>¿?</h3> */}
                        <h3 className='modal-text__title'>Etapa</h3>
                        {/* <p className='modal-text__text'>Si estas interesado dejanos aqui tu correo electronico</p> */}
                        {/* <p className='modal-text__text'>Cuentanos que tema te gustaria aprender con nosotros</p> */}
                        <p className='modal-text__text'>Deberas realizar lo siguiente:</p>
                        
                    </Container>
                    <Container className="mb-3">
                        {/* <Form method="POST" action="https://script.google.com/macros/s/AKfycby2H5AIpsmjNsVrp9ZRO6cpW2tPp7bV9cAChI0GZpkrcpQ8UmD8Y26x_m9DMZtBozFi/exec"> 
                            <InputGroup>*/}
                                {/* <Form.Control type="mail" id="mail" name="mail" aria-label="Recipient's username" aria-describedby="basic-addon2" placeholder="Coloca tu correo aquí" required onChange={(e) => setMail(e.target.value)} /> */}
                                {/* <Form.Control type="mail" id="mail" name="mail" aria-label="Recipient's username" aria-describedby="basic-addon2" placeholder="Coloca aqui el tema" required />
                                <Button id="button-addon2" variant="info" type="submit">
                                    Enviar
                                </Button>
                            </InputGroup> */}
                            {/* {mailError && <InlineError error={mailError} />} */}
                            <Container >
                                <ul>
                                    <li>Seleccionar 1 de los 3 ejercicios de la prueba anterior </li>
                                    <li>Clonar la siguiente pagina web remplazando el contenido con su solución y explicar al funcionamiento
                                        <a href="https://drive.google.com/file/d/1-5NFEHfoZL2I3kuVFRCn3xeDW5m-DsUT/view?usp=sharing">
                                             enlace
                                        </a>
                                    </li>
                                </ul>
                            </Container>
                        {/* </Form>                         */}
                    </Container>
                </Modal.Body>

                {/* <Modal.Footer>
                    <Button variant="info" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer> */}
            </Modal>

        </>
    );
}

export default StaticExample;