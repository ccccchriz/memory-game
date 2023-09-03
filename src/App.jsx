import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar score={0} highScore={0} />
      <div>Memory</div>
    </>
  );
}

export default App;
