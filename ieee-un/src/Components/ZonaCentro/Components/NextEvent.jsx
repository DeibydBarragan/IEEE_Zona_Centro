import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default  function NextEvent({name, date, link, image}) {
  return (
    <Card className="shadow-lg">
      <Row>
        <Col md={4}>
          <img src={image} className="img-fluid" alt="..."/>
        </Col>
        <Col md={8} className="fw-semibold pe-5 d-flex align-items-center">
          <Card.Body className="d-flex align-items-center justify-content-between">
            <h5 className="card-title fw-bold">{name}</h5>
            <div className="d-flex flex-column">
              <text className="fw-bold">Fecha</text>
              <text className="fw-normal">{date}</text>
            </div>

            <a className="cursor-pointer text-decoration-underline" href={link}>Más información</a>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}