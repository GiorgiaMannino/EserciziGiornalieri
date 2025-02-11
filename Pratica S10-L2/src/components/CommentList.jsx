import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ reviews }) => {
  return (
    <ListGroup>
      {reviews.map((review) => (
        <SingleComment key={review._id} review={review} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
