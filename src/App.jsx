import {useState,useEffect,React} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./views/about";
import Contact from "./views/contact";
import Portfolio from "./views/portfolio";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProfileSidebar from "./components/profileSidebar";
import MenuSidebar from "./components/menuSidebar";
import Blogs from "./views/blogs";
import Resume from "./views/resume";
import bgLightImage from './assets/images/page-bg-light.jpg';
import bgDarkImage from './assets/images/page-bg-dark.jpg';

import './assets/styles/style.css';

function App() {
  const [isDark, setIsDark] = useState(true); // Declare isDark state
  useEffect(() => {
    // Update body background image when isDark state changes
    const body = document.querySelector('body');
    body.style.backgroundImage = isDark ? `url(${bgLightImage})` : `url(${bgDarkImage})`;

    // Clean up function to remove inline style when component unmounts
    return () => {
      body.style.backgroundImage = '';
    };
  }, [isDark]);
  return (
    <Router>
      {/* Include your navigation bar */}
      <Navbar isDark={isDark} setIsDark={setIsDark} /> {/* Pass isDark state and setIsDark function to Navbar */}   
      <div className={`row m-0 p-0 p-3 ${isDark ? 'light-mode' : 'dark-mode'}`}>
        <ProfileSidebar />
        
        <Routes>
        <Route exact path="/fifth-portfolio" element={<About />} />
          <Route exact path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
        <MenuSidebar />
      </div>

      <Footer />
    </Router>
  );
}

export default App;
