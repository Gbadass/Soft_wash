import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import image1 from "../../assets/HomePage/images/shirt-icon.png";
import image2 from "../../assets/HomePage/images/suit-icon.png";
import image3 from "../../assets/HomePage/images/corsage-dress-icon.png";
import image4 from "../../assets/HomePage/images/towel-icon.png";
import PriceCard from "./PriceCard";

export default function SectionFive() {

  return (
    <div style={{ height: "150vh" }} className="sec-5-bg text-center">
      <Container className="">
        <Row>
          <h1 className="text-info fs-5 fw-normal">Affordable Prices</h1>
          <h1 className="cloth_theme fw-bold fs-1 mt-2">
            Laundry And Dry Cleaning Prices
          </h1>
          <p className="container mt-2 fs-6 d-inline-flex px-5">
            We have carefully examined your fabrics needs along market pricing of detergents and cleaning chemicals to give you the best prices and your clothes the best spa day ever!
          </p>
        </Row>

        <Row className="d-flex gap-4">
            <PriceCard image={image1} title={"Shirt"} text={"Washed & Pressed"} price={"₦10,000"} className="shadow"/>
            <PriceCard image={image2} title={"Suit"} text={"Washed & Pressed"} price={"₦10,000"}/>
            <PriceCard image={image3} title={"Dress"} text={"Washed & Pressed"} price={"₦10,000"}/>
            <PriceCard image={image4} title={"Towel"} text={"Washed & Pressed"} price={"₦10,000"}/>
        </Row>
      </Container>
    </div>
  );
}
