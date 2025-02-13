import { BrowserRouter, Routes, Route } from "react-router";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import TVShows from "./components/TVShows";
import "./App.css";
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

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/" element={<Movies />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
};

export default App;
