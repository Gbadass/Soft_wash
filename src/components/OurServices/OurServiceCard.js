import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "../../styles/Services.css"

export default function OurServicesCard(props) {
  return (
    <Card className="OurServicesCard mb-5 border-0 border-top border-5 border-info " style={{height:"350px", width:"auto"}}>
      <Card.Img variant="top" src={props.image} className="img-fluid mx-auto mt-4" style={{height:"95px", width:"95px"}}/>
      <Card.Body className="text-center">
        <Card.Title className="fs-2">{props.title}</Card.Title>
        <Card.Text className="fw-semibold text-secondary">
          {props.text}
        </Card.Text>
        <Button variant="info" className="pricing-order-button border-0 mt-2 fw-bold btn-md text-white" size="lg" style={{ whiteSpace: 'nowrap' }}>
        READ MORE
      </Button>{' '}

      </Card.Body>
    </Card>
  );
}
