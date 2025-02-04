import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import AllTheBooks from "./components/AllTheBooks";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div style={{ backgroundColor: "#E9E5DC" }}>
      <Welcome />
      <MyNav title=" BookShop" />
      <h1 className="text-center mb-5">Libri Fantasy</h1>

      <AllTheBooks />

      <MyFooter title="BookShop" titleCopyright="BookShop" />
    </div>
  );
}

export default App;
