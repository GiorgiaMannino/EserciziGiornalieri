import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ movieId, addComment }) => {
  const [review, setReview] = useState({
    comment: "",
    rate: "1",
    elementId: movieId,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("SUBMIT");

    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNTk1M2I3NDcwMTAwMTU4YjJhZWUiLCJpYXQiOjE3MzkzNzkyODQsImV4cCI6MTc0MDU4ODg4NH0.2xUILnUriWhBisnKbZJY6dvGo5wArQxScBN5D6NZCjY",
      },
    });

    if (resp.ok) {
      const newComment = await resp.json();
      addComment(newComment);
      alert("Commento inviato con successo");
      setReview({ comment: "", rate: "1", elementId: movieId });
    } else {
      alert("Errore nell'invio del commento");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Commento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Scrivi un commento"
          value={review.comment}
          onChange={(e) => setReview({ ...review, comment: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rate">
        <Form.Label>Voto</Form.Label>
        <Form.Select value={review.rate} onChange={(e) => setReview({ ...review, rate: e.target.value })} required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>

      <Button type="submit" variant="success">
        Invia
      </Button>
    </Form>
  );
};

export default AddComment;
