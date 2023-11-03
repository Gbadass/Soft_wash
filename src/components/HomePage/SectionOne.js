import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image1 from "../../assets/HomePage/images/hero-img.png";
import "../../styles/HomePage.css"
import { useState } from "react";

function SectionOne() {

  return (
    <div className="sec-1-bg py-4" >
      <Container className=" container01 ">
        <Row className="pt-5 align-items-center">
          <Col sm={12} md={6} className="left-right ">
            <Card className="border border-0">
              <div className="card-div1">
                <h1 className="text-info fs-2 fw-normal">We Clean,A lot.</h1>
                <h1 className="cloth_theme fw-bold fs-1 mt-4">
                  Washing Clothes Was <br /> Never So Easy
                </h1>
                <p className="mt-4 fs-5">
                  Our professional and experienced cleaning <br />
                  staff does the job right the first time.
                </p>
                <Button variant="outline-info" className="textwhite-hover mt-4" size="lg">
                  SCHEDULE PICKUP
                </Button>{" "}
              </div>
            </Card>
          </Col>
          <Col sm={12} md={6} className="scale-out hover-up ">
            <Card className="border border-0 position-relative">
              <img src={image1} alt="" className="w-60 img-fluid translateY-20 duration-300" />
              <div className=""></div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SectionOne;
