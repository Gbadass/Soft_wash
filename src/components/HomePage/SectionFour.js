import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ServicesCard from "./ServicesCard";
import image1 from "../../assets/HomePage/images/price-map.png";
import image2 from "../../assets/HomePage/images/delivery-icon.png";
import image3 from "../../assets/HomePage/images/washing-icon.png";
// import image2 from "../../assets/HomePage/images/delivery-icon.png";
// import image2 from "../../assets/HomePage/images/delivery-icon.png";
// import image2 from "../../assets/HomePage/images/delivery-icon.png";

export default function SectionFour() {
  return (
    <div
      className="sec-4-bg mt-5 mb-5  d-flex align-items-center"
      style={{ height: "120vh" }}
    >
      <Container className="">
        <Row className="d-flex">
          <Col fluid sm={12} md={6}>
            <Row>
              <Col>
                <ServicesCard
                  image={image3}
                  title={"Washing"}
                  text={"We wash your clothes and prep them to iron"}
                />
                <ServicesCard
                  image={image3}
                  title={"Dry Clean"}
                  text={"We wash your clothes and prep them to iron"}
                />
              </Col>
              <Col className="mt-120">
                <ServicesCard
                  image={image3}
                  title={"Iron"}
                  text={"We gently iron according to your fabrics soecs"}
                />
                <ServicesCard
                  image={image3}
                  title={"Wash and Fold"}
                  text={"We wash and fold your clothes just like used to do"}
                />
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={6} className="mt-4">
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
