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
import { useState,useEffect } from "react";

function Services() {


  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);



  return (
    <div>
      <MainNavbar />
      <div>
        <div className="below-navbar container-fluid  pt-4 pb-3">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="page-navigation-title">
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
                text={"Our washing service takes care of your clothes, ensuring they are clean and fresh"}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <OurServicesCard
                image={ironImg}
                title={"Iron"}
                text={"For that crisp, polished look, trust our ironing service. "}
              />
            </Col>
            <Col xs={12} md={6} lg={4} className="md-text-align">
              <OurServicesCard
                image={foldClothImg}
                title={"Wash and Fold"}
                text={"Need your clothes washed and neatly folded? Our wash and fold services"}
              />
            </Col>
          </Row>
          <Row className="gap-0 ">
            <Col xs={12} md={6} lg={4}>
              <OurServicesCard
                image={dryClean}
                title={"Dry Clean"}
                text={" Our dry cleaning service is tailored to handle these items with precision"}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <OurServicesCard
                image={steamIron}
                title={"Steam Iron"}
                text={"When it comes to ironing, we don't just press your clothes; we do it with finesse"}
              />
            </Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="md-align-center md-text-align"
            >
              <OurServicesCard
                image={CurtainsWash}
                title={"Curtains Wash"}
                text={"Curtains need love too! Our curtain wash service ensures your curtains are clean"}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="pt-5">
        <Row>
          <Col xs={12} md={6}     className={`animated-col-left ${animate ? "slide-in" : ""}`}>
            <Card className="bg-Img_Card border-0 mt-5">
              <img src={whyUsImg} className="image-fluid" alt="" />
            </Card>
          </Col>
          <Col xs={12} md={6}       className={`animated-col-right mt-5 ${animate ? "slide-in" : ""}`}>
            <Card className="border-0 mt-5">
              <h1 className="fw-bold">Why Choose Us</h1>
              <p className="w-75">
                 At Soft Wash Laundry, we're committed to
                providing you with the highest quality laundry services. Your
                clothes are not just garments; they are an investment. We handle
                each item with utmost care, ensuring they look as good as new.
                 Say goodbye to the hassles of doing
                laundry yourself. We offer a seamless, hassle-free experience.
                With our pick-up and delivery services, you can enjoy your free
                time while we take care of your laundry needs.
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
      <Footer />
    </div>
  );
}

export default Services;
