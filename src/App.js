import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => getQuote(), []);
  const [quote, setQuote] = useState("");
  const [color, setColor] = useState("white");
  const changeColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };
  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
    if (quote != null) {
      changeColor();
    }
  };

  return (
    <div className="MainContainers" style={{ backgroundColor: "#" + color }}>
      <div className="mainContianer">
        <span className="QuotesContainer">{quote.content}</span>
        <h4 className="AutoNameContainer">{quote.author}</h4>
        <button onClick={getQuote} className="MyGetQuoteButton">
          Get Quote
        </button>
      </div>
    </div>
  );
}

export default App;
