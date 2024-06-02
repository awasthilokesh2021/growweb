import React from "react";
import Header from "./components/Headers/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Signup from "./components/Signup/Signup";

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
