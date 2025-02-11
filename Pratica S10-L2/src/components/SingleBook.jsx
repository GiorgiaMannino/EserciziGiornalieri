import { Badge, Button, Card, Col } from "react-bootstrap";

const SingleBook = ({ book, selected, selectBook }) => {
  return (
    <Col>
      <Card
        className={`border ${selected ? "border-danger" : ""} shadow`}
        onClick={() => selectBook(book.asin)} // Chiamato per selezionare il libro
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Card.Text>
            <Badge bg="info">€{book.price}</Badge>
          </Card.Text>
          <Button variant="primary" size="sm">
            Acquista
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
