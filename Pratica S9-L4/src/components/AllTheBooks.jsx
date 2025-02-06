/* import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../fantasy.json";

const AllTheBooks = () => {
  return (
    <Container>
      <Row>
        {fantasy.map((book) => {
          return (
            <Col xs={12} sm={6} md={3} lg={2} key={book.asin}>
              <Card className="mb-5 border-0 text-center shadow Card " style={{ width: "100%", height: "90%" }}>
                <Card.Img
                  variant="top"
                  src={book.img}
                  style={{
                    height: "250px",
                    width: "100%",
                  }}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>€ {book.price}</Card.Text>
                </Card.Body>
                <Button variant="primary" className="mb-3 w-50 ms-3">
                  Acquista
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
 */
