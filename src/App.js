import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Sustainability from './pages/Sustainability';
import ProjectDetails from './pages/ProjectDetails';
import BlogDetails from './pages/BlogDetails';
import ServiceDetails from './pages/ServiceDetails';
import CustomManufacturing from './pages/services/CustomManufacturing';
import TechnicalSupport from './pages/services/TechnicalSupport';
import AfterSalesService from './pages/services/AfterSalesService';
import QualityAssurance from './pages/services/QualityAssurance';
import ResearchDevelopment from './pages/services/ResearchDevelopment';
import GlobalSupplyChain from './pages/services/GlobalSupplyChain';
import ConceptOfSustainability from './pages/sustainability/ConceptOfSustainability';
import EnvironmentalInitiatives from './pages/sustainability/EnvironmentalInitiatives';
import ClimateChangeDisclosure from './pages/sustainability/ClimateChangeDisclosure';
import OccupationalHealthSafety from './pages/sustainability/OccupationalHealthSafety';
import SocialMediaContribution from './pages/sustainability/SocialMediaContribution';
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
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/sustainability/concept-of-sustainability" element={<ConceptOfSustainability />} />
            <Route path="/sustainability/environmental-initiatives" element={<EnvironmentalInitiatives />} />
            <Route path="/sustainability/climate-change-disclosure" element={<ClimateChangeDisclosure />} />
            <Route path="/sustainability/occupational-health-safety" element={<OccupationalHealthSafety />} />
            <Route path="/sustainability/social-media-contribution" element={<SocialMediaContribution />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/service-details" element={<ServiceDetails />} />
            <Route path="/services/custom-manufacturing" element={<CustomManufacturing />} />
            <Route path="/services/technical-support" element={<TechnicalSupport />} />
            <Route path="/services/after-sales-service" element={<AfterSalesService />} />
            <Route path="/services/quality-assurance" element={<QualityAssurance />} />
            <Route path="/services/research-development" element={<ResearchDevelopment />} />
            <Route path="/services/global-supply-chain" element={<GlobalSupplyChain />} />
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