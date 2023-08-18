import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'

function NavigationMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to={`/`}>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <NavDropdown title="Orders" id="collasible-nav-dropdown">
            <NavDropdown.Item>Place Order</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Place Order</NavDropdown.Item>
            </NavDropdown> */}
              <LinkContainer to={`/placeorder`}>
                <Nav.Link>Place Order</Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/vieworders`}>
                <Nav.Link>View Orders</Nav.Link>
              </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to={`/login`}>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to={`/register`}>
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationMenu;