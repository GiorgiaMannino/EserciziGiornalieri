import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../../src/redux/action";
import { Card, Button, Row, Col } from "react-bootstrap";

const Job = ({ data }) => {
  console.log("Job data:", data);

  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  const isFavourite = favourites.includes(data.company_name);

  const handleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(data.company_name));
    } else {
      dispatch(addFavourite(data.company_name));
    }
  };

  return (
    <Row>
      <Col xs={6} md={4} lg={2}>
        <Card className="mb-4" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{data.job_title}</Card.Title>
            <Card.Subtitle className="mb-3 text-muted fs-4">{data.company_name}</Card.Subtitle>

            <p>
              <strong>Job category:</strong> {data.category || "N/A"}
            </p>

            <p>
              <strong>Job type:</strong> {data.job_type || "N/A"}
            </p>

            <p>
              <strong>Published on:</strong> {new Date(data.publication_date).toLocaleDateString() || "N/A"}
            </p>

            <p>
              <strong>Salary:</strong> {data.salary ? `$${data.salary}` : "N/A"}
            </p>
            <Button variant="outline-primary" onClick={handleFavourite}>
              <i className={`bi ${isFavourite ? "bi-heart-fill" : "bi-heart"}`} style={{ fontSize: "1.5rem" }}></i>
              {isFavourite ? "Remove from favourites" : "Add to favourites"}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Job;
