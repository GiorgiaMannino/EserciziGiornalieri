import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    review: {
      comment: "",
      rate: "1",
      elementId: this.props.asin,
    },
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.setState({
        review: {
          ...this.state.review,
          elementId: this.props.asin,
        },
      });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SUBMIT", this.state.review);

    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.review),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZGUxYmNhMDcwNDAwMTU4YmY5NzkiLCJpYXQiOjE3Mzg4NTgwMTEsImV4cCI6MTc0MDA2NzYxMX0.KY1i3aAaFytdpVHLectYt_unBT7ZsLQJtlf6z-iXCXg",
      },
    });

    if (resp.ok) {
      alert("Recensione inviata!");
      this.setState({
        review: { comment: "", rate: "1", elementId: this.props.asin }, // Resetta il form
      });
    } else {
      alert("Errore nell'invio della recensione!");
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi la recensione"
            value={this.state.review.comment}
            onChange={(e) => this.setState({ review: { ...this.state.review, comment: e.target.value } })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rate">
          <Form.Label>Voto</Form.Label>
          <Form.Select
            value={this.state.review.rate}
            onChange={(e) => this.setState({ review: { ...this.state.review, rate: e.target.value } })}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="success">
          Invia Recensione
        </Button>
      </Form>
    );
  }
}

export default AddComment;
