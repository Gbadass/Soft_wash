import "../../styles/Address.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import mapSample from "../../assets/AddressPage/map-sample.png";

function AddressInfo() {
  return (
    <Container>
      <Row className="justify-content-between">
        <Col lg={7} md={12} sm={12}>
          <Row className="border border-2 shadow rounded py-4">

          </Row>
          <Row className="w-100 text-center my-4">
            <h3>Or</h3>
          </Row>
          <Row className="border border-2 shadow rounded py-4">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Add Address</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <InputGroup className="mb-3">
                      {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                      <Form.Control
                        placeholder="Enter Contact Number"
                        aria-label="Enter Contact Number"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup className="mb-3">
                      {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                      <Form.Control
                        placeholder="Enter Full Address"
                        aria-label="Enter Full Address"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Row>

                  <Row>
                    <h5 className="text-capitalize">Pin your location</h5>
                    <p>
                      Note: If your address not found on map then search
                      landmark location and drag drop the pin on your location
                    </p>
                  </Row>

                  <Row>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Search Address or Landmark location"
                        aria-label="Search Address or Landmark location"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <img src={mapSample} alt="maps" />
                  </Row>
                  <Row className="d-flex">
                    <h5>Address Type</h5>
                    <Row>
                    <Form.Group className="d-flex gap-2">
                      <Form.Check type="radio" aria-label="radio 1" />
                      <Form.Label>Home</Form.Label>
                    </Form.Group>
                    <Form.Group className="d-flex gap-2">
                      <Form.Check type="radio" aria-label="radio 1" />
                      <Form.Label>Work</Form.Label>
                    </Form.Group>
                    <Form.Group className="d-flex gap-2">
                      <Form.Check type="radio" aria-label="radio 1" />
                      <Form.Label>Other</Form.Label>
                    </Form.Group>
                    </Row>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Col>

        <Col lg={4} md={12} sm={12} className="border border-2 shadow pb-3 mt-3">
          <Row className=" justify-content-between  mt-3 mx-auto">
            <Col lg={7} md={6}>
              <h4 className={"text-primary"}>Selected Items</h4>
            </Col>
            <Col lg={5} md={5} className="text-end">
              <Button variant="primary" className="w-50">
                Edit
              </Button>
            </Col>
          </Row>
          <hr />
          <h4 className="text-capitalize ms-1">dry wash</h4>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="mb-2">
              <Accordion.Header className="text-capitalize">
                Mens wear
              </Accordion.Header>
              <Accordion.Body>
                <Row className="justify-content-between">
                  <Col lg={7} md={6}>
                    <h4>Waistcoat / Bandi</h4>
                  </Col>
                  <Col lg={5} md={5} className="text-end">
                    <h4> ₦4000</h4>
                  </Col>
                </Row>
                <Row>
                  <p className="fs-4">2 x ₦2000 / per piece</p>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <hr />
          </Accordion>
        </Col>
      </Row>

      <Container className="d-flex justify-content-center w-100 text-center my-5">
        <Col lg={4} md={5} sm={5}>
        <Button  variant="outline-primary" className="me-auto w-75 text-center">Prev</Button>
        </Col>
        <Col lg={4} md={5} sm={5}>
        <Button variant="primary" className="me-auto w-75 text-center">Next</Button></Col>
      </Container>

    </Container>
  );
}

export default AddressInfo;
