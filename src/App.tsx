import "./App.css";
import Aurora from "./components/Aurora";
// import LetterGlitch from "./components/LetterGlitch";
import ShinyText from "./components/ShinyText";
import SplashCursor from "./components/SplashCursor";
import StarBorder from "./components/StarBorder";
// import TargetCursor from "./components/TargetCursor";

function App() {
  return (
    <>
      {/* <TargetCursor spinDuration={2} hideDefaultCursor={true} /> */}
      <Aurora />
      <SplashCursor />
      {/* <LetterGlitch
        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      /> */}
      <div className="content-wrapper">
        <p className="title cursor-target">Nikhil Ratate</p>
        {/* <p className="subtitle">Software Engineer from Mumbai, India</p> */}
        <ShinyText
          text="Software Engineer from Mumbai, India"
          disabled={false}
          speed={3}
          className="subtitle cursor-target"
        />
        {/* <StarBorder
          as="button"
          className="contact-me-button"
          color="white"
          speed="5s"
        >
          Contact Me
        </StarBorder> */}
      </div>
    </>
  );
}

export default App;
