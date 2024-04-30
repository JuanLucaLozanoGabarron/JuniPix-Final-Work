import "./style/App.css";
import Header from "../components/Header";
import Collage from "../components/Collage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="firstInfo">
        <Collage />
      </div>
    </div>
  );
}

export default App;
