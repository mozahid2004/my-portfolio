import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import AllProjectsGrid from './components/AllProjectsGrid.jsx';
import ScrollToTop from "./components/ScrollToTop.jsx";
import Footer from "./components/Footer.jsx";

import './App.css';
import CounterComponent from "./pages/CounterComponent.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* HOME PAGE ROUTE */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <CounterComponent/>
              <Services />
              <Portfolio />
              <About />
              <Footer />   {/* Footer inside Home route => stays at bottom */}
            </>
          }
        />

        {/* ALL PROJECTS ROUTE */}
        <Route
          path="/all-projects"
          element={
            <>
              <AllProjectsGrid />
              <Footer />   {/* Footer for All Projects page too */}
            </>
          }
        />
      </Routes>

    </Router>
  );
}

export default App;
