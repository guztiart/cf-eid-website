// Main Indonesian translations file that imports all Indonesian translation modules

import common from './common';
import home from './home';
import company from './company';
import sustainability from './sustainability';
import contact from './contact';
import products from './products';
import productDetails from './productDetails';
import socialContributionInitiatives from './socialContributionInitiatives';
import environmentalInitiatives from './environmentalInitiatives';
import conceptOfSustainability from './conceptOfSustainability';
import occupationalHealthSafety from './occupationalHealthSafety';

export default {
  // Common translations (header, footer)
  ...common,
  
  // Page translations
  home,
  company,
  sustainability,
  contact,
  products,
  productDetails,
  socialContributionInitiatives,
  environmentalInitiatives,
  conceptOfSustainability,
  occupationalHealthSafety
};