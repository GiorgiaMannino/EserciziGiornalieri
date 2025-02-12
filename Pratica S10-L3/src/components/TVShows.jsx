import { Container } from "react-bootstrap";
import Gallery from "./Gallery";
import MoviesHeader from "./MoviesHeader";

const TVShows = () => {
  return (
    <Container>
      <MoviesHeader />
      <Gallery title="Stranger Things" />
      <Gallery title="Friends" />
      <Gallery title="The Walking Dead" />
      <Gallery title="Sherlock" />
    </Container>
  );
};

export default TVShows;
