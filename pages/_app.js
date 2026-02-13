import "../src/App.css";
import "../src/components/NavBar/NavBar.css";
import "../src/components/Intro/Intro.css";
import "../src/components/FloatingDiv/FloatingDiv.css";
import "../src/components/Services/Services.css";
import "../src/components/Cards/Cards.css";
import "../src/components/Experience/Experience.css";
import "../src/components/Work/Work.css";
import "../src/components/Porfolio/Portfolio.css";
import "../src/components/PersonalProject/PersonalProject.css";
import "../src/components/TechStack/TechStack.css";
import "../src/components/Certifications/Certifications.css";
import "../src/components/Publications/Publications.css";
import "../src/components/Testimonial/Testimonial.css";
import "../src/components/Contact/Contact.css";
import "../src/components/Footer/Footer.css";
import "swiper/css";
import "swiper/css/pagination";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
