import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

const Gallery = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = () => {
      fetch(`http://www.omdbapi.com/?apikey=1ad1720e&s=${title}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === "True") {
            setMovies(data.Search.slice(0, 6));
          } else {
            setError(data.Error);
          }
        })
        .catch((err) => {
          setError(`Errore nel recupero dei film: ${err.message}`);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchMovies();
  }, [title]);

  if (loading) return <div>Caricamento dei film...</div>;
  if (error) return <div>Errore: {error}</div>;

  return (
    <Container>
      <h5 className="text-white mt-4 mb-3">{title}</h5>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-2">
        {movies.map((movie) => (
          <Col key={movie.imdbID}>
            <div className="Card mb-5">
              <Link to={`/movie-details/${movie.imdbID}`}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="img-fluid"
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
