import { Container, Row, Col } from "react-bootstrap";


function HowWeWorkProp(props){
    return(
        <Container>
            <Row>
                <Col>
                    <div className="how-we-work-prop d-flex justify-content-center mt-4 mb-4">
                        <img src={props.image} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HowWeWorkProp;