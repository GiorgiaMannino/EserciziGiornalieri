import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import romance from "./romance.json";

function App() {
  return (
    <div style={{ backgroundColor: "#E9E5DC" }}>
      <Welcome />
      <MyNav title=" BookShop" />

      <h1 className="text-center mb-5">Libri Romance</h1>
      <BookList books={romance} />

      <MyFooter title="BookShop" titleCopyright="BookShop" />
    </div>
  );
}

export default App;
