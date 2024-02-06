import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProfileSidebar from "./components/profileSidebar";
import MenuSidebar from "./components/menuSidebar";
import About from "./views/about";
import Contact from "./views/contact";
import Portfolio from "./views/portfolio";
import Blogs from "./views/blogs";
import Resume from "./views/resume";
import bgLightImage from './assets/images/page-bg-light.jpg';
import bgDarkImage from './assets/images/page-bg-dark.jpg';
import './assets/styles/style.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.backgroundImage = isDark ? `url(${bgLightImage})` : `url(${bgDarkImage})`;

    return () => {
      body.style.backgroundImage = '';
    };
  }, [isDark]);

  return (
    <div>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <div className={`row m-0 p-0 p-3 ${isDark ? 'light-mode' : 'dark-mode'}`}>
        <ProfileSidebar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <MenuSidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
