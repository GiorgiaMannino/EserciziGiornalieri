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
    </BrowserRouter>
  );
}

export default App;
