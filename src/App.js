import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Opening from "./pages/Opening";
import Feedback from "./pages/Feedback";

export const myContext = createContext();

const App = () => {
  const [user, setUser] = useState({
    name: "",
    contact: "",
    destination: "",
    email: "",
    comments: "",
    resume: "",
  });
  return (
    <myContext.Provider value={{ user, setUser }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Services />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="contact" element={<Contact />} />
        <Route path="opening" element={<Opening />} />
        <Route path="resume" element={<Resume />} />
      </Routes>

      <Footer />
    </myContext.Provider>
  );
};

export default App;
