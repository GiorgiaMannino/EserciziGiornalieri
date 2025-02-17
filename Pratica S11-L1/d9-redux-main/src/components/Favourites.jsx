import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);

  console.log("Favourites:", favourites);

  return (
    <ListGroup>
      {favourites.length === 0 ? (
        <ListGroup.Item>No favourite companies</ListGroup.Item>
      ) : (
        favourites.map((company, index) => <ListGroup.Item key={index}>{company}</ListGroup.Item>)
      )}
    </ListGroup>
  );
};

export default Favourites;
