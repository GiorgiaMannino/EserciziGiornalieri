import { Container, Row, Col, Button } from "react-bootstrap";

const Settings = () => {
  return (
    <main className="settingsMain">
      <Container className="container-white-background">
        <h1>Account</h1>
        <hr />
        <Row>
          <Col xs={3}>
            <h4 className="fs-6 text-secondary">MEMBERSHIP & BILLING</h4>
            <Button variant="secondary" className="rounded-0">
              Cancel Membership
            </Button>
          </Col>
          <Col xs={9}>
            <div className="blocco">
              <div>
                <p>student@strive.school</p>
                <p>Password: ********</p>
                <p>Phone: 321 044 1279</p>
              </div>

              <div>
                <p className="text-primary">Change account email</p>
                <p className="text-primary">Change password</p>
                <p className="text-primary">Change phone number</p>
              </div>
            </div>
            <hr />
            <div className="blocco">
              <div>
                <p>PayPal admin@strive.school</p>
              </div>
              <div>
                <p className="text-primary">Update payment info</p>
                <p className="text-primary">Billing details</p>
              </div>
            </div>
            <hr />
            <div className="blocco">
              <div>
                <p className="text-primary">Redeem gift card or promo code</p>
                <p className="text-primary">Where to buy gift cards</p>
              </div>
            </div>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col xs={3}>
            <h4 className="fs-6 text-secondary">PLAN DETAILS</h4>
          </Col>
          <Col xs={9}>
            <div className="blocco">
              <div>
                <p>Premium</p>
              </div>
              <div>
                <p className="text-primary">Change plan</p>
              </div>
            </div>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col xs={3}>
            <h4 className="fs-6 text-secondary">SETTINGS</h4>
          </Col>
          <Col xs={9}>
            <div className="blocco">
              <div>
                <p className="text-primary">Parental controls</p>
                <p className="text-primary">Test participation</p>
                <p className="text-primary">Manage download devices</p>
                <p className="text-primary">Activate a device</p>
                <p className="text-primary">Recent device streaming activity</p>
                <p className="text-primary">Sign out of all devices</p>
              </div>
            </div>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col xs={3}>
            <h4 className="fs-6 text-secondary">MY PROFILE</h4>
          </Col>
          <Col xs={9}>
            <div className="blocco">
              <div>
                <p>Strive Student</p>
              </div>
              <div>
                <p className="text-primary">Manage profiles</p>
                <p className="text-primary">Add profile email</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Settings;
