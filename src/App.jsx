import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [newCards, setNewCards] = useState(0);
  if (score > highScore) setHighScore(score);

  useEffect(() => {
    setCards([]);
    console.log("use effect ran!!");
    [
      ...new Set(
        Array(24)
          .fill(0)
          .map((n) => ~~(Math.random() * 820 + 1))
      ),
    ]
      .slice(0, 12)
      .forEach((n) =>
        fetch(`https://rickandmortyapi.com/api/character/${n}`)
          .then((resp) => resp.json())
          .then(
            (data) =>
              !cards.includes(data) &&
              setCards((c) => [
                ...c,
                { name: data.name, image: data.image, found: false },
              ])
          )
      );
  }, [newCards]);
  return (
    <>
      <Navbar score={score} highScore={highScore} />
      <Game setScore={setScore} cards={cards} setNewCards={setNewCards} />
    </>
  );
}

export default App;
