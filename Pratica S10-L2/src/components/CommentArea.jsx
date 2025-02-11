import { useState, useEffect, useCallback } from "react";
import { Alert } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const CommentArea = ({ asin }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Funzione per recuperare i commenti
  const fetchComments = useCallback(async () => {
    if (!asin) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZGUxYmNhMDcwNDAwMTU4YmY5NzkiLCJpYXQiOjE3Mzg4NTgwMTEsImV4cCI6MTc0MDA2NzYxMX0.KY1i3aAaFytdpVHLectYt_unBT7ZsLQJtlf6z-iXCXg",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      } else {
        throw new Error("Errore nel recupero dei commenti");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [asin]); // Aggiungiamo asin come dipendenza

  useEffect(() => {
    fetchComments(); // Viene chiamato ogni volta che asin cambia
  }, [asin, fetchComments]); // Aggiungiamo fetchComments alle dipendenze

  const handleCommentAdded = () => {
    fetchComments(); // Ricarica i commenti quando un commento è stato aggiunto
  };

  const handleCommentDeleted = (id) => {
    setReviews(reviews.filter((review) => review._id !== id)); // Rimuovi il commento dallo stato
  };

  return (
    <div className="commentArea">
      <h6>Commenti</h6>
      {!asin && <Alert variant="info">Seleziona un libro per vedere i commenti</Alert>}
      {loading && <Alert variant="warning">Caricamento commenti...</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <CommentList reviews={reviews} onCommentDeleted={handleCommentDeleted} />
      <AddComment asin={asin} onCommentAdded={handleCommentAdded} />
    </div>
  );
};

export default CommentArea;
