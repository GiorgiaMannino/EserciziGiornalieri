import { BrowserRouter, Routes, Route } from "react-router";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import TVShows from "./components/TVShows";
import "./App.css";
import { Container } from "react-bootstrap";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer); // Pulizia del timeout quando il componente si smonta
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container fluid className="bg-dark">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </Container>
  );
};

export default App;

/* PAGINA PROFILO  */
/* import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Profile from "./components/Profile";

import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div className="ContainerApp">
      <Container>
        <Profile />
      </Container>
    </div>
  );
};

export default App; */

/* PAGINA SETTINGS  */
/* import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Settings from "./components/Settings";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#141414" }}>
        <Container>
          <MyNav />
        </Container>
      </div>
      <Container>
        <Settings />
      </Container>
    </div>
  );
};

export default App;
 */
