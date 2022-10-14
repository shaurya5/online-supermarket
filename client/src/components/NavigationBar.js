import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";

function NavigationBar() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container className="nav-container">
        <div>
          <Navbar.Brand className="link-text" href="/">Online Supermarket</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link-text" href="/login">Login</Nav.Link>
              <Nav.Link className="link-text" href="/register">Register</Nav.Link>
              <Nav.Link className="link-text" href="/admin-login">Admin Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
