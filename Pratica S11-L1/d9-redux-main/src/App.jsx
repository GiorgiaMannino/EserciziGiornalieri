import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import Favourites from "./components/Favourites";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg" className="ps-5">
        <Navbar.Brand as={Link} to="/">
          Job Search
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/favourites">
            Favourites
          </Nav.Link>
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
