import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="footer text-white  py-4">
      <Container className="footer-container">
        <div className="iconsSocial text-secondary fs-4 mb-3 text-center text-md-start">
          <i className="bi bi-facebook me-3"></i>
          <i className="bi bi-instagram me-3"></i>
          <i className="bi bi-twitter me-3"></i>
          <i className="bi bi-youtube me-3"></i>
        </div>

        <Row className="row-cols-1 row-cols-md-4 g-4">
          <Col xs={12} md={3} className="text-center text-md-start">
            <p className="text-secondary">Audio and Subtitles</p>
            <p className="text-secondary">Media Center</p>
            <p className="text-secondary">Privacy</p>
            <p className="text-secondary">Contact Us</p>
            <Button variant="outline-secondary" className="rounded-0">
              Service Code
            </Button>
          </Col>

          <Col xs={12} md={3} className="text-center text-md-start">
            <p className="text-secondary">Audio Description</p>
            <p className="text-secondary">Legal Notices</p>
          </Col>

          <Col xs={12} md={3} className="text-center text-md-start">
            <p className="text-secondary">Help Center</p>
            <p className="text-secondary">Jobs</p>
            <p className="text-secondary">Cookie Preferences</p>
          </Col>

          <Col xs={12} md={3} className="text-center text-md-start">
            <p className="text-secondary">Gift Cards</p>
            <p className="text-secondary">Terms of Use</p>
          </Col>
        </Row>

        <p className="text-secondary text-center text-md-start mt-4">© 1997-2019 Netflix, Inc.</p>
      </Container>
    </footer>
  );
};

export default Footer;
