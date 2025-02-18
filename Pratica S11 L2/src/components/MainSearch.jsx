import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { fetchSearchResults } from "../redux/action";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.searchResults);

  useEffect(() => {
    if (query.length > 0) {
      dispatch(fetchSearchResults(query));
    }
  }, [query, dispatch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="Type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.length > 0 ? (
            <Row>
              {jobs.map((jobData) => (
                <Col xs={12} sm={6} md={4} lg={3} key={jobData._id} className="mt-2">
                  <Job key={jobData._id} data={jobData} />
                </Col>
              ))}
            </Row>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
