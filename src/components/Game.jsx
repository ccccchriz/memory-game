import "./Game.css";

const Game = ({ setScore, cards, setNewCards }) => {
  console.log(cards);

  const handleClick = (e) => {
    let clicked = cards.find((a) => a.name == e.target.name);

    if (clicked.found) {
      setScore(0);
      setNewCards((a) => a + 1);
    } else {
      setScore((a) => a + 1);
      clicked.found = true;
    }
    if (cards.length == cards.filter((c) => c.found).length) {
      setNewCards((a) => a + 1);
    }
  };

  return (
    <>
      <div className="card-container">
        {cards
          .sort(() => Math.random() - 0.5)
          .map((c) => (
            <div key={c.name} className="card">
              <img
                className="card-image"
                name={c.name}
                src={c.image}
                onClick={handleClick}
              ></img>
              <div className="card-text">{c.name} </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Game;
