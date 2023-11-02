import MainNavbar from "../components/MainNavbar";
import "../styles/Pricingpage.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import shirtImg1 from "../assets/images/1593151923.png"
import blazerImg1 from "../assets/images/blazer-icon.png"
import curtainImg1 from "../assets/images/1593153121.png"
import suitImg1 from "../assets/images/suit-icon.png"
import BlazerImg2 from "../assets/images/1593152326.png"
import wintercoatImg1 from "../assets/images/winter-coat-icon.png"
import cosageDressImg1 from "../assets/images/corsage-dress-icon.png"
import towelImg2 from "../assets/images/towel-icon.png"
import casualImg1 from "../assets/images/1593151828.png"
import Footer from "../components/Footer";
import { useState } from "react";



function PricingPage() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const mockData = [
    {
      name: "Shirt",
      description: "Washed & Pressed",
      price: "$3.00",
      image: shirtImg1, 
    },
    {
      name: "Blazer",
      description: "Dry Clean & Iron",
      price: "$10.00",
      image: blazerImg1,
    },
    {
      name: "Curtain",
      description: "Washed & Fold",
      price: "$5.00",
      image: curtainImg1,
    },

    {
      name: "Shirt",
      description: "Dry Clean & Iron",
      price: "$3.00",
      image: suitImg1, 
    },
    {
      name: "Blazer",
      description: "Dry Clean & Iron",
      price: "$10.00",
      image: BlazerImg2,
    },
    {
      name: "Winter Coat",
      description: "Washed & Fold",
      price: "$5.00",
      image: wintercoatImg1,
    },

    {
      name: "Cosage Dress",
      description: "Dry Clean & Iron",
      price: "$10.00",
      image: cosageDressImg1, 
    },
    {
      name: "Kitchen Towel",
      description: "Dry Clean & Iron",
      price: "$2.00",
      image: towelImg2,
    },
    {
      name: "Casual Shirt",
      description: "Washed & Fold",
      price: "$5.00",
      image: casualImg1,
    },
  
  ];


  const filteredData = mockData.filter((item) => {
    if (selectedCategory === "All") {
      return true; // Show all items
    } else if (selectedCategory === "Wash & Fold") {
      return item.description === "Washed & Fold" || item.description === "Dry Clean & Iron";
    } else {
      return true;
    }
  });


  

  return (
    <div>
      <MainNavbar />
      <div className="below-navbar container-fluid d-flex pt-4 pb-3">
        <div className="container d-flex justify-content-between align-items-center">
          <p className="fs-3 fw-bold text-white">Pricing</p>
          <div className="d-flex">
            <p className="fs-5 text-white">Home</p>
            <h4 className="fs-3 text-white">/</h4>
            <p className="fs-5 text-white">Pricing</p>
          </div>
        </div>
      </div>
      <div className="pricing-clothtype-header container text-center mt-5 pt-4">
        <p className="pricing-ptag fw-100 fs-4">Pricing</p>
        <h1 className="fw-bold">Check Our Affordable Prices</h1>
        <div className="cloth-title-div d-flex justify-content-center text-center mt-4">
          <ul className="flex-wrap">
          <li
            className={selectedCategory === "All" ? "all-ptag selected" : "all-ptag"}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </li>
          <li
            className={selectedCategory === "Washing" ? "selected" : ""}
            onClick={() => setSelectedCategory("Washing")}
          >
            Washing
          </li>
          <li
            className={selectedCategory === "Iron" ? "selected" : ""}
            onClick={() => setSelectedCategory("Iron")}
          >
            Iron
          </li>
          <li
            className={selectedCategory === "Wash & Fold" ? "selected" : ""}
            onClick={() => setSelectedCategory("Wash & Fold")}
          >
            Wash & Fold
          </li>
          <li
            className={selectedCategory === "Dry Clean" ? "selected" : ""}
            onClick={() => setSelectedCategory("Dry Clean")}
          >
            Dry Clean
          </li>
          <li
            className={selectedCategory === "Steam Iron" ? "selected" : ""}
            onClick={() => setSelectedCategory("Steam Iron")}
          >
            Steam Iron
          </li>
          <li
            className={selectedCategory === "Curtain Wash" ? "selected" : ""}
            onClick={() => setSelectedCategory("Curtain Wash")}
          >
            Curtain Wash
          </li>

          </ul>

        </div>
      </div>
      <Container fluid>
      <Row className="justify-content-center gap-0 column-gap-5">
      {filteredData.map((item, index)=>(
        <Col xs={6} md={3} className={`shadow text-center pt-5 pb-5 ${index >= 0 ? 'mt-5' : ''}`}>
        <img src={item.image} className="w-25" alt="" />
        <p className="fw-bold fs-5 mt-3">{item.name}</p>
        <p>{item.description}</p>
        <h2 className="cloth-price-ptag fw-bold">{item.price}</h2>
        <Button className="pricing-order-button border-0 mt-2 fw-bold btn-md" size="lg" style={{ whiteSpace: 'nowrap' }}>
        ORDER NOW
      </Button>{' '}
      </Col>
        ))}

      </Row>

    </Container>

    <Footer/>



    
    </div>
  );
}

export default PricingPage;
