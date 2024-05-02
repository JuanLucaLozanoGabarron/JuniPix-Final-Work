import "./style/App.css";
import Header from "../components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="firstInfo">
        <div className="text">
          <div className="title">
            <h2>WELCOME TO</h2>
            <h1>JUNIPIX</h1>
          </div>
          <div className="createYourArtpiece">
            <input type="text" placeholder="Create your own artpiece" />
          </div>
        </div>
        <div className="collage"></div>
      </div>
    </div>
  );
}

export default App;
