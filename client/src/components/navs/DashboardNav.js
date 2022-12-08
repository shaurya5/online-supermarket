import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/navbar.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardNav() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem('cartProds')
    localStorage.removeItem('finalProds')
    localStorage.removeItem('username')
    navigate("/login");
  }

  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light border navbar-static-top shadow-sm">
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
                <div className="position-relative">
                  My cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {JSON.parse(localStorage.getItem("cartProds") || "[]").length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </div>
              </Nav.Link>
              <Nav.Link className="link-text" href="#" onClick={handleLogout}>
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
