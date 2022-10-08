import logo from "./logo.svg";
import "./App.css";

function App() {
  const alert = (a) => {
    window.alert("Hello World!"+a);
  };

  return (
    <div className="App">
      <header className="Top-header">
        <p className="HText">My Stopwatch</p>
        <p className="HText2">By @Qui3</p>
      </header>
      <div className="Body">
        <div className="Content">
          <div className="Timer">
            <p className="Timer-text">00 : 00</p>
          </div>
          <div className="Buttons">
            <button className="Start Button" onClick={() => {alert("asd")}}>
              <p className="Button-text">Start</p>
            </button>
            <button className="Stop Button">
              <p className="Button-text">Stop</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
