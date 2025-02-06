import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment"; // Importa il componente per ogni singolo commento

const CommentsList = ({ comments, onDelete }) => {
  return (
    <ListGroup>
      <h3>Lista delle recensioni</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <ListGroup.Item key={comment._id}>
            <SingleComment comment={comment} onDelete={onDelete} />
          </ListGroup.Item>
        ))
      ) : (
        <p>Non ci sono recensioni ancora.</p>
      )}
    </ListGroup>
  );
};

export default CommentsList;
