import { Button, Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={2} className="text-start">
          {/*    <img height="60" src="./src/assets/netflix_logo.png" alt="Netflix Logo" /> */}
        </Col>

        <Col xs={12} md={10}>
          <h1 className="display-3 text-white ">Edit Profile</h1>
          <hr className="mt-4 mb-4 text-white" />

          <Row>
            <Col xs={12} md={2} className="mt-2 mb-4 mb-sm-0 position-relative">
              <img
                src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
                className="img-fluid rounded"
                alt="User Image"
              />
            </Col>

            <Col xs={12} md={10}>
              <h3 className="bg-secondary p-2 fs-5 mt-2 me-5 text-white">Strive Student</h3>
              <p className="text-white">Language:</p>
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="language-dropdown" className="ps-4 pe-4 rounded-0">
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">English</Dropdown.Item>
                  <Dropdown.Item href="#">Spanish</Dropdown.Item>
                  <Dropdown.Item href="#">French</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <hr className="mt-4 mb-4 text-white" />

              <h4 className="mb-3 fs-5 text-white">Maturity Settings:</h4>
              <p className="bg-dark p-2 mb-2 fw-bold d-inline-block text-white">ALL MATURITY RATINGS</p>
              <p className="text-white">Show titles of all maturity ratings for this profile.</p>
              <Button variant="outline-secondary" className="rounded-0">
                EDIT
              </Button>

              <hr className="mt-4 mb-4 text-white" />

              <h4 className="mb-3 fs-5 text-white">Autoplay controls</h4>
              <Form.Check
                type="checkbox"
                id="autoplay-next-episode"
                label="Autoplay next episode in a series on all devices."
                className="text-white"
              />
              <Form.Check
                type="checkbox"
                id="autoplay-previews"
                label="Autoplay previews while browsing on all devices."
                defaultChecked
                className="text-white"
              />

              <hr className="mt-4 mb-4 text-white" />
              <Button variant="light" className="rounded-0 me-4 mb-5">
                SAVE
              </Button>
              <Button variant="outline-secondary mb-5" className="rounded-0 me-4">
                CANCEL
              </Button>
              <Button variant="outline-secondary mb-5" className="rounded-0">
                DELETE PROFILE
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
