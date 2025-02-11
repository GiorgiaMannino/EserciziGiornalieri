import { useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  const selectBook = (asin) => {
    setSelectedAsin(asin);
  };

  return (
    <Container>
      <Form.Control
        className="mt-4"
        type="text"
        placeholder="Cerca un titolo"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Row>
        <Col xs={8} className="mt-4">
          <Row className="g-3">
            {books
              .filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((book) => (
                <Col xs={6} md={4} lg={3} key={book.asin}>
                  <SingleBook
                    book={book}
                    selected={selectedAsin === book.asin} // Indica se il libro è selezionato
                    selectBook={selectBook} // Passiamo la funzione selectBook per selezionare il libro
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={4} className="mt-4">
          <CommentArea asin={selectedAsin} />
        </Col>
      </Row>
      {books.length === 0 && (
        <Alert variant="warning" className="mt-4">
          Premi un bottone per visualizzare dei libri👆
        </Alert>
      )}
    </Container>
  );
};

export default BookList;
