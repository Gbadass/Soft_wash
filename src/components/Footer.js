import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { FaTwitter,FaInstagram,FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    <div>
              <hr className="footer-line" />
      <Container   className="mt-5 ">

        <Row className="justify-content-between column-gap-5">
          <Col className="">
          <Container >
            <Row fluid>
            <Col  className="services-col text-start">
              <div>
              <h4 className="fw-bold fs-5">Services</h4>
              <li>Home</li>
              <li>Washing</li>
              <li>Dry Clean</li>
              <li>Wash & Fold</li>
              </div>

            </Col>
            <Col className="services-col">
            <h4 className="fw-bold fs-5">About</h4>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Terms & Condition</li>
              <li>Privacy & Policy</li>
            </Col>

            <Col className="services-col">
            <h4 className="fw-bold fs-5">Contact</h4>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Terms & Condition</li>
            </Col>
            </Row>
          </Container>

          </Col>

          <Col>
          <h5>Suscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex  align-items-center">
            <input type="text" className="w-75 p-2 border rounded " placeholder="Email adress" />
            <div className="footer-buttonn-div">
            <Button className="footer-buttonn border-0">Primary</Button>{' '}
            </div>
  
          </div>
          </Col>
        </Row>

        <hr className="footer-bottom-line" />
          <div className="d-flex justify-content-between pt-3 pb-5">
          <p>© 2021 Wash it Laundry Private Limited.</p>
          <div className="d-flex">
            <FaTwitter className="social-icons"/>
            <FaInstagram className="social-icons"/>
            <FaFacebook className="social-icons"/>
          </div>
          </div>
      </Container>
    </div>
  );
}

export default Footer;
