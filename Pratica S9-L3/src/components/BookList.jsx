import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchTerm: "",
  };

  render() {
    // Filtra i libri in base al titolo (case-insensitive) senza destructuring
    const filteredBooks = this.props.books.filter((book) =>
      book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <Container>
        <Row>
          <Col>
            <Form className="mb-4">
              <Form.Group controlId="search">
                <Form.Control
                  type="text"
                  placeholder="Cerca un libro..."
                  value={this.state.searchTerm}
                  onChange={(event) => this.setState({ searchTerm: event.target.value })}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          {/* Mappa i libri filtrati */}
          {filteredBooks.map((book) => (
            <Col xs={12} sm={6} md={3} lg={2} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
