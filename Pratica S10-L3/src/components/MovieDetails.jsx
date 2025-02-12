import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Per prevenire aggiornamenti di stato dopo un'eventuale smontaggio

    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=1ad1720e&i=${movieId}`);
        const data = await response.json();
        if (data.Response === "True" && isMounted) {
          setMovie(data);
        } else {
          throw new Error(data.Error);
        }
      } catch (err) {
        if (isMounted) setError(`Errore nel recupero del film: ${err.message}`);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNTk1M2I3NDcwMTAwMTU4YjJhZWUiLCJpYXQiOjE3MzkzNzkyODQsImV4cCI6MTc0MDU4ODg4NH0.2xUILnUriWhBisnKbZJY6dvGo5wArQxScBN5D6NZCjY",
          },
        });

        if (!response.ok) {
          throw new Error(`Errore HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        if (isMounted) {
          setComments(data);
        }
      } catch (err) {
        if (isMounted) setError(`Errore nel recupero dei commenti: ${err.message}`);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchMovieDetails(), fetchComments()]);
      if (isMounted) setLoading(false);
    };

    fetchData();

    return () => {
      isMounted = false; // Evita aggiornamenti di stato se il componente si smonta
    };
  }, [movieId]);

  if (loading) return <Spinner animation="border" variant="light" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="text-white mt-4">
      {movie && (
        <>
          <Row>
            <h1 className="mb-5">Dettagli - {movie.Title} </h1>
            <Col md={4}>
              <img src={movie.Poster} alt={movie.Title} className="img-fluid rounded" />
            </Col>
            <Col md={8}>
              <h3 className="mb-3">Informazioni:</h3>
              <p>
                <strong>Anno:</strong> {movie.Year}
              </p>
              <p>
                <strong>Genere:</strong> {movie.Genre}
              </p>
              <p>
                <strong>Trama:</strong> {movie.Plot}
              </p>
              <p>
                <strong>Regista:</strong> {movie.Director}
              </p>
              <p>
                <strong>Attori:</strong> {movie.Actors}
              </p>
              <p>
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </p>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <h3>Commenti</h3>
              {comments.length > 0 ? (
                <ul>
                  {comments.map((comment) => (
                    <li key={comment._id}>
                      <p>
                        <strong>{comment.author}:</strong> {comment.comment}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Non ci sono commenti.</p>
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default MovieDetails;
