import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { removeFavourite } from "../../src/redux/action";

const Favourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  const handleRemoveFavourite = (jobId) => {
    dispatch(removeFavourite(jobId));
  };

  return (
    <Container>
      <h1 className="mt-5 mb-4">List of favourites</h1>
      <Row className="g-4">
        {favourites.length === 0 ? (
          <div>No favourite jobs</div>
        ) : (
          favourites.map((job) => (
            <Col xs={12} sm={6} md={4} lg={3} key={job._id}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{job.job_title}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted fs-4">{job.company_name}</Card.Subtitle>
                  <p>
                    <strong>Job category:</strong> {job.category || "N/A"}
                  </p>
                  <p>
                    <strong>Job type:</strong> {job.job_type || "N/A"}
                  </p>
                  <p>
                    <strong>Published on:</strong> {new Date(job.publication_date).toLocaleDateString() || "N/A"}
                  </p>
                  <p>
                    <strong>Salary:</strong> {job.salary ? `$${job.salary}` : "N/A"}
                  </p>
                  <Button variant="outline-danger" onClick={() => handleRemoveFavourite(job._id)}>
                    Remove from favourites
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Favourites;
