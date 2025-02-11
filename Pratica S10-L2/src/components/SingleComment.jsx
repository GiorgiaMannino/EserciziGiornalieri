import { Button, ListGroupItem } from "react-bootstrap";

const SingleComment = ({ review }) => {
  const handleDelete = async (id) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNTk1M2I3NDcwMTAwMTU4YjJhZWUiLCJpYXQiOjE3Mzg4NTA3OTksImV4cCI6MTc0MDA2MDM5OX0.00SLFE2EDakxsPuFfJRP7aErpCW1j68EsgUZYJRvSF4",
        },
      });

      if (resp.ok) {
        alert("Commento eliminato con successo");
      } else {
        alert("Errore nell'eliminazione del commento");
      }
    } catch {
      alert("Errore nel contattare il server");
    }
  };

  return (
    <ListGroupItem className="d-flex justify-content-between">
      <span>{review.comment}</span> <span>{review.rate}</span>
      <Button variant="danger" onClick={() => handleDelete(review._id)}>
        🗑️
      </Button>
    </ListGroupItem>
  );
};

export default SingleComment;
