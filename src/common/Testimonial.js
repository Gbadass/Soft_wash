import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import testimonialIcon from "../../src/assets/HomePage/images/testimonial-icon.png";
import Client1 from "../../src/assets/HomePage/images/client1.png";
import Star from "../../src/assets/HomePage/images/review-star.png";

export default function Testimonial(props) {
  return (
    <Card
      className=" mb-5 border-0"
      style={{ height: "260px", width: "310px", marginLeft:"45px"}}
    >
      <Card.Body className="text-center pb-0">
        <Row className="d-flex gap-1">
          <Col lg={4} md={4} sm={4} className="position-relative ">
            <img src={testimonialIcon} alt="icon" className="img-fluid position-relative p-0" style={{width:"100px", left:"-45px"}}/>
          </Col>
          <Col lg={7} md={7} sm={7}  className="text-secondary  px-0" style={{}}>{props.review}</Col>
        </Row>
        <hr/>
        <Row className="d-flex ">
          <Col lg={5} md={5} sm={5}>
            <img src={props.image || Client1} alt="client" className="rounded-circle " style={{height:"65px", width:"auto"}}/>
          </Col>
          <Col lg={7} md={6} sm={3}>
            <Row className={"fs-4 fw-semibold"}>{props.name}</Row>
            <Row>{"⭐".repeat(props.rating)}</Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
