import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Portfolio from "./components/Portfolio";
import Contact from "./components/ContactUs";
import Last from "./components/Last";
import Intro from "./components/Intro";
function App() {
  
  return (
    <div>
      <Navbar />
      <Intro/>
      <Services />
      <Experience/>
      <Works/>
      <Portfolio/>
      <Contact/>
      <Last/>
    </div>
  );
}

export default App;


