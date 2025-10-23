import React from "react";
import Home from "../components/Home/Home";
import { Route, Router, Routes } from "react-router-dom"; // Removed HashRouter import
import UnderConstruction from "../components/UnderConstruction/UnderConstruction";
import About from "../components/About/About";
import MembershipPage from "../components/Membership/MembershipPage";
import Notfound from "../components/NotFound/Notfound";
import Execoms from "../components/Execoms/Execoms";
import ScrollToTop from "../components/NotFound/ScrollToTop";
import CommitteePage from "../components/CommitteePage";
import Achievements from "../components/Achievements/Achievements";
import SocietyPage from "../components/Societies/society-page";
const SiteRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/about" element={<UnderConstruction />} />
        <Route path="/events" element={<UnderConstruction />} />
        {/* <Route path="/achievements" element={<Achievements />} /> */}
        <Route path="/achievements" element={<UnderConstruction />} />
        <Route path="/societies" element={<SocietyPage />} />
        <Route path="/affinities" element={<UnderConstruction />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/photo-gallery" element={<UnderConstruction />} />
        <Route path="/joinIEEE" element={<UnderConstruction />} />
        <Route path="/execoms/:team/:year" element={<UnderConstruction />} />
        <Route path="/execoms" element={<CommitteePage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default SiteRoutes;
