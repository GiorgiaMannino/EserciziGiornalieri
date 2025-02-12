import { Container } from "react-bootstrap";
import Gallery from "./Gallery";
import MoviesHeader from "./MoviesHeader";
const Movies = () => {
  return (
    <Container>
      <MoviesHeader />
      <Gallery title="Harry Potter" />
      <Gallery title="Dune" />
      <Gallery title="Dune" />
      <Gallery title="Dune" />
    </Container>
  );
};

export default Movies;
