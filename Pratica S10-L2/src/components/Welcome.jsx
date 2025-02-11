import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const Welcome = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success" className="px-5 mb-5">
        <Alert.Heading>Benvenuto in BookShop!</Alert.Heading>
        <p>Scopri il nostro catalogo: i migliori libri, sempre a portata di mano.</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Chiudi
          </Button>
        </div>
      </Alert>
    </>
  );
};

export default Welcome;
