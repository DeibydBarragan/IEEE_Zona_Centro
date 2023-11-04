import React, {useEffect, useState} from "react";
import "../../../Styles/ZonaCentro.sass"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default  function CountDown() {
  const date = {
    day: "05",
    month: "11",
    year: "2023",
    hour: "8:00:00",
  }
  const limitDate = new Date(`${date.month}/${date.day}/${date.year} ${date.hour} GMT-0500`)
  const [timeLeft, setTimeLeft] = useState({
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: 0,
  })

  const getRemainTime = (limitDate) => {
    const now = new Date()
    const remainTime = (limitDate - now + 1000) / 1000
    const remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2)
    const remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2)
    const remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2)
    const remainDays = Math.floor(remainTime / (3600 * 24))
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const {remainSeconds, remainMinutes, remainHours, remainDays, remainTime} = getRemainTime(limitDate)
      setTimeLeft({seconds: remainSeconds, minutes: remainMinutes, hours: remainHours, days: remainDays})
      if (remainTime <= 1) {
        clearInterval(interval)
        setTimeLeft({seconds: "00", minutes: "00", hours: "00", days: 0})
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft])

  return (
    <Container fluid>
      <Row className="count-down text-center">
        {/* Dias*/}
        <Col>
          <h3>{timeLeft.days}</h3>
          <p>Días</p>
        </Col>
        {/* Horas*/}
        <Col>
          <h3>{timeLeft.hours}</h3>
          <p>Horas</p>
        </Col>
        <Col>
          <h3>:</h3>
        </Col>
        {/* Minutos*/}
        <Col>
          <h3>{timeLeft.minutes}</h3>
          <p>Minutos</p>
        </Col>
        <Col>
          <h3>:</h3>
        </Col>
        {/* Segundos*/}
        <Col>
          <h3>{timeLeft.seconds}</h3>
          <p>Segundos</p>
        </Col>
      </Row>
    </Container>
  );
}