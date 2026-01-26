import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageExperiences from "../components/PageExperiences/PageExperiences";
import PageGallery from "../components/PageGallery/PageGallery";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import AboutUs from "../components/AboutUs/AboutUs";
import Rooms from "../components/Rooms/Rooms";
import Services from "../components/Services/Services";
import Experiences from "../components/Experiences/Experiences";
import Events from "../components/Events/Events";
import Allies from "../components/Allies/Allies";
import Volunteering from "../components/Volunteering/Volunteering";
import Reviews from "../components/Reviews/Reviews";
import Footer from "../components/Footer/Footer";
import PageNotFound from "../components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <AboutUs />
                <Rooms />
                <Services />
                <Experiences />
                <Events />
                <Allies />
                <Volunteering />
                <Reviews />
              </>
            }
          />
          <Route path="/experiences" element={<PageExperiences />} />
          <Route path="/gallery" element={<PageGallery />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
