import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function PriceCard(props) {
  return (
    <Card className=" mb-5 border-0 border-top border-5 border-info " style={{height:"350px", width:"250px"}}>
      <Card.Img variant="top" src={props.image} className="img-fluid mx-auto mt-4" style={{height:"95px", width:"95px"}}/>
      <Card.Body className="text-center">
        <Card.Title className="fs-2">{props.title}</Card.Title>
        <Card.Text className="fw-semibold text-secondary">
          {props.text}
        </Card.Text>
        <Card.Text className="fs-1 text-info">
            {props.price}
        </Card.Text>
        <Button variant="outline-info textwhite-hover" className=""> ORDER NOW</Button>
      </Card.Body>
    </Card>
  );
}
