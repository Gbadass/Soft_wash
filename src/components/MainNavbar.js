import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNavbar(){
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className='fw-bold'>SOFT-WASH</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <NavDropdown title="Market Place" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Shop</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Download invoice
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Purchase History
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Activities" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Submit Order</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Track Order
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                View Order History
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Sign up
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;