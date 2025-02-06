import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    reviews: [],
    loading: true, //  Stato di caricamento
    error: null, // Stato di errore
  };

  fetchComments = async () => {
    this.setState({ loading: true, error: null }); // ✅ Imposta loading all'inizio
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZGUxYmNhMDcwNDAwMTU4YmY5NzkiLCJpYXQiOjE3Mzg4NTgwMTEsImV4cCI6MTc0MDA2NzYxMX0.KY1i3aAaFytdpVHLectYt_unBT7ZsLQJtlf6z-iXCXg",
      },
    });

    if (resp.ok) {
      const reviews = await resp.json();
      console.log(reviews);

      //   this.setState({reviews: reviews})
      this.setState({ reviews, loading: false }); // ✅ Aggiorna reviews e disattiva loading
    } else {
      this.setState({ error: "Errore nel recupero dei commenti", loading: false }); // ✅ Se errore, lo memorizza
    }
  };

  componentDidMount() {
    console.log("componentDidMount()");
    this.fetchComments();
  }

  render() {
    console.log("RENDER COMMENT AREA", this.state.reviews);
    return (
      <div className="commentArea">
        <h6>CommentArea</h6>
        {/* Loading viene mostrato solo mentre carica */}
        {this.state.loading && <Loading />}

        {/* Error viene mostrato solo se c'è un errore */}
        {this.state.error && <Error message={this.state.error} />}
        {/* Manteniamo sempre CommentList, anche se è vuoto */}
        <CommentList reviews={this.state.reviews} />
        {/*      Form per aggiungere recensioni  */}
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;
