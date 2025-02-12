import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="loading-container d-flex flex-column justify-content-center align-items-center my-3">
      <Spinner animation="border" variant="light" role="status" />
      <span className="mt-3 text-light fs-4 fw-bold">Caricamento...</span>
    </div>
  );
};

export default Loading;
