import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import image1 from "../../assets/HomePage/images/work-step1.png";
import image2 from "../../assets/HomePage/images/work-step2.png";
import image3 from "../../assets/HomePage/images/work-step3.png";
import image4 from "../../assets/HomePage/images/work-step4.png";

export default function SectionThree() {
  let [count, setCount] = useState(0);
  let arr = [image1, image2, image3, image4];
  const [progress, setProgress] = useState(0);

  return (
    <div className="sec-3-bg my-5 px-5 py-5 mw-100 overflow-hidden p-none-sm">
      <Container className="container03">
        <Row className=" align-items-center">
          <Col sm={12} md={12} lg={5} className="d-flex justify-content-center text-left">
            <Card className="border border-0 ">
              <div className="card-div1">
                <h1 className="text-info fs-3 fw-normal">
                  Super Simple Super Quick.
                </h1>
                <h1 className="cloth_theme fw-bold fs-1 mt-4">How we Work</h1>
                <p className="mt-4 fs-6">
                  What sets Soft Wash apart is its personalized approach.
                  They take the time to understand your specific laundry
                  requirements.
                </p>
                <p className="mt-4 fs-6">
                  This attention to detail means your clothes and linens
                  receive the care they deserve, leaving you with a sense
                  of comfort and confidence in the quality of service provided.
                </p>

                <div className="shedule-pickup-div">
                  <Button
                    variant="outline-info textwhite-hover"
                    className=" mt-4"
                    size="lg"
                  >
                    GET SERVICE NOW
                  </Button>{" "}
                </div>
              </div>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={7} className="mt-4 d-flex align-items-center d-md-flex">
            <Col md={1} sm={1} classname="d-flex align-items-center relative">
              <Button
                variant="info text-white"
                className=""
                onClick={() => {
                  setCount(count > 0 ? --count : count);
                  // console.log(count)
                  setProgress(progress >= 33.3 ? progress - 33.3 : progress)
                }}
              >
                Prev
              </Button>
            </Col>

            <Col lg={10} md={10} sm={10} className="text-center position-relative">
              {/* <Col sm={2}> */}
              <img src={arr[count]} alt="process" className=" img-fluid w-md-75 w-sm-25 sec-sm-img" />
              {/* </Col> */}
              <Row classname="w-500px">
              <Container className=" d-flex gap-5 mt-1 position-relative">
              <Col
                  className={`duration-500 border border-4 ${ "border-info"}  text-center rounded-circle bg-white size-sm-30px`}
                  style={{ height: "60px", width: "60px" }}
                >
                  <p className=" mt-2 fw-semibold fs-4 text-secondary mt-sm">1</p>
                </Col>
                <span className="d-none-sm"></span>
                <Col
                  className={`duration-500 border border-4 ${progress > 30 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                  style={{ height: "60px", width: "60px" }}
                >
                  <p className="mt-2 fw-semibold fs-4 text-secondary mt-sm">2</p>
                </Col>
                <span className="d-none-sm"></span>
                <Col
                  className={`duration-500 border border-4 ${progress > 60 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                  style={{ height: "60px", width: "60px" }}
                >
                  <p className="mt-2 fw-semibold fs-4 text-secondary mt-sm">3</p>
                </Col>
                <span className="d-none-sm"></span>
                <Col 
                  className={`duration-500 border border-4 ${progress > 90 ? "border-info" : null}  text-center rounded-circle bg-white size-sm-30px`}
                  style={{ height: "60px", width: "60px" }}
                >
                  <p className="mt-2 fw-semibold fs-4 text-secondary mt-sm">4</p>
                </Col>
              </Container>

                <Col className="px-4 position-relative neg-top-15" style={{top:"-30px", zIndex:"-1"}}>
                <ProgressBar now={progress} variant="info" className=" duration-300 " style={{height:"2px"}}/>
                </Col>
              </Row>
            </Col>

            <Col md={1} sm={1}>
              <Button
                variant="info text-white"
                onClick={() => {
                  setCount(count < 3 ? ++count : count);
                  // console.log(count)
                  setProgress(progress <= 66.7 ? progress +33.3 : progress);
                  // console.log(progress);
                }}
              >
                Next
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
