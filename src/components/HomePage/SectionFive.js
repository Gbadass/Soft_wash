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
import image5 from "../../assets/HomePage/images/winter-coat-icon.png";
import image6 from "../../assets/HomePage/images/casual-shirt-icon.png";
import PriceCard from "../../common/PriceCard";
import React, { Component } from "react";
import Slider from "react-slick";
import SectionSix from './SectionSix'

export default function SectionFive() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipe: true,
    responsive: [{
 
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        infinite: true,
        dots: false
      }
 
    }, {
 
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true
      }
 
    },
  {
 
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        dots: true
      }
 
    },]
  };

  return (
    <div  className="pt-1 sec-5-bg text-center">
      <Container className="">
        <Row sm={12} className="my-5 d-flex flex-wrap text-align-center ">
          <Col sm={12} className="text-center">
            <Container  className="text-center">
              <h1 className="text-info fs-4 fw-semibold">Affordable Prices</h1>
              <h1 className="cloth_theme fw-bold fs-1 mt-2">
                Laundry And Dry Cleaning Prices
              </h1>
              <p className="mx-5 mt-2 fs-6 fw-semibold  px-5 mx-auto ">
                We have carefully examined your fabrics needs along market
                pricing of detergents and cleaning chemicals to give you the
                best prices and your clothes the best spa day ever!
              </p>
            </Container>
          </Col>
        </Row>

        <Row className="">
          <Slider {...settings}>
              <PriceCard
                image={image1}
                title={"Shirt"}
                text={"Washed & Pressed"}
                price={"₦3,900"}
                className="shadow ml-sm"
              />
              <PriceCard
                image={image2}
                title={"Suit"}
                text={"Dry Clean & Iron"}
                price={"₦8,000"}
                className="shadow ml-sm"
              />
              <PriceCard
                image={image3}
                title={"Dress"}
                text={"Dry Clean & Iron"}
                price={"₦10,000"}
                className="shadow ml-sm"
              />
              <PriceCard
                image={image4}
                title={"Towel"}
                text={"Washed & Fold"}
                price={"₦1,000"}
                 className="shadow ml-sm"
              />
              <PriceCard
                image={image5}
                title={"Coat"}
                text={"Dry Clean & Iron"}
                price={"₦10,000"}
                className="shadow ml-sm"
              />
              <PriceCard
                image={image6}
                title={"Casual Shirt"}
                text={"Dry Clean & Iron"}
                price={"₦3,000"}
                className="shadow ml-sm"
              />
          </Slider>
        </Row>
      </Container>
      <SectionSix/>
    </div>
  );
}
