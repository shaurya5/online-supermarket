import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/navbar.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function DashboardNav({ searchShown }) {
  const [searchText, setSearchText] = useState("")

  return (
    <Navbar bg="secondary" expand="lg">
      <Container className="nav-container">
        <div>
          <Navbar.Brand className="link-text" href="/dashboard">
            Online Supermarket
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link-text" href="/profile">
                My Profile
              </Nav.Link>
              <Nav.Link className="link-text" href="/cart">
                My cart
              </Nav.Link>
              <Nav.Link className="link-text" href="#">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default DashboardNav;
