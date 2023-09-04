import "./Navbar.css";

const Navbar = ({ score, highScore }) => {
  return (
    <>
      <div id="navbar">
        <div>Memory Game</div>
        <div>Score: {score}</div>
        <div>High Score: {highScore}</div>
      </div>
    </>
  );
};

export default Navbar;
