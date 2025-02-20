import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { Navbar } from "react-bootstrap";
import Home from "./components/Home";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg" className="ps-5">
        <Navbar.Brand as={Link} to="/">
          Spaceflight
        </Navbar.Brand>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
      <footer className="bg-dark text-light py-3 mt-5 p-2">
        <div className="container text-center">
          <p className="mb-1">© 2025 Spaceflight </p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
