import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelect = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col key={this.props.book.asin}>
            <Card
              className={`mb-5 shadow Card ${this.state.selected ? "border border-danger" : "border-0"}`}
              style={{ width: "100%", maxHeight: "30rem" }}
            >
              <Card.Img
                onClick={this.toggleSelect}
                variant="top"
                src={this.props.book.img}
                style={{
                  height: "250px",
                  width: "100%",
                  cursor: "pointer",
                }}
              />
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
                <Card.Text>€ {this.props.book.price}</Card.Text>
                <Button variant="primary">Acquista</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
