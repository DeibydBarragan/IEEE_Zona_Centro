import React, {useEffect, useState} from "react";
import "../../../Styles/ZonaCentro.sass"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button, FormControl, Toast} from "react-bootstrap";
import CountDown from "../Components/CountDown";
import {FiSend} from "react-icons/fi";
export default  function RegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    setToastMessage({
      title: "Error",
      body: "Hubo un error al enviar el formulario."
    })
    toggleShowToast()
  }
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState({
    title: "",
    body: ""
  })
  const [error, setError] = useState(false)

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        toggleShowToast()
      }, 8000)
    }
  }, [showToast])
  const toggleShowToast = () => setShowToast(!showToast)

  return (
    <>
      <Container fluid as="section" id="registrationForm">
        <form onSubmit={handleSubmit} className="registration-form row align-items-center justify-content-center p-3 p-md-0 pb-md-5 gap-5">
          <Col md={4}  className="d-flex flex-column pe-4">
            <div className="px-3">
              <h2>
                Inscríbete
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, nisl malesuada cursus ac class scelerisque fusce imperdiet, sagittis porta porttitor libero auctor nostra.
              </p>
            </div>
            <CountDown/>
          </Col>
          <Col md={4} className="form-container shadow-lg p-5 d-flex flex-column gap-4">
            <FormControl type="text" placeholder="lorem ipsum"/>
            <FormControl type="text" placeholder="lorem ipsum"/>
            <textarea className="form-control" type="text" placeholder="lorem ipsum"/>
            <Row className="justify-content-end">
              <Button variant="outline-primary" className="d-flex gap-1 align-items-center" type="submit">
                Enviar
                <FiSend size={19}/>
              </Button>
            </Row>
          </Col>
        </form>
      </Container>
      <Toast className={`toast ${error ? 'toast-error' : 'toast-success'} position-fixed bottom-0 end-0 mb-5 me-5`} show={showToast} onClose={toggleShowToast}>
        <Toast.Header>
          <strong className="me-auto">{toastMessage.title}</strong>
        </Toast.Header>
        <Toast.Body>{toastMessage.body}</Toast.Body>
      </Toast>
    </>
  );
}