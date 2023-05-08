import "./App.css";
import Card from "./components/Card";

const cardTwo = {
  title: "Special title treatment",
  text: "With supporting text below as a natural lead-in to additional content."
};

const cardOne = {
  title: "Card title",
  text:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  src: "https://s1.1zoom.ru/big0/427/Closeup_Coast_Sunrises_489050.jpg"
};

function App() {
  return (
    <div className="cards">
      <Card {...cardOne}>
        {" "}
        {<img src={cardOne.src} className="card-img-top" alt="..." />}{" "}
      </Card>
      <Card {...cardTwo} />
    </div>
  );
}

export default App;
