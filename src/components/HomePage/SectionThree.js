import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image1 from "../../assets/HomePage/images/work-step1.png";
import image2 from "../../assets/HomePage/images/work-step2.png";
import image3 from "../../assets/HomePage/images/work-step3.png";
import image4 from "../../assets/HomePage/images/work-step4.png";

export default function SectionThree() {
    let [count, setCount] = useState(0)
    let arr = [image1, image2, image3, image4]

  return (
    <div style={{ height: "85vh", width:"100%" }} className="sec-3-bg">
      <Container className="container03">
        <Row className=" align-items-center">
          <Col sm={12} md={6} lg={5}>
            <Card className="border border-0 ">
              <div className="card-div1">
                <h1 className="text-info fs-3 fw-normal">
                  Super Simple Super Quick.
                </h1>
                <h1 className="cloth_theme fw-bold fs-1 mt-4">How we Work</h1>
                <p className="mt-4 fs-6">
                  What sets Soft Wash apart is its personalized approach. <br />{" "}
                  They take the time to understand your specific laundry <br />{" "}
                  requirements.
                </p>
                <p className="mt-4 fs-6">
                  This attention to detail means your clothes and linens <br />{" "}
                  receive the care they deserve, leaving you with a sense <br />{" "}
                  of comfort and confidence in the quality of service provided.
                </p>
                <div className="shedule-pickup-div">
                  <Button variant="outline-info textwhite-hover" className=" mt-4" size="lg">
                    GET SERVICE NOW
                  </Button>{" "}
                </div>
              </div>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={7} className="mt-4 d-flex">
              <div classname="d-flex align-items-center">
                <Button variant="info text-white" classname="d-flex align-items-center" onClick={()=>{setCount(count>0 ? count-- : count)}}>Prev</Button>{" "}
              </div>

              <div className="homepage_services-div-img-warpper">
                <img src={arr[count]} alt="" className="img-fluid" />
                <Container className=" d-flex gap-5 mt-4" >
                  <Col className="border text-center rounded-circle" style={{height: "60px", width: "60px"}}>1</Col>
                <span></span>
                  <Col className="border text-center rounded-circle" style={{height: "60px", width: "60px"}}>2</Col>
                  <span></span>
                  <Col className="border text-center rounded-circle" style={{height: "60px", width: "60px"}}>3</Col>
                  <span></span>
                  <Col className="border text-center rounded-circle" style={{height: "60px", width: "60px"}}>4</Col>
                </Container>
              </div>

              <div>
                <Button variant="info text-white" onClick={()=>{setCount(count<3 ? count++ : count)}}>Next</Button>{" "}
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
