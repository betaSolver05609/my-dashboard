import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Portfolio from "./components/Porfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Work/>
     <Portfolio/>
     <Testimonial/>
    </div>
  );
}

export default App;
