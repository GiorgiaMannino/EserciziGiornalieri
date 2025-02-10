import { Component } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedAsin: null,
  };

  selectBook = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    return (
      <Container>
        <Form.Control
          className="mt-4"
          type="text"
          placeholder="Cerca un titolo"
          value={this.state.searchQuery}
          onChange={(e) => this.setState({ searchQuery: e.target.value })}
        />
        <Row>
          <Col xs={8} className="mt-4">
            <Row className="g-3">
              {this.props.books
                .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
                .map((book) => (
                  <Col xs={6} md={4} lg={3} key={book.asin}>
                    <SingleBook
                      book={book}
                      selected={this.state.selectedAsin === book.asin} // Indica se il libro è selezionato
                      selectBook={this.selectBook} // Passiamo la funzione selectBook per selezionare il libro
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={4} className="mt-4">
            <CommentArea asin={this.state.selectedAsin} />
          </Col>
        </Row>
        {this.props.books.length === 0 && (
          <Alert variant="warning" className="mt-4">
            Premi un bottone per visualizzare dei libri👆
          </Alert>
        )}
      </Container>
    );
  }
}

export default BookList;
