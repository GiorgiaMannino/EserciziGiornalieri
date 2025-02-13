import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router"; // Usa useLocation per determinare la pagina corrente
import "bootstrap-icons/font/bootstrap-icons.css";

const MyNav = () => {
  const location = useLocation(); // Otteniamo la posizione attuale per determinare quale link è attivo

  return (
    <Container className="containerMyNav">
      <Navbar className="navbar navbar-expand-lg navbar-dark mb-3" expand="lg">
        <Navbar.Brand href="#">
          <img height="40" src="./src/assets/netflix_logo.png" alt="Netflix Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="disabled-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tv-shows" active={location.pathname === "/tv-shows"}>
              TV Shows
            </Nav.Link>
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="disabled-link">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="disabled-link">
              My List
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto align-items-center ">
            <Nav.Link href="#" className="me-3 disabled-link">
              <i className="bi bi-search "></i>
            </Nav.Link>
            <Nav.Link href="#" className="me-3 disabled-link">
              KIDS
            </Nav.Link>
            <Nav.Link href="#" className="me-3 disabled-link">
              <i className="bi bi-bell-fill "></i>
            </Nav.Link>

            <NavDropdown
              title={
                <img
                  src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
                  alt="User"
                  className="rounded"
                  width="30"
                  height="30"
                />
              }
              id="navbarDropdown"
              align="end"
            >
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">
                Settings
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Sign out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default MyNav;
