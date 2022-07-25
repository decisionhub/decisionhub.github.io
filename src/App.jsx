import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Benefits } from "./components/Benefits";
import { About } from "./components/about";
import { OurGoal } from "./components/ourgoal";
// import { Services } from "./components/services";
import { Videos } from "./components/videos";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/team";
import { Contact } from "./components/contact";
import { Pricing } from "./components/pricing";
import { NotFound } from "./components/notfound";
import { HubspotContactForm } from "./components/hubspotcontactform";
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
      <Routes>
        <Route
          exact
          path="/mission"
          element={
            <div>
              <Navigation />
              <div id="about">
                <About data={landingPageData.About} />
                <OurGoal data={landingPageData.OurGoal} />
              </div>
            </div>
          }
        />
        <Route
          exact
          path="/pricing"
          element={
            <div>
              <Navigation />
              <div>
                <Pricing />
              </div>
            </div>
          }
        />
        <Route
          exact
          path="/team"
          element={
            <div>
              <Navigation />
              <div>
                <Team
                  execTeam={landingPageData.ExecTeam}
                  team={landingPageData.Team}
                />
              </div>
            </div>
          }
        />
        <Route
          exact
          path="/testimonials"
          element={
            <div>
              <Navigation />
              <div>
                <Videos data={landingPageData.Videos} />
                <Testimonials data={landingPageData.Testimonials} />
                <HubspotContactForm />
              </div>
            </div>
          }
        />
        <Route
          exact
          path="/"
          element={
            <div>
              <Navigation />
              <div style={{ minWidth: "fit-content" }}>
                <Header data={landingPageData.Header} />
                <HubspotContactForm />
                <Benefits data={landingPageData.Benefits} />
                <Features data={landingPageData.Features} />
                {/* <Services data={landingPageData.Services} /> */}
                <Contact data={landingPageData.Contact} />
              </div>
            </div>
          }
        />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
