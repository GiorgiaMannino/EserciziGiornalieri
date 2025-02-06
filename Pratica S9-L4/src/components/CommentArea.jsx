import { Component } from "react";
import { Form, ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
    /*   newComment: "",  */
    /*     newRating: 1,  */
  };

  fetchComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNTk1M2I3NDcwMTAwMTU4YjJhZWUiLCJpYXQiOjE3Mzg4NTA3OTksImV4cCI6MTc0MDA2MDM5OX0.00SLFE2EDakxsPuFfJRP7aErpCW1j68EsgUZYJRvSF4",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Errore nella chiamata API");
        }
        return resp.json();
      })
      .then((data) => {
        this.setState({ comments: data });
      })
      .catch((e) => {
        console.log("Errore", e);
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <Form>
        <ListGroup>
          <h5>Commenti:</h5>
          {this.state.comments.map((comment) => (
            <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>
          ))}
        </ListGroup>
        <h5>Recensione</h5>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            value={this.state.newComment}
            onChange={this.handleCommentChange}
            placeholder="Scrivi la tua recensione"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Voto:</Form.Label>
          <Form.Control as="select" value={this.state.newRating} onChange={this.handleRatingChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </Form.Group>
        <button type="button">Aggiungi la recensione</button>
      </Form>
    );
  }
}

export default CommentArea;
