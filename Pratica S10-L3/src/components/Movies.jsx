import { Container } from "react-bootstrap";
import Gallery from "./Gallery";
import MoviesHeader from "./MoviesHeader";
const Movies = () => {
  return (
    <Container>
      <MoviesHeader />
      <Gallery title="Harry Potter" />
      <Gallery title="Dune" />
      <Gallery title="Lord of the Rings" />
      <Gallery title="X-Men" />
    </Container>
  );
};

export default Movies;
