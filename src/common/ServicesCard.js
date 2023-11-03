import Card from "react-bootstrap/Card";

export default function ServicesCard(props) {
  return (
    <Card
      className=" mb-5 border-0 border-top border-5 border-info translateY-20 duration-300 "
      style={{ height: "275px",}}
    >
      <Card.Img
        variant="top"
        src={props.image}
        className="img-fluid mx-auto mt-4"
        style={{ height: "95px", width: "95px" }}
      />
      <Card.Body className="text-center">
        <Card.Title className="fs-3">{props.title}</Card.Title>
        <Card.Text className="fw-semibold text-secondary">
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
