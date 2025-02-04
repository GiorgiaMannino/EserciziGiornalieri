import { Component } from "react";
import { Alert, Button } from "react-bootstrap";

class Welcome extends Component {
  state = {
    show: true, // Controllo visibilità Alert
  };

  render() {
    return (
      <>
        <Alert show={this.state.show} variant="success">
          <Alert.Heading>Benvenuto in BookShop!</Alert.Heading>
          <p>Scopri il nostro catalogo: i migliori libri, sempre a portata di mano.</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => this.setState({ show: false })} variant="outline-success">
              Chiudi
            </Button>
          </div>
        </Alert>
      </>
    );
  }
}

export default Welcome;
