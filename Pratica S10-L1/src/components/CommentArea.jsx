import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Alert } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    reviews: [],
    loading: false,
    error: null,
  };

  fetchComments = async () => {
    if (!this.props.asin) return; // Non fare nulla se non è stato selezionato un libro

    this.setState({ loading: true, error: null });
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNTk1M2I3NDcwMTAwMTU4YjJhZWUiLCJpYXQiOjE3MzkxOTY1MzcsImV4cCI6MTc0MDQwNjEzN30.bIghDj2EZ5dVFIpDlm-2ipIHa4NrKYVKbBgokV6-G50",
        },
      });
      if (resp.ok) {
        const reviews = await resp.json();
        this.setState({ reviews, loading: false });
      } else {
        throw new Error("Errore nel recupero dei commenti");
      }
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  render() {
    const { reviews, loading, error } = this.state;

    return (
      <div className="commentArea">
        <h6>CommentArea</h6>
        {!this.props.asin && <Alert variant="info">Seleziona un libro per vedere i commenti</Alert>}
        {loading && <Alert variant="warning">Caricamento commenti...</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <CommentList reviews={reviews} />
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;
