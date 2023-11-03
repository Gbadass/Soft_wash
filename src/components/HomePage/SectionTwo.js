import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image2 from "../../assets/HomePage/images/about-img.png";
import image3 from "../../assets/HomePage/images/services-img.png";

export default function SectionTwo() {
  return (
    <div className="sec-2-bg mb-5 py-4" >
      <Container fluid className="">
        <Row className="py-5 h-100">
          <Col sm={12} md={6} className="translateY-20 duration-300">
            <div>
              <img src={image2} alt="" className="w-60 img-fluid" />
            </div>
          </Col>
          <Col sm={12} md={6} className="mt-4">
            <div className="ml-4">
              <p className="text-info fs-4 fw-normal">We Clean Everything</p>
              <h1 className="cloth_theme fw-bold fs-1">About Us</h1>
              <p className="mt-2 fs-6">
                One of Soft Wash's hallmarks is its use of cutting-edge <br />{" "}
                laundry technology and eco-friendly detergents. <br /> The
                company's state-of-the-art facilities are equipped <br /> with
                modern, energy-efficient machines that provide <br /> efficient
                cleaning while reducing environmental impact.
              </p>
              <img src={image3} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
