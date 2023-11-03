import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ServicesCard from "../../common/ServicesCard";
import image1 from "../../assets/HomePage/images/price-map.png";
import image2 from "../../assets/HomePage/images/delivery-icon.png";
import image3 from "../../assets/HomePage/images/washing-icon.png";
import image4 from "../../assets/HomePage/images/dry-clean-icon.png";
import image5 from "../../assets/HomePage/images/iron-icon.png";
import image6 from "../../assets/HomePage/images/wash-fold-icon.png";

export default function SectionFour() {
  return (
    <div
      className="sec-4-bg pt-3 pb-3 mb-5  d-flex align-items-center"
      // style={{ height: "130vh" }}
    >
      <Container>
        <Row className="d-flex gap-5 py-5">
          <Col sm={12} md={12} lg={6}>
            <Row className="pt-5 d-flex">
              <Col sm={6}>
                <ServicesCard
                  className="translateY-20 duration-300 "
                  image={image3}
                  title={"Washing"}
                  text={"We wash your clothes and prep them to iron"}
                />
                <ServicesCard
                  className="translateY-20 duration-300"
                  image={image4}
                  title={"Dry Clean"}
                  text={"We wash your clothes and prep them to iron"}
                />
              </Col>
              <Col sm={6} className="mt-80">
                <ServicesCard
                  className="translateY-20 duration-300"
                  image={image5}
                  title={"Iron"}
                  text={"We gently iron according to your fabrics soecs"}
                />
                <ServicesCard
                  className="translateY-20 duration-300"
                  image={image6}
                  title={"Wash and Fold"}
                  text={"We wash and fold your clothes just like mom did"}
                />
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={5} className="mt-4">
            <div className="d-flex flex-wrap gap-4">
              <Row>
                <h1 className="text-info fs-5 fw-normal">
                  Stay Clean And Dress Well
                </h1>
                <h1 className="cloth_theme fw-bold fs-1 mt-2">Our Services</h1>
                <p className="mt-2 fs-6">
                  What sets Soft Wash apart is its personalized approach. They
                  take the time to understand your specific laundry
                  requirements.
                </p>
              </Row>
              <Row className="d-flex  gap-3">
                <Col lg={1}>
                  <img src={image1} alt="pricing" />
                </Col>
                <Col>
                  <h1 className="cloth_theme fw-bold fs-3 fw-normal ">
                    Affordable Price
                  </h1>
                  <p>
                    At Soft Wash, we have weighed the importance of considerate
                    pricing to our lovely customers and have ensured unbeatable
                    prices across the board.
                  </p>
                </Col>
              </Row>
              <Row className="d-flex  gap-3">
                <Col lg={1}>
                  <img src={image2} alt="pricing" />
                </Col>
                <Col>
                  <h1 className="cloth_theme fw-bold fs-3 ">
                    Pick up & Delivery Free
                  </h1>
                  <p>
                    We offer free pickup and deliveries of cloths for our
                    customers subscribed to the premium yearly bundle offer. Say
                    goodbye to delivery hassles and yes to fresh and or ironed
                    clothing at your doorstep!
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
