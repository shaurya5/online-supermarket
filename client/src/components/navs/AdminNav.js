import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/navbar.css"; 
import { useNavigate } from "react-router-dom";

function AdminNav() {
  const navigate = useNavigate()
  const role = localStorage.getItem('role')

  function handleLogout() {
    localStorage.removeItem('role')
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('finalProds')
    localStorage.removeItem('cartProds')
    navigate('/login')
  }

  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light border navbar-static-top shadow-sm">
      <Container className="nav-container">
        <div>
          <Navbar.Brand className="link-text">
            Online Supermarket
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link-text" href="/add-products">
                Add Products
              </Nav.Link>
              <Nav.Link className="link-text" href="/edit-products">
                Edit Products
              </Nav.Link>
              {role === "admin" && <Nav.Link className="link-text" href="/edit-users">
                Edit Users
              </Nav.Link>}
              {role === "admin" && <Nav.Link className="link-text" href="/edit-managers">
                Edit Managers
              </Nav.Link>}
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

export default AdminNav;
