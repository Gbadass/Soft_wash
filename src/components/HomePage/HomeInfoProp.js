import Container from "react-bootstrap/Container";

export default function HomeInfoProp(props) {
  return (
    <>
      <Container className={`${props.css}`}>
        <h1 className="text-info fs-4 fw-semibold text-capitalize">{props.top}</h1>
        <h1 className="cloth_theme fw-bold fs-1 mt-2 text-capitalize">
          {props.title}
        </h1>
        <p className=" mt-2 fs-6 fw-semibold ">
          {props.desc}
        </p>
      </Container>
    </>
  );
}
