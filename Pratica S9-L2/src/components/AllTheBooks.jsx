import { Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../fantasy.json";

const AllTheBooks = () => {
  return (
    <Container>
      <Row>
        {fantasy.map((book) => {
          return (
            <Col xs={12} sm={6} md={3} lg={2} key={book.asin}>
              <Card className="mb-5 border-0 text-center shadow Card">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>€ {book.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default AllTheBooks;
