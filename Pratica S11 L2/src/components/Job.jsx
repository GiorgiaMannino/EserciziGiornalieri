import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../../src/redux/action";
import { Card, Button, Row, Col } from "react-bootstrap";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  const isFavourite = favourites.some((job) => job._id === data._id);

  const handleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(data._id));
    } else {
      dispatch(addFavourite(data));
    }
  };

  return (
    <Row className="g-4">
      <Col key={data._id}>
        <Card className="mb-4">
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
