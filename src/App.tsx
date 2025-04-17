import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import About from "./Components/About/About";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* <Route path="/project" element={<ProjectsPage />} /> */}
        {/* <Route path="/contactpage" element={<Contact2 />} /> */}
        {/* <Route path="/projectpage" element={<Projects />} /> */}
      </Routes>
      {/* <Contact/> */}
    </Router>
  );
};

export default App;



// https://dummyjson.com/products/category/furniture