import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Services from './pages/Services';
import ProjectDetails from './pages/ProjectDetails';
import BlogDetails from './pages/BlogDetails';
import ServiceDetails from './pages/ServiceDetails';
import EH795Details from './pages/products/eh795-details';
import AirCutValveDetails from './pages/products/airCutValve-details';
import LipSealDetails from './pages/products/lipSeal-details';
import MASDetails from './pages/products/mas-details';    
import FloatingSealDetails from './pages/products/floatingSeal-details';
import BladderDetails from './pages/products/bladder-details';
import EVK2RTDetails from './pages/products/evk2rt-details';
import EVK2RVDetails from './pages/products/evk2rv-details';  
import EVRDetails from './pages/products/evr-details';
import EVUDetails from './pages/products/evu-details';
import ReedValveDetails from './pages/products/reedValve-details';
import RudderSealDetails from './pages/products/rudderSeal-details';
import ServiceEngineerDetails from './pages/products/serviceEngineer-details';
import ORing from './pages/products/oRing-details';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/service-details" element={<ServiceDetails />} />
            <Route path="/products/eh795-details" element={< EH795Details/>} />
            <Route path="/products/airCutValve-details" element={< AirCutValveDetails/>} />
            <Route path="/products/lipSeal-details" element={< LipSealDetails/>} />
            <Route path="/products/mas-details" element={< MASDetails/>} />
            <Route path="/products/floatingSeal-details" element={< FloatingSealDetails/>} />
            <Route path="/products/bladder-details" element={< BladderDetails/>} />
            <Route path="/products/evk2rt-details" element={< EVK2RTDetails/>} />
            <Route path="/products/evk2rv-details" element={< EVK2RVDetails/>} />
            <Route path="/products/evr-details" element={< EVRDetails/>} />
            <Route path="/products/evu-details" element={< EVUDetails/>} />
            <Route path="/products/reedValve-details" element={< ReedValveDetails/>} />
            <Route path="/products/rudderSeal-details" element={< RudderSealDetails/>} />
            <Route path="/products/serviceEngineer-details" element={< ServiceEngineerDetails/>} />
            <Route path="/products/oRing-details" element={< ORing/>} />
          </Routes>
        </main>
        <Footer />
        <ScrollTop />
      </div>
    </Router>
  );
}

export default App;