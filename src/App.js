import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Portfolio from "./components/Porfolio/Portfolio";
import PersonalProject from "./components/PersonalProject/PersonalProject";
import Certifications from "./components/Certifications/Certifications";
import Publications from "./components/Publications/Publications";
import TechStack from "./components/TechStack/TechStack";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Work/>
     <Portfolio/>
     <PersonalProject/>
     <TechStack/>
     <Certifications/>
     <Publications/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
