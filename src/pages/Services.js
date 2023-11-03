import MainNavbar from "../components/MainNavbar";
import "../styles/Services.css";
import { FaChevronRight } from "react-icons/fa";
import servicebg from "../assets/images/service-bg.png";
import { Container, Col, Row, Card } from "react-bootstrap";
import OurServicesCard from "../components/OurServices/OurServiceCard";
import washingmachineImg from "../assets/images/washing-icon.png";
import ironImg from "../assets/images/iron-icon.png";
import foldClothImg from "../assets/images/wash-fold-icon.png";
import dryClean from "../assets/images/dry-clean-icon.png";
import steamIron from "../assets/images/steam-iron-icon.png";
import CurtainsWash from "../assets/images/curtains-icon.png";
import whyUsImg from "../assets/images/why-us-img.png";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";

function Services() {
  return (
    <div>
      <MainNavbar />
      <div>
        <div className="below-navbar container-fluid d-flex pt-4 pb-3">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <p className="fs-5 text-white">Home</p>
              <FaChevronRight className="greatherthan-Icon" />
              <p className="fs-5 text-white">Pricing</p>
            </div>
            <p className="fs-3  text-white">Services</p>
          </div>
        </div>
      </div>
      <Container fluid className="servicebg-container">
        <Col className="service-title-div align-center pt-5 pb-5">
          <p className="title-ptag fs-5">Stay Clean And Dress Well</p>
          <h1 className=" fw-bold">Our Services</h1>
        </Col>
        <Container>
          <Row className="gap-0 ">
            <Col xs={12} md={6} lg={4}>
              <OurServicesCard
                image={washingmachineImg}
                title={"Washing"}
                text={"We wash your clothes and prep them to iron"}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <OurServicesCard
                image={ironImg}
                title={"Iron"}
                text={"We wash your clothes and prep them to iron"}
              />
            </Col>
            <Col xs={12} md={6} lg={4} className="md-text-align">
              <OurServicesCard
                image={foldClothImg}
                title={"Wash and Fold"}
                text={"We wash your clothes and Fold for ironing"}
              />
            </Col>
          </Row>
          <Row className="gap-0 ">
            <Col xs={12} md={6} lg={4}>
              <OurServicesCard
                image={dryClean}
                title={"Washing"}
                text={"We wash your clothes and prep them to iron"}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <OurServicesCard
                image={steamIron}
                title={"Iron"}
                text={"We wash your clothes and prep them to iron"}
              />
            </Col>
            <Col xs={12} md={6} lg={4} className="md-align-center md-text-align">
              <OurServicesCard
                image={CurtainsWash}
                title={"Wash and Fold"}
                text={"We wash your curtains and Fold Them"}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="pt-5">
        <Row>
          <Col  xs={12} md={6}>
            <Card className="bg-Img_Card border-0 mt-5">
              <img src={whyUsImg} className="image-fluid" alt="" />
            </Card>
          </Col>
          <Col xs={12}  md={6} className=" mt-5">
            <Card  className="bg-Img_Card border-0 mt-5">
              <h1 className="fw-bold">Why Choose Us</h1>
              <p className="w-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div>
                <Button variant="info" className=" text-white" size="lg">
                  Large button
                </Button>{" "}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Services;
