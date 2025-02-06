import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

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
              className={`mb-4 shadow ${this.state.selected ? "border border-danger" : "border-0"}`}
              style={{ height: "480px", display: "flex", flexDirection: "column" }}
            >
              <Card.Img
                onClick={this.toggleSelect}
                variant="top"
                src={this.props.book.img}
                style={{
                  height: "250px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
              <Card.Body className="d-flex flex-column justify-content-between  p-2" style={{ flexGrow: 1 }}>
                <Card.Title className="fs-5">{this.props.book.title}</Card.Title>
                <Card.Text className="fs-6">€ {this.props.book.price}</Card.Text>
                <Button variant="primary" size="sm">
                  Acquista
                </Button>
              </Card.Body>
              {this.state.selected && <CommentArea asin={this.props.book.asin} />}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleBook;
