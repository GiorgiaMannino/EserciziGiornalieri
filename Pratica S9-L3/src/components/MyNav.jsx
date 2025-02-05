import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = function (props) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-5">
        <Container>
          <Navbar.Brand href="#"> {props.title} </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
