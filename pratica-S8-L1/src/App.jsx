import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div>
      <div className="divImg">
        <ImageComponent
          src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Immagine borsa"
        />
      </div>
      <div className=" main-container" style={{ margin: "1.5rem" }}>
        <ButtonComponent btnTitle="Acquista" className="btnCustom " />
      </div>
    </div>
  );
}

export default App;
