import { Component } from "react";
import { Button, ListGroupItem } from "react-bootstrap";

class SingleComment extends Component {
  handleDelete = (id) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNTk1M2I3NDcwMTAwMTU4YjJhZWUiLCJpYXQiOjE3Mzg4NTA3OTksImV4cCI6MTc0MDA2MDM5OX0.00SLFE2EDakxsPuFfJRP7aErpCW1j68EsgUZYJRvSF4",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          alert("Commento eliminato con successo");
        } else {
          alert("Errore nell'eliminazione del commento");
        }
      })
      .catch(() => {
        alert("Errore nel contattare il server");
      });
  };

  render() {
    return (
      <ListGroupItem className="d-flex justify-content-between">
        <span>{this.props.review.comment}</span> <span>{this.props.review.rate}</span>
        <Button variant="danger" onClick={() => this.handleDelete(this.props.review._id)}>
          🗑️
        </Button>
      </ListGroupItem>
    );
  }
}

export default SingleComment;
