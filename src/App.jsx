import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { OurGoal } from "./components/ourgoal";
import { Services } from "./components/services";
import { Videos } from "./components/videos";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/team";
import { Contact } from "./components/contact";
import { Pricing } from "./components/pricing";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/mission"
            element={
              <div id="about">
                <About data={landingPageData.About} />
                <OurGoal data={landingPageData.OurGoal} />
              </div>
            }
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/team"
            element={
              <Team
                execTeam={landingPageData.ExecTeam}
                team={landingPageData.Team}
              />
            }
          />
          <Route
            path="/testimonials"
            element={
              <div>
                <Videos data={landingPageData.Videos} />
                <Testimonials data={landingPageData.Testimonials} />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <Header data={landingPageData.Header} />
                <Features data={landingPageData.Features} />
                <Services data={landingPageData.Services} />
                <Contact data={landingPageData.Contact} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
