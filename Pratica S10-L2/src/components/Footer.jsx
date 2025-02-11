const MyFooter = (props) => {
  return (
    <>
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5> {props.title} </h5>
              <p>Lo shop migliore per i tuoi acquisti.</p>
            </div>

            <div className="col-md-4">
              <h5>Link Utili</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Browse
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>Seguici</h5>
              <a href="#" className="text-light me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <hr className="mt-4 mb-2 border-light" />

          <div className="text-center">
            <p className="mb-0">&copy; 2025 {props.titleCopyright}. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MyFooter;
