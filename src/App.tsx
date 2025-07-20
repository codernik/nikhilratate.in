import "./App.css";
import LetterGlitch from "./components/LetterGlitch";

function App() {
  return (
    <>
      <LetterGlitch
        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      <div className="content-wrapper">
        <p className="text">Nikhil Ratate</p>
      </div>
    </>
  );
}

export default App;
