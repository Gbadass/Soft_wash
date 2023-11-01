import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <div>
              <hr className="footer-line" />
      <Container   className="mt-5 ">

        <Row>
          <Col className="border">
          <Container fluid>
            <Row fluid>
            <Col  className="services-col">
            <h4 className="fw-bold fs-5">Services</h4>
            <ul>
              <li>Home</li>
              <li>Washing</li>
              <li>Dry Clean</li>
              <li>Wash & Fold</li>
            </ul>
            </Col>
            <Col className="services-col">
            <h4 className="fw-bold fs-5">About</h4>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Terms & Condition</li>
              <li>Privacy & Policy</li>
            </ul>
            </Col>

            <Col className="services-col">
            <h4 className="fw-bold fs-5">Contact</h4>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Terms & Condition</li>
              <li>Privacy & Policy</li>
            </ul>
            </Col>
            </Row>
          </Container>

          </Col>

          <Col>
          <h5>Suscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex">
            <input type="text" className="w-75 p-2 border rounded " />
            <Button variant="primary">Primary</Button>{' '}
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
