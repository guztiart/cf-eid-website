import React, { createContext, useState, useContext } from 'react';

// Create the language context
const LanguageContext = createContext();

// Create translations object
export const translations = {
  en: {
    // Header
    header: {
      home: "Home",
      company: "Company",
      sustainability: "Sustainability",
      products: "Products",
      inquiryForm: "Inquiry Form",
      language: "Language"
    },
    // Home Page
    home: {
      // Hero Section
      scrollDown: "Scroll Down",
      playFullMovie: "Play full movie",
      
      // Get Started Section
      innovationTitle: "Innovation and Excellence in Precision Manufacturing.",
      innovationDesc1: "PT Eagle Industry Indonesia is part of Eagle Industry Co., Ltd., Japan, which has been operating for decades in providing high-quality components for various industries. We prioritize advanced technology, product reliability, and customer satisfaction to support global market needs.",
      innovationDesc2: "With modern production facilities in Indonesia, we ensure international quality standards and timely delivery to meet the needs of our customers across various sectors.",
      
      // Products Section
      productsTitle: "PRODUCTS",
      productsDesc: "We provide mechanical seals and various mechanical products for land, sea and air mobility, plant equipment and semiconductor manufacturing equipment.",
      learnMore: "Learn More",
      searchByCategory: "Search by \ncategory",
      searchByIndustry: "Search by \nIndustry",
      searchByKeyword: "Search by \nkeyword",
      enterKeywords: "Enter product keywords",
      
      // Categories
      mechanicalSeals: "Mechanical Seals",
      lipSeal: "Lip Seal",
      valves: "Valves",
      floatingSeal: "Floating Seal",
      accumulators: "Accumulators",
      waterLubricatedSternTubeSeal: "Water Lubricated Stern Tube Seal",
      waterLubricatedSternTubeBearing: "Water Lubricated Stern Tube Bearing",
      serviceEngineer: "Service Engineer",
      
      // Industries
      oilGas: "Oil & Gas",
      machinery: "Machinery",
      automobile: "Automobile",
      marine: "Marine",
      
      // Services Section
      ourServices: "Our Services",
      servicesDesc: "We provide comprehensive solutions for your precision component needs.",
      customManufacturing: "Custom Manufacturing",
      customManufacturingDesc: "We offer custom manufacturing solutions to meet specific customer needs across various industries.",
      technicalSupport: "Technical Support",
      technicalSupportDesc: "Our expert team provides technical support to ensure optimal performance of our products.",
      afterSalesService: "After-Sales Service",
      afterSalesServiceDesc: "We provide reliable after-sales service to ensure customer satisfaction.",
      qualityAssurance: "Quality Assurance",
      qualityAssuranceDesc: "Our rigorous quality control processes ensure that all products meet international standards and customer specifications.",
      researchDevelopment: "Research & Development",
      researchDevelopmentDesc: "Our R&D team continuously innovates to develop advanced sealing solutions that address evolving industry challenges.",
      globalSupplyChain: "Global Supply Chain",
      globalSupplyChainDesc: "We maintain an efficient global supply network to ensure timely delivery of products to customers worldwide.",
      readMore: "Read more",
      
      // Features Section
      floatingSeal: "Floating Seal",
      mechanicalSealFeature: "Mechanical Seal",
      lipSealFeature: "Lip Seal",
      rudder: "Rudder",
      
      floatingSealDesc: "Precision floating seals for heavy-duty applications in harsh environments.",
      floatingSealFeature1: "Excellent resistance to wear and extreme operating conditions",
      floatingSealFeature2: "Self-lubricating design for enhanced performance and longevity",
      floatingSealFeature3: "Ideal for construction, mining, and agricultural equipment",
      floatingSealFeature4: "Customizable configurations to meet specific application needs",
      
      mechanicalSealDesc: "High-performance mechanical seals designed for demanding industrial applications.",
      mechanicalSealFeature1: "Engineered for superior durability and extended service life",
      mechanicalSealFeature2: "Suitable for high-pressure, high-temperature environments",
      mechanicalSealFeature3: "Available in various materials to match specific application requirements",
      
      lipSealFeature1: "High-quality sealing for rotary and reciprocating applications",
      lipSealFeature2: "Available in various materials including NBR, FKM, and PTFE",
      lipSealFeature3: "Designed to prevent fluid leakage and contamination",
      lipSealDesc: "Reliable lip seals for automotive, industrial, and marine applications.",
      
      rudderDesc: "Advanced rudder seals for marine vessels ensuring optimal steering performance.",
      rudderFeature1: "Engineered for maximum durability in marine environments",
      rudderFeature2: "Superior resistance to corrosion and seawater conditions",
      rudderFeature3: "Designed to maintain vessel maneuverability and safety"
    },
    
    // Company Page
    company: {
      pageTitle: "About Company Eagle Industry Indonesia",
      breadcrumbHome: "Home",
      breadcrumbCompany: "Company",
      title: "PT Eagle Industry Indonesia",
      establishedSince: "Established Since December 1990",
      ourHistory: "Our History",
      historyDesc1: "PT Eagle Industry Indonesia (EID) is a subsidiary of Eagle Industry Co., Ltd., Japan, a global leader in the development and manufacturing of automotive and industrial components.EID began its operations in Indonesia as a trading business, supplying various industrial components. Over time, the company expanded into manufacturing to meet growing market demands and strengthen its presence in the automotive and machinery industries.",
      historyDesc2: "We believe that our success is built on the dedication of our team and customer trust. With modern production facilities and a professional team, PT Eagle Industry Indonesia is ready to be your trusted partner.",
      qualityFeature: "Producing high-quality automotive components with international standards.",
      innovationFeature: "Prioritizing technological innovation in every production process.",
      sustainabilityFeature: "Committed to sustainability and corporate social responsibility.",
      watchVideo: "Watch Video",
      
      ourStatistics: "Our Statistics",
      statisticsDesc: "We are proud of our achievements in providing the best solutions for customers and supporting industry growth.",
      globalCustomers: "Global Customers",
      millionProducts: "Million Products Produced",
      yearsExcellence: "Years of Excellence",
      dedicatedEmployees: "Dedicated Employees",
      
      managementMessage: "Management Message",
      managementDesc1: "Our company was originally formed as the mechanical seal division of NOK Corporation. The division became independent and incorporated under the name of Nippon Sealol Co., Ltd. in 1964, the year of the Tokyo Olympic Games, and the company name was changed to the current Eagle Industry Co., Ltd. (EKK) in 1978.",
      managementDesc2: "Ever since embarking on this long journey, for a half century EKK has grown as a sealing solution provider. We have established ourselves as a comprehensive parts manufacturer in pursuit of mobility on the land, seas and in the skies, as well as a mechanical seal manufacturer offering EagleBurgmann brand products in alliance with Burgmann Industries, a German mechanical seal maker.",
      managementDesc3: "EKK's products are used in a vast spectrum of mobility systems on the land, seas and in the skies. They include automobiles, motorcycles, construction machinery, and other so-called land-based \"moving vehicles,\" tankers, container ships, bulk carriers and other ocean-going ships, as well as ferries, coastal ships, and fishing boats, rockets, jet and propeller aircraft, and helicopters.",
      managementDesc4: "EagleBurgmann products are also used in pumps, compressors, blowers, and agitators mounted in production facilities at oil refineries, and in petrochemical, steel, pulp and paper, food, pharmaceutical, electric power, and many other industries.",
      managementDesc5: "No matter where they are used, one common objective of all our products is to prevent liquids, gases and other fluids from leaking from rotating machines during operation, and for this reason we can proudly say that together with our customers we have contributed to environmental protection and energy conservation. We have also developed an integrated production system that covers the entire process from the development of materials right through to production.",
      managementDesc6: "This system is built around our superior seal, power transmission, valve and hydraulic technologies, as well as our special processing and welding techniques that support them. With it, we are meeting customer requirements, which are becoming increasingly demanding as rotating machines operate at higher speeds, temperature, and pressure.",
      managementDesc7: "We will continue to hone our technological prowess to meet the increasingly specialized and complex needs of our customers.",
      
      managingDirectorMessage: "Managing Director Message",
      managingDirectorDesc1: "PT Eagle Industry Indonesia was established in 1990 as part of Eagle Industry Co., Ltd.'s global expansion strategy. Located in EJIP Industrial Park, Cikarang, our facility represents Eagle Industry's commitment to the growing Southeast Asian market.",
      managingDirectorDesc2: "Our Indonesian operations specialize in manufacturing high-precision mechanical seals, rubber bellows, and sealing components for automotive, industrial, and marine applications. We serve both domestic and international markets, with a focus on quality that meets Japanese manufacturing standards.",
      managingDirectorDesc3: "Since our establishment, we have built strong relationships with major automotive manufacturers and industrial companies in Indonesia and throughout the region. Our commitment to excellence has earned us recognition as a reliable supplier of critical sealing solutions.",
      managingDirectorDesc4: "We continue to invest in technology and human resources development to ensure we meet the evolving needs of our customers. Our team of skilled engineers and technicians work diligently to maintain the highest standards of quality and innovation that Eagle Industry is known for worldwide.",
      managingDirectorDesc5: "We are grateful for the trust our customers place in us and remain dedicated to contributing to Indonesia's industrial development through our products and services.",
      
      qualityExcellence: "Quality Excellence",
      qualityExcellenceDesc: "Maintaining Japanese quality standards in all our manufacturing processes and products",
      technicalInnovation: "Technical Innovation",
      technicalInnovationDesc: "Continuously developing advanced sealing solutions for demanding applications",
      customerFocus: "Customer Focus",
      customerFocusDesc: "Building long-term partnerships through reliability and exceptional service",
      sustainableGrowth: "Sustainable Growth",
      sustainableGrowthDesc: "Contributing to environmental protection through efficient sealing technology",
      
      ourHistoryTitle: "Our History",
      historyTitleDesc: "The journey of PT Eagle Industry Indonesia as part of Eagle Industry Co., Ltd., a global leader in sealing technology and precision components.",
      originEstablishment: "Origin and Establishment",
      originDesc1: "PT Eagle Industry Indonesia was established in 1990 as a branch of Eagle Industry Co., Ltd., a Japanese company originating from the mechanical seal division of NOK Corporation. This division became independent in 1964 under the name Nippon Sealol Co., Ltd., and changed its name to Eagle Industry Co., Ltd. in 1978.",
      originDesc2: "In Indonesia, we began operations at EJIP Industrial Park, Cikarang, focusing on the production of mechanical seals, rubber bellows, and precision components for the automotive, aerospace, and industrial equipment industries.",
      
      growthInnovation: "Growth and Innovation",
      growthDesc1: "Since our establishment, we have grown rapidly by adopting advanced technology from Japan. In the 2000s, we expanded production facilities to meet global demand, including an alliance with Burgmann Industries for EagleBurgmann products.",
      growthDesc2: "We developed an integrated production system from material development to final production, supporting the needs of high-speed, high-temperature, and high-pressure rotating machines.",
      factoryExpansion: "Factory expansion in 2010 to increase capacity.",
      qualityStandards: "Implementation of international quality standards such as ISO 9001 and IATF 16949.",
      envProtection: "Contribution to environmental protection through fluid leakage prevention.",
      
      presentFuture: "Present and Future",
      presentDesc1: "To date, PT Eagle Industry Indonesia has served hundreds of clients in various sectors, with a commitment to innovation, sustainability, and social responsibility. We continue to sharpen our technological capabilities to meet increasingly complex customer needs.",
      presentDesc2: "In the future, we aim to become a leader in mobility solutions on land, sea, and air, while supporting energy conservation and environmental protection.",
      watchHistoryVideo: "Watch History Video",
      
      companyOverview: "Company Overview",
      companyOverviewDesc: "Information about PT Eagle Industry Indonesia, part of Eagle Industry Co., Ltd., dedicated to providing high-quality sealing solutions and precision components.",
      name: "Name",
      established: "Established",
      representative: "Representative",
      headquarters: "Headquarters",
      paidInCapital: "Paid-in Capital",
      numberOfEmployees: "Number of Employees",
      businessOutline: "Business Outline",
      publicAuditingFirm: "Public Auditing Firm"
    },
    
    // Sustainability Page
    sustainability: {
      pageTitle: "Sustainability",
      breadcrumbHome: "Home",
      breadcrumbSustainability: "Sustainability",
      title: "Sustainability",
      conceptsTitle: "Our Concepts of Sustainability",
      conceptsSubtitle: "Creating a sustainable future through innovation and responsibility",
      visionTitle: "Eagle Industry's Sustainability Vision",
      visionDesc1: "At Eagle Industry Indonesia, we believe that companies belong to not only their shareholders but also their employees and society. This philosophy has long permeated every aspect of the EKK Group's management since our establishment in 1990.",
      visionDesc2: "As part of Eagle Industry Co., Ltd., a global leader in sealing solutions, we contribute to environmental protection through our core business. Our mechanical seals prevent gases, oil, and other fluids from leaking machinery, directly helping to preserve the environment and prevent pollution.",
      corePrinciples: "Our Core Principles:",
      principle1: "Environmental protection through leak prevention technology",
      principle2: "Building trust through dialogue with all stakeholders",
      principle3: "Creating fair profits that support perpetual growth",
      principle4: "Developing products that resolve environmental regulatory issues",
      learnMoreConcept: "Learn More About Our Sustainability Concept",
      
      esgTitle: "ESG Initiatives",
      esgSubtitle: "Strengthening our Environmental, Social, and Governance framework",
      environmentalTitle: "Environmental Initiatives",
      environmentalDesc: "Comprehensive environmental preservation activities in accordance with our environmental policy and ISO 14001 certification.",
      environmentalFeature1: "Water resource management",
      environmentalFeature2: "Global warming mitigation",
      environmentalFeature3: "Industrial waste reduction",
      
      climateTitle: "Climate Change Disclosure",
      climateDesc: "TCFD-aligned climate-related financial disclosure addressing risks and opportunities of climate change.",
      climateFeature1: "Governance framework",
      climateFeature2: "Climate strategy",
      climateFeature3: "Risk management",
      
      healthTitle: "Occupational Health & Safety",
      healthDesc: "Comprehensive OHS management system ensuring workplace safety and employee well-being.",
      healthFeature1: "Safety management systems",
      healthFeature2: "Health promotion programs",
      healthFeature3: "Safety training and education",
      
      socialTitle: "Social Media Contribution",
      socialDesc: "Leveraging social platforms to promote sustainability awareness and stakeholder engagement.",
      socialFeature1: "Sustainability awareness campaigns",
      socialFeature2: "ESG performance transparency",
      socialFeature3: "Community engagement",
      
      learnMore: "Learn More",
      
      ctaTitle: "Join Our Sustainability Journey",
      ctaDesc: "We are committed to creating sustainable value for all our stakeholders. Together, we can build a more sustainable future through innovation, responsibility, and collaboration.",
      contactUs: "Contact Us"
    },
    
    // Contact Page
    contact: {
      pageTitle: "Inquiry Form",
      breadcrumbHome: "Home",
      breadcrumbContact: "Inquiry Form",
      title: "Inquiry Form",
      address: "Address",
      addressDetails: "EJIP Industrial Park, Plot 8G, Sukaresmi, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17550",
      callUs: "Call Us",
      phoneNumber: "(021) 8970178",
      emailUs: "Email Us",
      emailAddress: "eid.sales@ekkeagle.com",
      yourName: "Your Name",
      yourEmail: "Your Email",
      subject: "Subject",
      message: "Message",
      sending: "Sending...",
      sendMessage: "Send Message",
      loading: "Loading",
      successMessage: "Your message has been saved and email sent (confirmation email sent to user). Thank you!",
      errorMessage: "Failed to send message",
      errorSending: "Error sending message. Please try again.",
      successAlert: "Success! Your inquiry has been submitted successfully.",
      errorAlert: "Error: "
    },
    
    // Products Page
    products: {
      pageTitle: "Products",
      breadcrumbHome: "Home",
      breadcrumbProducts: "Products",
      title: "Products",
      description: "Explore our range of high-quality sealing solutions and precision components designed for automotive, marine, aerospace, and general industry applications.",
      searchByCategory: "Search by \ncategory",
      searchByIndustry: "Search by \nIndustry",
      searchByKeyword: "Search by \nkeyword",
      enterKeywords: "Enter product keywords",
      allProducts: "All Products",
      allIndustries: "All Industries",
      items: "items",
      showingProductsFor: "Showing products for:",
      category: "Category",
      industry: "Industry",
      keyword: "Keyword",
      noProductsFound: "No products found",
      noProductsDescription: "There are no products available for the selected filter.",
      inquireNow: "Inquire Now",
      viewDetails: "View Details",
      
      // Categories
      mechanicalSeals: "Mechanical Seals",
      lipSeal: "Lip Seal",
      valves: "Valves",
      floatingSeal: "Floating Seal",
      accumulators: "Accumulators",
      waterLubricatedSternTubeSeal: "Water Lubricated Stern Tube Seal",
      waterLubricatedSternTubeBearing: "Water Lubricated Stern Tube Bearing",
      serviceEngineer: "Service Engineer",
      
      // Industries
      oilGas: "Oil & Gas",
      machinery: "Machinery",
      automobile: "Automobile",
      marine: "Marine",
      semiconductor: "Semiconductor",
      
      // Product Names
      eh795: "EH795 EH790 for Water Pump",
      eh795Desc: "Capable for high-speed rotation. Mass-production by fully automated assembling lines and supplied to water pump makers worldwide. By its unitized design, EH795 supports easy installation into customer application.",
      lipSealAc: "Lip Seal For A/C Compressor",
      lipSealAcDesc: "Rotating shaft seals exclusively designed for car air-conditioning compressors. Eagle Industry's original design featuring compactness and high reliability. Helps eliminate CFC leakage causing global warming.",
      reedValve: "Reed Valve",
      reedValveDesc: "Designed for four-stroke motorcycle engines for emission control. Substantially reduces carbon monoxide and hydrocarbon emissions to mitigate air pollution.",
      airCutValve: "Air Cut Valve",
      airCutValveDesc: "Control valve for variable displacement A/C compressors. Controls swash plate angle to adjust compressor displacement according to A/C load for improved fuel economy.",
      floatingSeal: "Floating Seal",
      floatingSealDesc: "Seals for undercarriages of construction machinery. Simple structure consisting of an O-ring and a seal ring made of special cast iron. Optimum seals for undercarriages of bulldozers and hydraulic excavators.",
      superiorORing: "SUPERIOR O-Ring",
      superiorORingDesc: "Newly developed O-Ring material with better chemical resistance, low outgas generation, and light heat resistance for semiconductor process industry.",
      bladderAccumulator: "Bladder Type Accumulator",
      bladderAccumulatorDesc: "These standard bladder accumulators are manufactured based on years of experience and proven performance.",
      evk2rv: "Water Lubricated Stern Tube Seal - EVK",
      evk2rvDesc: "A compact, high performance water lubricated seal having excellent vibration resistance and sealing performance. The EVK type seal is the easiest of the seals on the market for installation and operation.",
      evk2rt: "Water Lubricated Stern Tube Seal - EVK2RT",
      evk2rtDesc: "A compact, high performance water lubricated seal having excellent vibration resistance and sealing performance. The EVK type seal is the easiest of the seals on the market for installation and operation.",
      mas: "Marine Ace Seal (MAS)",
      masDesc: "Water-lubricated stern seal for small vessels with direct drive systems. Features end-face seal structure for excellent sealing performance.",
      rudderSeal: "Rudder Seal",
      rudderSealDesc: "Rudder seals with lip seals designed to prevent lubricant leakage and seawater ingress. Approved by classification societies with multiple types available.",
      evr: "Water Lubricated Stern Tube Bearing - EVR",
      evrDesc: "Excellent Durability and Vibration Absorption. Designed specifically for marine applications with water lubricated shafting systems.",
      evu: "Water Lubricated Stern Tube Bearing - EVU",
      evuDesc: "Poly-Urethane bearing developed for water lubricated stern tube systems based on our extensive water lubricated bearing technology and experience.",
      serviceEngineer: "Service Engineer",
      serviceEngineerDesc: "Professional engineering services for your ship's sealing systems. We provide highly skilled and experienced service engineers to handle all aspects of marine sealing."
    },
    
    // Product Details Pages
    productDetails: {
      // Common translations
      products: "PRODUCTS",
      home: "Home",
      productBreadcrumb: "Products",
      inquireAboutProduct: "Inquire About This Product",
      contactUs: "Contact Us",
      contactViaEmail: "Please contact us via our email form",
      relatedProducts: "Related Products",
      exploreSimilarProducts: "Explore our other similar products",
      toProductsTop: "To Products TOP",
      productSpecification: "Product specification example",
      specificationInfo: "Information about specification Product.",
      noteText: "Note: The above figures indicate the best conditions in individual cases and may differ according to the valve size and application. Contact us before use.",
      productInformation: "Product Information",
      productFeatures: "Product Features",
      category: "Category",
      application: "Application",
      function: "Function",
      operatingTemperature: "Operating Temperature",
      material: "Material",
      applications: "Applications",
      type: "Type",
      temperatureRange: "Temperature Range",
      maxPressure: "Max Pressure",
      volumeRange: "Volume Range",
      sealedFluid: "Sealed fluid",
      temperature: "Temperature",
      maximumCircumferentialVelocity: "Maximum circumferential velocity",
      pressure: "Pressure",
      shaftDiameter: "Shaft diameter",
      model: "Model",
      benefits: "Benefits",
      model: "Model",
      improvedFuelEconomy: "Improved fuel economy",
      reducedEmissions: "Reduced emissions",
      enhancedACSystemEfficiency: "Enhanced AC system efficiency",
      highEnergyStorageCapacity: "High energy storage capacity",
      excellentResponseTime: "Excellent response time",
      lowGasPermeability: "Low gas permeability",
      easyMaintenance: "Easy maintenance",
      longServiceLife: "Long service life",
      wideTemperatureRange: "Wide temperature range",
      energyStorageInHydraulicSystems: "Energy storage in hydraulic systems",
      shockAbsorption: "Shock absorption",
      pulsationDampening: "Pulsation dampening",
      emergencyPowerSupply: "Emergency power supply",
      // Additional keys for serviceEngineer-details.js
      serviceType: "Service Type",
      serviceArea: "Service Area",
      responseTime: "Response Time",
      serviceAvailability: "Service Availability",
      specialization: "Specialization",
      serviceCenters: "Service Centers",
      
      // Air Cut Valve
      airCutValve: {
        title: "Air Cut Valve",
        breadcrumb: "Air Cut Valve",
        description1: "Control valve for variable displacement A/C compressors. This valve controls the swash plate angle of the compressor to adjust the compressor displacement according to the A/C load.",
        description2: "The Air Cut Valve is engineered with precision to provide optimal performance in automotive air conditioning systems. With advanced materials and innovative design, this valve ensures maximum efficiency in controlling the compressor displacement according to the A/C load, resulting in improved fuel economy and reduced emissions.",
        description3: "Our Air Cut Valves undergo rigorous quality control processes to meet international standards for automotive components. The specialized materials used in manufacturing offer excellent resistance to various refrigerants and compressor oils, ensuring long service life even under extreme operating conditions.",
        categoryValue: "Automobile, Car Air-Conditioning Compressor",
        applicationValue: "Variable Displacement A/C Compressors",
        functionValue: "Controls swash plate angle to adjust compressor displacement",
        operatingTemperatureValue: "-40 to 150°C",
        materialValue: "High-grade stainless steel and specialized components",
        applicationsValue: "Automotive AC compressors for passenger and commercial vehicles"
      },
      
      // Bladder Type Accumulator
      bladderAccumulator: {
        title: "Bladder Type Accumulator",
        breadcrumb: "Bladder Type Accumulator",
        description1: "These standard bladder accumulators are manufactured based on years of experience and proven performance. They are designed to store energy under pressure in the form of compressed gas, providing hydraulic power when needed in various industrial applications.",
        description2: "The bladder accumulator consists of a high-strength pressure vessel containing an elastic bladder that separates the hydraulic fluid from the gas pre-charge. When hydraulic fluid enters the accumulator, the bladder compresses the gas, storing energy. When the system requires additional power, the compressed gas expands, pushing the fluid back into the system.",
        description3: "Eagle Industry Indonesia's bladder type accumulators feature superior construction with high-quality materials ensuring durability and reliability in demanding industrial environments. These accumulators are suitable for applications requiring energy storage, shock absorption, pulsation dampening, and emergency power supply.",
        categoryValue: "Industrial, Hydraulic Components",
        typeValue: "Bladder Type Accumulator",
        materialValue: "High-grade Steel Shell, Nitrile Bladder",
        temperatureRangeValue: "-20°C to 120°C",
        maxPressureValue: "Up to 350 bar",
        volumeRangeValue: "0.5 to 50 liters",
        applicationsValue: "Hydraulic Systems"
      },
      
      // EH795/EH790 for Water Pump
      eh795: {
        title: "EH795/EH790 for Water Pump",
        breadcrumb: "EH795/EH790 for Water Pump",
        description1: "Capable for high-speed rotation. Mass-production by fully automated assembling lines and supplied to water pump makers worldwide. By its unitized design, EH795 supports easy installation into customer application.",
        description2: "These seals are suitable for high-speed rotation due to its simple and compact construction. The materials of the seal face are Eagle Industry's proprietary carbon components and SiC which provides high resistance to heat, wear and corrosion. These seals are manufactured by full automated assembling lines at our global production sites, and has high market share in worldwide specifically in the category of seals for automotive water pumps. These seals are also suitable for industrial pumps. EH795: The rotating and stationary components are unitized with the stamped sleeve, providing ease of installation as well as high reliability by protecting sliding surfaces.",
        categoryValue: "Mechanical Seals, Water Pump",
        modelValue: "EH795/EH790",
        sealedFluidValue: "Water, Coolant, etc.",
        temperatureValue: "-20°C to 110°C (120°C max.)",
        maximumCircumferentialVelocityValue: "12 m/s",
        pressureValue: "-67 kPa to 0.3 MPaG",
        shaftDiameterValue: "Up to 30 mm",
        applicationsValue: "Water pumps for automotive and industrial applications"
      },
      
      // EVK2RV - Water Lubricated Stern Tube Seal
      evk2rv: {
        title: "Water Lubricated Stern Tube Seal - EVK",
        breadcrumb: "Water Lubricated Stern Tube Seal - EVK",
        description1: "KEMEL manufactures the EVK type water seal. The EVK type seal has many benefits for owners and operators of vessels with water lubricated shafting. The EVK type seal is the easiest of the seals on the market for installation and operation. The seal does not wear the propeller shaft sleeve.",
        description2: "The design of the KEMEL EVK type seal is very simple. Since it is a face type seal consisting of the seal ring and the mating ring, it flexibly copes with complicated vibration and shaft deflection and shows excellent sealing performance. All seal assemblies are supplied with an active seal and a spare seal which is installed on the shaft ready for installation.",
        typeValue: "Water Lubricated Stern Tube Seal",
        modelValue: "EVK2RV",
        materialValue: "Specialized Marine Grade Components",
        temperatureRangeValue: "-10°C to 80°C",
        maxPressureValue: "Up to 1.0 MPa",
        applicationsValue: "Marine Vessels, Ships, Boats"
      },
      
      // EVK2RT - Water Lubricated Stern Tube Seal
      evk2rt: {
        title: "Water Lubricated Stern Tube Seal - EVK2RT",
        breadcrumb: "Water Lubricated Stern Tube Seal - EVK2RT",
        description1: "A compact, high performance water lubricated seal having excellent vibration resistance and sealing performance. The EVK type seal is the easiest of the seals on the market for installation and operation.",
        description2: "The EVK2RT variant is engineered for specific marine applications requiring enhanced durability and reliability. This seal solution provides optimal performance in various marine vessels and operating conditions.",
        description3: "With advanced materials and precision manufacturing, our EVK2RT seals offer superior resistance to marine environment challenges including corrosion, wear, and vibration.",
        spareRingActivation: "Spare ring is easily activated without disassembling.",
        featuresDescription1: "Features quick spare ring activation for minimal downtime in marine operations. The EVK2RT is designed to provide reliable sealing performance in water-lubricated stern tube applications, ensuring optimal protection against water ingress and oil leakage.",
        featuresDescription2: "Our EVK2RT seals are manufactured with high-quality materials that offer excellent resistance to marine environments. The innovative design allows for easy maintenance and extended service life, reducing operational costs and vessel downtime. The simple spare ring activation mechanism enables quick replacement without the need for complete disassembly, making it an ideal solution for marine vessels requiring minimal maintenance intervals.",
        productInformation: "Product Information",
        category: "Category",
        industry: "Industry",
        application: "Application",
        keyFeature: "Key Feature",
        material: "Material",
        benefits: "Benefits",
        categoryValue: "Marine Seals",
        industryValue: "Marine",
        applicationValue: "Stern Tube",
        keyFeatureValue: "Quick spare ring activation without disassembly",
        materialValue: "High-grade marine-resistant components",
        benefitsValue: "Minimal downtime, easy maintenance",
        typeValue: "Water Lubricated Stern Tube Seal",
        modelValue: "EVK2RT",
        temperatureRangeValue: "-10°C to 90°C",
        maxPressureValue: "Up to 1.2 MPa",
        applicationsValue: "Commercial Marine Vessels, Industrial Ships"
      },
      
      // EVR - Water Lubricated Stern Tube Bearing
      evr: {
        title: "Water Lubricated Stern Tube Bearing - EVR",
        breadcrumb: "Water Lubricated Stern Tube Bearing - EVR",
        description1: "Excellent Durability and Vibration Absorption.",
        description2: "Combination of advantages of reinforced plastic with those of elastomer, Outstanding durability and stable performance, Effective absorption of shaft vibration, Prevention of Electrolytic Corrosion on the shaft sleeve",
        description3: "Straight Type Bearing, the outer shell is made of Cotton cloth Reinforced Plastic (CRP) which is impregnated by thermosetting reign. It is suitable to be installed on ships with relatively small diameters. Flange Type Bearing, the outher shell is made of Glass cloth Reinforced Plastic (GRP), and is suitable or relatively larger diameter.",
        categoryValue: "Marine, Water Lubricated Bearings",
        typeValue: "Water Lubricated Stern Tube Bearing",
        modelValue: "EVR",
        materialValue: "Specialized Water-Lubricated Bearing Material",
        temperatureRangeValue: "-5°C to 70°C",
        maxPressureValue: "Up to 2.0 MPa",
        applicationsValue: "-"
      },
      
      // EVU - Water Lubricated Stern Tube Bearing
      evu: {
        title: "Water Lubricated Stern Tube Bearing - EVU",
        breadcrumb: "Water Lubricated Stern Tube Bearing - EVU",
        description1: "Poly-Urethane bearing “EVU” is develode for water lubricated stern tube system based on the technology cultivated in our water lubricated bearing experience.",
        categoryValue: "Marine, Water Lubricated Bearings",
        typeValue: "Water Lubricated Stern Tube Bearing",
        modelValue: "EVU",
        materialValue: "Poly-Urethane Compound",
        temperatureRangeValue: "-10°C to 60°C",
        maxPressureValue: "Up to 1.5 MPa",
        applicationsValue: "Marine Vessels, Water Lubricated Propulsion Systems"
      },
      
      // EVU Valve Stem Seal
      evuValveStemSeal: {
        title: "EVU Valve Stem Seal",
        breadcrumb: "EVU Valve Stem Seal",
        description1: "EVU valve stem seals are designed to provide excellent sealing performance for engine valve applications. These seals prevent oil from entering the combustion chamber through the valve guide while allowing proper lubrication of the valve stem.",
        description2: "Manufactured with high-quality materials and precision engineering, EVU valve stem seals offer superior durability and reliability. The seals are designed to withstand extreme temperature variations and harsh operating conditions in modern engines. Eagle Industry's advanced manufacturing processes ensure consistent quality and performance across all EVU products.",
        description3: "The EVU series features a compact design that allows for easy installation and replacement. These seals are compatible with a wide range of engine applications and provide optimal sealing efficiency throughout their service life.",
        categoryValue: "Valve Stem Seals",
        modelValue: "EVU Series",
        materialValue: "High-grade Fluoroelastomer",
        temperatureRangeValue: "-40°C to 250°C",
        pressureRatingValue: "Up to 5 MPa",
        applicationsValue: "Engine Valve Systems",
        features: {
          excellentOilResistance: "Excellent oil resistance",
          superiorHeatResistance: "Superior heat resistance",
          preciseDimensionalControl: "Precise dimensional control",
          enhancedDurability: "Enhanced durability"
        },
        noteText: "Note: The above figures indicate best conditions in individual cases and may differ according to the seal size. Contact us before use."
      },
      
      // Floating Seal
      floatingSeal: {
        title: "Floating Seal ES100 & ES764",
        breadcrumb: "Floating Seal ES100 & ES764",
        description1: "Seals for undercarriages of construction machinery (track rollers, final drives, axles and idlers). Simple structure consisting of an O-ring and a seal ring made of special cast iron. Optimum seals for undercarriages of bulldozers and hydraulic excavators frequently exposed to sand, dirt and other foreign matter. ES764 offers ease of designing and manufacturing housings.",
        description2: "Floating seals are simple products, consisting of two components: a seal ring made of special cast iron and a rubber component (O-ring/gasket). In use, two identical seals make a pair. The seal ring, which is a sliding component, is not in contact with shaft since it is sustained by rubber component, and therefore follows the radial and thrusting motions of shaft closely.",
        description3: "Since they were developed for slurry applications, seal rings are made of an extremely hard, wear-resistant and corrosion-resistant material. The rubber component presses seal ring's sliding surfaces and also serves as a seal. Therefore, it is made of a material that is highly resistant to cold temperatures and heat with little compression set for a longer useful life.",
        description4: "Main uses of floating seals include crawler rollers, travel drives and idlers of construction and agricultural machinery, and also for conveyors, mixers and various digging machines. In other words, they are used widely in relatively low-speed applications exposed to foreign matter.",
        categoryValue: "Machinery, Undercarriage",
        sealedFluidValue: "Inside: lubricant, Outside: sand, dirt and mud",
        temperatureValue: "NBR: -40 to 100ºC, H-NBR: -30 to 130ºC, FKM: -10 to 200ºC",
        maximumCircumferentialVelocityValue: "MAX. 2m/sec",
        pressureValue: "MAX. 0.2 MPaG",
        shaftDiameterValue: "φ38～φ429mm",
        materialValue: "Special cast iron seal ring, rubber O-ring/gasket",
        applicationsValue: "Track rollers, final drives, axles, idlers, conveyors, mixers, digging machines",
        noteText: "Note: The above figures indicate best conditions in individual cases and may differ according to seal size. Contact us before use."
      },
      
      // Lip Seal
      lipSeal: {
        title: "Lip Seal For A/C Compressor",
        breadcrumb: "Lip Seal For A/C Compressor",
        description1: "Rotating shaft seals exclusively designed for car air-conditioning compressors. Eagle Industry's original design featuring compactness and high reliability. Helps eliminate CFC leakage causing global warming.",
        description2: "Our lip seals for A/C compressors are engineered with precision to provide optimal sealing performance in automotive air conditioning systems. The innovative design ensures reliability while helping prevent refrigerant leakage.",
        description3: "Manufactured with advanced materials and processes, our lip seals offer excellent resistance to various refrigerants and operating conditions. The compact design allows for easy installation in various compressor configurations.",
        categoryValue: "Automotive, A/C Systems",
        typeValue: "Lip Seal",
        materialValue: "Specialized Elastomeric Compounds",
        temperatureRangeValue: "-40°C to 150°C",
        maxPressureValue: "Up to 2.5 MPa",
        applicationsValue: "Automotive A/C Compressors, Refrigeration Systems",
        // Additional keys for lipSeal-details.js
        productTitle: "Lip Seal For A/C Compressor",
        descriptionParagraph1: "These are rotating shaft seals exclusively designed for car air-conditioning compressors. Eagle Industry's original design featuring compactness and high reliability. They help eliminate CFC leakage causing global warming. Made of rubber suitable for sealing CFCs and refrigerator oil. Mass-production by full automated assembling lines and supplied to compressor makers worldwide.",
        descriptionParagraph2: "The lip seals are engineered with precision to provide optimal performance in automotive air conditioning systems. With advanced materials and innovative design, these seals ensure maximum durability and efficiency in preventing refrigerant leakage while maintaining smooth operation of the compressor shaft.",
        descriptionParagraph3: "Our lip seals undergo rigorous quality control processes to meet international standards for automotive components. The specialized rubber compound used in manufacturing offers excellent resistance to various refrigerants and compressor oils, ensuring long service life even under extreme operating conditions.",
        productInformation: "Product Information",
        category: "Category",
        categoryValue: "Automobile, Car Air-Conditioning Compressor",
        sealedFluid: "Sealed fluid",
        sealedFluidValue: "R134a/R1234yf & Compressor oil",
        operatingTemperature: "Operating Temperature",
        operatingTemperatureValue: "-40 to 150ºC",
        maximumCircumferentialVelocity: "Maximum circumferential velocity",
        maximumCircumferentialVelocityValue: "8 m/s (approx. 10,000 rpm)",
        fluidPressureRange: "Fluid Pressure Range",
        fluidPressureRangeValue: "When rotating (ON): 0 to 0.7 MPaG, When stationary (OFF): -760 mmHg to 3 MPaG",
        shaftDiameter: "Shaft diameter",
        shaftDiameterValue: "12.7 to 20 mm",
        material: "Material",
        materialValue: "Special rubber compound for CFC resistance",
        applications: "Applications",
        applicationsValue: "Automotive AC compressors for passenger and commercial vehicles",
        inquireAboutThisProduct: "Inquire About This Product",
        noteText: "Note: The above figures indicate the best conditions in individual cases and may differ according to the seal size. Contact us before use.",
        // Related products
        forAcCompressor: "for A/C compressor",
        typeAMechanicalSeal: "Type A Mechanical seal",
        forWaterPump: "for Water Pump",
        eh795EH790: "EH795/EH790",
        forVariableDisplacementAcCompressor: "for Variable Displacement A/C Compressor",
        controlValve: "Control Valve",
        contact: "Contact"
      },
      
      // Marine Ace Seal (MAS)
      mas: {
        title: "Marine Ace Seal (MAS)",
        breadcrumb: "Marine Ace Seal (MAS)",
        description1: "We are the leading manufacturer of stern tube shaft sealing devices worldwide with our products installed on over 30,000 ships of 100 gross tonnages or more. The Marine Ace Seal (MAS) is our newly developed water-lubricated stern seal for small vessels with direct drive systems.",
        categoryValue: "Water Lubricated Stern Tube Seal",
        typeValue: "Water-Lubricated Stern Seal",
        modelValue: "MAS",
        materialValue: "Marine Grade Seal Materials",
        temperatureRangeValue: "-5°C to 70°C",
        maxPressureValue: "Up to 0.8 MPa",
        applicationsValue: "Small vessels with direct drive systems",
        shaftRange: "Shaft Range",
        allowablePvValue: "Allowable PV Value",
        pressure: "Pressure (P)",
        requiredCoolingWater: "Required Cooling Water",
        coolingWaterTemperature: "Cooling Water Temperature",
        shaftRotationSpeed: "V (Shaft rotation speed)",
        variesByApplication: "Varies by application",
        noteText: "Note: The above figures indicate the best conditions in individual cases and may differ according to the seal size. Contact us before use."
      },
      
      // O-Ring
      oRing: {
        title: "SUPERIOR O-Ring",
        breadcrumb: "SUPERIOR O-Ring",
        description1: "Newly developed O-Ring material with better chemical resistance, low outgas generation, and light heat resistance for semiconductor process industry.",
        description2: "Our SUPERIOR O-Ring is engineered specifically for semiconductor and high-purity applications. The advanced material formulation provides excellent chemical resistance and minimal outgassing properties.",
        description3: "Developed with cutting-edge technology, our O-Rings offer superior performance in demanding semiconductor processes. The material provides excellent resistance to various chemicals while maintaining sealing integrity.",
        categoryValue: "Semiconductor, Sealing Solutions",
        typeValue: "O-Ring",
        materialValue: "Advanced Semiconductor Grade Elastomer",
        temperatureRangeValue: "-50°C to 200°C",
        maxPressureValue: "Up to 10.0 MPa",
        applicationsValue: "Semiconductor Process Equipment, High-Purity Applications",
        // Additional keys for oRing-details.js
        semiconductor: "Semiconductor",
        semiconductorProcess: "Semiconductor Process",
        productTitle: "SUPERIOR O-Ring",
        descriptionParagraph1: "\"SUPERIOR\" series is newly developed as O-Ring material with better chemical resistance, Low outgas generation, and light heat resistance especially for semiconductor process industry.",
        descriptionParagraph2: "FKM and VMQ for various applications in semiconductor manufacturing process are available. These O-rings provide exceptional performance in demanding semiconductor environments where precision and reliability are critical.",
        descriptionParagraph3: "The SUPERIOR series demonstrates excellent resistance for plasma and chemicals, making it ideal for harsh conditions encountered in semiconductor manufacturing. With small outgas generation and continuity of good resistance against photo thermal generated in manufacturing process of semiconductor, these O-rings maintain their integrity and sealing performance even in extreme conditions.",
        productInformation: "Product Information",
        category: "Category",
        categoryValue: "Packing, Gasket",
        productSeries: "Product Series",
        productSeriesValue: "SUPERIOR",
        material: "Material",
        materialValue: "FKM and VMQ",
        keyFeatures: "Key Features",
        keyFeaturesValue: "Chemical resistance, Low outgas generation",
        specialProperties: "Special Properties",
        specialPropertiesValue: "Plasma resistance, Light heat resistance",
        applications: "Applications",
        applicationsValue: "Semiconductor process industry",
        inquireAboutThisProduct: "Inquire About This Product",
        productFeatures: "Product Features",
        featuresInfo: "Information about SUPERIOR O-Ring features.",
        materialOptions: "Material Options",
        materialOptionsValue: "FKM and VMQ for various applications in semiconductor manufacturing process",
        plasmaResistance: "Plasma Resistance",
        plasmaResistanceValue: "Excellent resistance for plasma",
        chemicalResistance: "Chemical Resistance",
        chemicalResistanceValue: "Excellent resistance for chemical",
        outgasGeneration: "Outgas Generation",
        outgasGenerationValue: "Small outgas generation",
        photoThermalResistance: "Photo Thermal Resistance",
        photoThermalResistanceValue: "Continuity of good resistance against photo thermal generated in manufacturing process of semiconductor",
        noteText: "Note: The SUPERIOR series is specially developed for semiconductor process industry applications with superior chemical resistance and low outgas generation.",
        // Related products
        forAcCompressor: "for A/C compressor",
        typeAMechanicalSeal: "Type A Mechanical seal",
        forWaterPump: "for Water Pump",
        eh795EH790: "EH795/EH790",
        forVariableDisplacementAcCompressor: "for Variable Displacement A/C Compressor",
        controlValve: "Control Valve",
        contact: "Contact"
      },
      
      // Reed Valve
      reedValve: {
        title: "Reed Valve",
        breadcrumb: "Reed Valve",
        description1: "Designed to be used in four-stroke motorcycle engines for emission control (secondary air supply). Substantially reduces carbon monoxide (CO) and hydrocarbon (HC) emissions to mitigate air pollution.",
        description2: "These compact and lightweight Reed Valve installed in a limited space ensure large flows. Highly responsive valves for high-speed mode.",
        description3: "Our reed valves are engineered with precision to provide optimal performance in motorcycle engines. With advanced materials and innovative design, these valves ensure maximum durability and efficiency in controlling emissions while maintaining smooth engine operation.",
        productTitle: "Reed Valves",
        categoryValue: "Automobile, Motorcycle Engine",
        applicationValue: "Four-stroke motorcycle engines",
        functionValue: "Emission control (secondary air supply)",
        temperatureRangeValue: "-20 to 140°C",
        vibrationDurabilityValue: "20 G at 200Hz for 10^7 cycles",
        materialValue: "High-grade stainless steel",
        applicationsValue: "Motorcycle emission control systems",
        productSpecification: "Product Specification Example",
        specificationInfo: "Information about specification Product.",
        temperature: "Temperature",
        vibrationDurability: "Vibration durability",
        noteText: "Note: The above figures show some examples. Contact us when you are considering making a purchase.",
        // Related products
        forAcCompressor: "for A/C compressor",
        typeAMechanicalSeal: "Type A Mechanical seal",
        forWaterPump: "for Water Pump",
        eh795EH790: "EH795/EH790",
        forVariableDisplacementAcCompressor: "for Variable Displacement A/C Compressor",
        controlValve: "Control Valve",
        contact: "Contact"
      },
      
      // Rudder Seal
      rudderSeal: {
        title: "Rudder Seal",
        breadcrumb: "Rudder Seal",
        description1: "Rudder seal manufacture with high-performance, self-lubricating lip seals designed to be mounted above the rudder bearing to prevent the ingress of sea water into the hull. Manufactured from a special rubber, provide long wear life with no need for periodic adjustments, operate with less drag and reduced shaft or liner wear.",
        productInformation: "Product Information",
        category: "Category",
        sealedFluid: "Sealed fluid",
        operatingTemperature: "Operating Temperature",
        maximumCircumferentialVelocity: "Maximum circumferential velocity",
        fluidPressureRange: "Fluid Pressure Range",
        shaftDiameter: "Shaft diameter",
        material: "Material",
        applications: "Applications",
        categoryValue: "Marine, Rudder Seals",
        sealedFluidValue: "Seawater",
        operatingTemperatureValue: "-20°C to 120°C",
        maximumCircumferentialVelocityValue: "15 m/s (approx. 5,000 rpm)",
        fluidPressureRangeValue: "0 to 0.5 MPaG",
        shaftDiameterValue: "100 to 800 mm",
        materialValue: "Special rubber compound for marine applications",
        applicationsValue: "Marine vessels, commercial ships, coastal vessels",
        typesAvailable: "Types Available",
        cxType: "CX Type: Standard model",
        dxType: "DX Type: With additional standby seal",
        axType: "AX Type: Pollution-free model",
        evaType: "EVA Type: Equipped with face seals",
        inquireAboutThisProduct: "Inquire About This Product",
        noteText: "Note: The above figures indicate the best conditions in individual cases and may differ according to the seal size. Contact us before use.",
        // Related products
        forAcCompressor: "for A/C compressor",
        typeAMechanicalSeal: "Type A Mechanical seal",
        forWaterPump: "for Water Pump",
        eh795EH790: "EH795/EH790",
        forVariableDisplacementAcCompressor: "for Variable Displacement A/C Compressor",
        controlValve: "Control Valve",
        contact: "Contact"
      },
      
      // Service Engineer
      serviceEngineer: {
        title: "Service Engineer",
        breadcrumb: "Service Engineer",
        description1: "Professional engineering services for your ship's sealing systems. We provide highly skilled and experienced service engineers to handle all aspects of marine sealing.",
        description2: "Our service engineering team offers comprehensive support for marine sealing systems. With extensive experience and technical expertise, we provide solutions for various sealing challenges in marine applications.",
        description3: "Our service engineers are trained to handle all aspects of marine sealing systems, from installation to maintenance and troubleshooting. We ensure optimal performance and reliability of your sealing solutions.",
        categoryValue: "Marine Services, Engineering Support",
        serviceType: "Professional Engineering Services",
        expertise: "Marine Sealing Systems",
        serviceAreas: "Installation, Maintenance, Troubleshooting",
        availability: "Global Service Network",
        applicationsValue: "Marine Vessels, Ships, Offshore Platforms",
        // Additional keys for serviceEngineer-details.js
        serviceInformation: "Service Information",
        serviceTypeValue: "Technical Support & Maintenance",
        serviceAreaValue: "Worldwide Coverage",
        responseTimeValue: "24-48 hours (Emergency)",
        serviceAvailabilityValue: "24/7 Support",
        specializationValue: "Marine Sealing Systems",
        serviceCentersValue: "Global Network",
        contactServiceEngineer: "Contact Service Engineer",
        globalServiceNetwork: "Global Service Network",
        ourServiceEngineersAvailableWorldwide: "Our service engineering team is available worldwide",
        noteText: "Note: Our service engineers are available 24/7 for emergency support. Contact us for immediate assistance.",
        contactServiceEngineerSection: "Contact Service Engineer",
        pleaseContactUsViaOurEmailForm: "Please contact us via our email form for technical support",
        // Region translations
        asia: "Asia",
        asiaLocations: "Japan (Tokyo, Kobe, Hiroshima)<br>China, Singapore, Taiwan, South Korea<br>Indonesia, Philippines, Thailand, India",
        europe: "Europe",
        europeLocations: "United Kingdom, Germany, Greece<br>Norway, Sweden, Denmark, Finland<br>Italy, France, Portugal, Poland, Netherlands<br>Russia, Bulgaria, Spain",
        northAmerica: "North America",
        northAmericaLocations: "USA, Canada, Mexico, Caribbean Sea",
        southAmerica: "South America",
        southAmericaLocations: "Chile, Brazil",
        oceania: "Oceania",
        oceaniaLocations: "Australia",
        middleEast: "Middle East",
        middleEastLocations: "UAE & Gulf",
        // Related products
        forAcCompressor: "for A/C compressor",
        typeAMechanicalSeal: "Type A Mechanical seal",
        forWaterPump: "for Water Pump",
        eh795EH790: "EH795/EH790",
        forVariableDisplacementAcCompressor: "for Variable Displacement A/C Compressor",
        controlValve: "Control Valve",
        contact: "Contact"
      }
    },
    
    // Footer
    footer: {
      quickLinks: "Quick Links",
      home: "Home",
      company: "Company",
      products: "Products",
      sustainability: "Sustainability",
      inquiryForm: "Inquiry Form",
      officeHours: "Office Hours",
      mondayFriday: "Monday - Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      closed: "Closed",
      ourCertifications: "Our Certifications",
      allRightsReserved: "All Rights Reserved",
      subsidiaryOf: "A subsidiary of",
      designedBy: "Designed by"
    }
  },
  id: {
    // Header
    header: {
      home: "Beranda",
      company: "Perusahaan",
      sustainability: "Keberlanjutan",
      products: "Produk",
      inquiryForm: "Formulir Inkuiri",
      language: "Bahasa"
    },
    // Home Page
    home: {
      // Hero Section
      scrollDown: "Gulir ke Bawah",
      playFullMovie: "Putar film lengkap",
      
      // Get Started Section
      innovationTitle: "Inovasi dan Keunggulan dalam Manufaktur Presisi.",
      innovationDesc1: "PT Eagle Industry Indonesia adalah bagian dari Eagle Industry Co., Ltd., Jepang, yang telah beroperasi selama puluhan tahun dalam menyediakan komponen berkualitas tinggi untuk berbagai industri. Kami memprioritaskan teknologi canggih, keandalan produk, dan kepuasan pelanggan untuk mendukung kebutuhan pasar global.",
      innovationDesc2: "Dengan fasilitas produksi modern di Indonesia, kami memastikan standar kualitas internasional dan pengiriman tepat waktu untuk memenuhi kebutuhan pelanggan di berbagai sektor.",
      
      // Products Section
      productsTitle: "PRODUK",
      productsDesc: "Kami menyediakan mechanical seal dan berbagai produk mekanikal untuk mobilitas darat, laut dan udara, peralatan pabrik dan peralatan manufaktur semikonduktor.",
      learnMore: "Pelajari Lebih Lanjut",
      searchByCategory: "Cari berdasarkan \nkategori",
      searchByIndustry: "Cari berdasarkan \nIndustri",
      searchByKeyword: "Cari berdasarkan \nkata kunci",
      enterKeywords: "Masukkan kata kunci produk",
      
      // Categories
      mechanicalSeals: "Mechanical Seal",
      lipSeal: "Lip Seal",
      valves: "Katup",
      floatingSeal: "Floating Seal",
      accumulators: "Akuumulator",
      waterLubricatedSternTubeSeal: "Water Lubricated Stern Tube Seal",
      waterLubricatedSternTubeBearing: "Water Lubricated Stern Tube Bearing",
      serviceEngineer: "Service Engineer",
      
      // Industries
      oilGas: "Minyak & Gas",
      machinery: "Mesin",
      automobile: "Otomotif",
      marine: "Maritim",
      
      // Services Section
      ourServices: "Layanan Kami",
      servicesDesc: "Kami menyediakan solusi komprehensif untuk kebutuhan komponen presisi Anda.",
      customManufacturing: "Manufaktur Kustom",
      customManufacturingDesc: "Kami menawarkan solusi manufaktur kustom untuk memenuhi kebutuhan spesifik pelanggan di berbagai industri.",
      technicalSupport: "Dukungan Teknis",
      technicalSupportDesc: "Tim ahli kami menyediakan dukungan teknis untuk memastikan kinerja optimal produk kami.",
      afterSalesService: "Layanan Purnajual",
      afterSalesServiceDesc: "Kami menyediakan layanan purnajual yang andal untuk memastikan kepuasan pelanggan.",
      qualityAssurance: "Jaminan Kualitas",
      qualityAssuranceDesc: "Proses kontrol kualitas yang ketat kami memastikan semua produk memenuhi standar internasional dan spesifikasi pelanggan.",
      researchDevelopment: "Penelitian & Pengembangan",
      researchDevelopmentDesc: "Tim R&D kami terus berinovasi untuk mengembangkan solusi sealing canggih yang mengatasi tantangan industri yang terus berkembang.",
      globalSupplyChain: "Rantai Pasokan Global",
      globalSupplyChainDesc: "Kami mempertahankan jaringan pasokan global yang efisien untuk memastikan pengiriman produk tepat waktu kepada pelanggan di seluruh dunia.",
      readMore: "Baca selengkapnya",
      
      // Features Section
      floatingSeal: "Floating Seal",
      mechanicalSealFeature: "Mechanical Seal",
      lipSealFeature: "Lip Seal",
      rudder: "Kemudi",
      
      floatingSealDesc: "Floating seal presisi untuk aplikasi heavy-duty di lingkungan yang keras.",
      floatingSealFeature1: "Tahanan yang sangat baik terhadap aus dan kondisi operasi ekstrem",
      floatingSealFeature2: "Desain self-lubricating untuk kinerja dan daya tahan yang lebih baik",
      floatingSealFeature3: "Ideal untuk peralatan konstruksi, pertambangan, dan pertanian",
      floatingSealFeature4: "Konfigurasi yang dapat disesuaikan untuk memenuhi kebutuhan aplikasi spesifik",
      
      mechanicalSealDesc: "Mechanical seal kinerja tinggi yang dirancang untuk aplikasi industri yang menuntut.",
      mechanicalSealFeature1: "Direkayasa untuk daya tahan superior dan masa pakai yang diperpanjang",
      mechanicalSealFeature2: "Cocok untuk lingkungan tekanan tinggi dan suhu tinggi",
      mechanicalSealFeature3: "Tersedia dalam berbagai bahan untuk mencocokkan persyaratan aplikasi spesifik",
      
      lipSealFeature1: "Segelan berkualitas tinggi untuk aplikasi rotari dan resiprokal",
      lipSealFeature2: "Tersedia dalam berbagai bahan termasuk NBR, FKM, dan PTFE",
      lipSealFeature3: "Dirancang untuk mencegah kebocoran cairan dan kontaminasi",
      lipSealDesc: "Lip seal andal untuk aplikasi otomotif, industri, dan maritim.",
      
      rudderDesc: "Rudder seal canggih untuk kapal laut memastikan kinerja kemudi yang optimal.",
      rudderFeature1: "Direkayasa untuk daya tahan maksimal di lingkungan maritim",
      rudderFeature2: "Tahanan yang superior terhadap korosi dan kondisi air laut",
      rudderFeature3: "Dirancang untuk menjaga manuverabilitas dan keselamatan kapal"
    },
    
    // Company Page
    company: {
      pageTitle: "Tentang Perusahaan Eagle Industry Indonesia",
      breadcrumbHome: "Beranda",
      breadcrumbCompany: "Perusahaan",
      title: "PT Eagle Industry Indonesia",
      establishedSince: "Berdiri Sejak 1990",
      ourHistory: "Sejarah Kami",
      historyDesc1: "PT Eagle Industry Indonesia adalah bagian dari Eagle Industry Co., Ltd., perusahaan global yang berbasis di Jepang yang dikenal sebagai pemimpin dalam manufaktur komponen otomotif dan industri. Didirikan di Indonesia pada tahun 1990, kami fokus pada produksi mechanical seal, rubber bellows, dan komponen presisi lainnya yang digunakan di berbagai industri, termasuk otomotif, dirgantara, dan peralatan industri. Dengan komitmen pada kualitas dan inovasi, kami terus tumbuh untuk memenuhi kebutuhan pelanggan di seluruh dunia.",
      historyDesc2: "Kami percaya bahwa kesuksesan kami dibangun di atas dedikasi tim kami dan kepercayaan pelanggan. Dengan fasilitas produksi modern dan tim profesional, PT Eagle Industry Indonesia siap menjadi mitra tepercaya Anda.",
      qualityFeature: "Memproduksi komponen otomotif berkualitas tinggi dengan standar internasional.",
      innovationFeature: "Memprioritaskan inovasi teknologi dalam setiap proses produksi.",
      sustainabilityFeature: "Berkomitmen pada keberlanjutan dan tanggung jawab sosial perusahaan.",
      watchVideo: "Tonton Video",
      
      ourStatistics: "Statistik Kami",
      statisticsDesc: "Kami bangga dengan pencapaian kami dalam menyediakan solusi terbaik untuk pelanggan dan mendukung pertumbuhan industri.",
      globalCustomers: "Pelanggan Global",
      millionProducts: "Juta Produk Diproduksi",
      yearsExcellence: "Tahun Keunggulan",
      dedicatedEmployees: "Karyawan Dedikasi",
      
      managementMessage: "Pesan Manajemen",
      managementDesc1: "Perusahaan kami awalnya dibentuk sebagai divisi mechanical seal dari NOK Corporation. Divisi tersebut menjadi independen dan didirikan dengan nama Nippon Sealol Co., Ltd. pada tahun 1964, tahun Olimpiade Tokyo, dan nama perusahaan diubah menjadi Eagle Industry Co., Ltd. (EKK) saat ini pada tahun 1978.",
      managementDesc2: "Sejak memulai perjalanan panjang ini, selama setengah abad EKK telah tumbuh sebagai penyedia solusi sealing. Kami telah menjadikan diri kami sebagai produsen suku cadang komprehensif dalam mengejar mobilitas di darat, laut dan di langit, serta produsen mechanical seal yang menawarkan produk merek EagleBurgmann dalam aliansi dengan Burgmann Industries, produsen mechanical seal Jerman.",
      managementDesc3: "Produk EKK digunakan dalam spektrum mobilitas yang luas di darat, laut dan di langit. Mereka termasuk mobil, sepeda motor, mesin konstruksi, dan lainnya yang disebut \"kendaraan bergerak berbasis darat,\" tanker, kapal kontainer, kapal pengangkut curah dan kapal laut lainnya, serta feri, kapal pesisir, dan perahu nelayan, roket, pesawat jet dan baling-baling, serta helikopter.",
      managementDesc4: "Produk EagleBurgmann juga digunakan dalam pompa, kompresor, blower, dan agitator yang dipasang di fasilitas produksi di kilang minyak, serta di petrokimia, baja, pulp dan kertas, makanan, farmasi, tenaga listrik, dan banyak industri lainnya.",
      managementDesc5: "Di mana pun mereka digunakan, satu tujuan umum dari semua produk kami adalah mencegah cairan, gas dan fluida lainnya bocor dari mesin berputar selama operasi, dan untuk alasan ini kami dapat dengan bangga mengatakan bahwa bersama dengan pelanggan kami kami telah berkontribusi pada perlindungan lingkungan dan konservasi energi. Kami juga telah mengembangkan sistem produksi terintegrasi yang mencakup seluruh proses dari pengembangan bahan hingga produksi.",
      managementDesc6: "Sistem ini dibangun di sekitar teknologi seal, transmisi daya, katup dan hidrolik superior kami, serta teknik pemrosesan dan pengelasan khusus yang mendukungnya. Dengan itu, kami memenuhi persyaratan pelanggan, yang semakin menuntut saat mesin berputar beroperasi pada kecepatan, suhu, dan tekanan yang lebih tinggi.",
      managementDesc7: "Kami akan terus mengasah keahlian teknologi kami untuk memenuhi kebutuhan pelanggan yang semakin khusus dan kompleks.",
      
      managingDirectorMessage: "Pesan Direktur Pengelola",
      managingDirectorDesc1: "PT Eagle Industry Indonesia didirikan pada tahun 1990 sebagai bagian dari strategi ekspansi global Eagle Industry Co., Ltd. Terletak di EJIP Industrial Park, Cikarang, fasilitas kami mewakili komitmen Eagle Industry terhadap pasar Asia Tenggara yang berkembang.",
      managingDirectorDesc2: "Operasi Indonesia kami berspesialisasi dalam manufaktur mechanical seal presisi tinggi, rubber bellows, dan komponen sealing untuk aplikasi otomotif, industri, dan maritim. Kami melayani pasar domestik dan internasional, dengan fokus pada kualitas yang memenuhi standar manufaktur Jepang.",
      managingDirectorDesc3: "Sejak pendirian kami, kami telah membangun hubungan kuat dengan produsen otomotif utama dan perusahaan industri di Indonesia dan di seluruh wilayah. Komitmen kami pada keunggulan telah membuat kami diakui sebagai pemasok solusi sealing kritis yang andal.",
      managingDirectorDesc4: "Kami terus berinvestasi dalam teknologi dan pengembangan sumber daya manusia untuk memastikan kami memenuhi kebutuhan pelanggan yang terus berkembang. Tim kami yang terdiri dari insinyur dan teknisi terampil bekerja dengan rajin untuk mempertahankan standar kualitas dan inovasi tertinggi yang Eagle Industry kenal di seluruh dunia.",
      managingDirectorDesc5: "Kami bersyukur atas kepercayaan yang pelanggan berikan kepada kami dan tetap berdedikasi untuk berkontribusi pada pembangunan industri Indonesia melalui produk dan layanan kami.",
      
      qualityExcellence: "Keunggulan Kualitas",
      qualityExcellenceDesc: "Mempertahankan standar kualitas Jepang dalam semua proses dan produk manufaktur kami",
      technicalInnovation: "Inovasi Teknis",
      technicalInnovationDesc: "Terus mengembangkan solusi sealing canggih untuk aplikasi yang menuntut",
      customerFocus: "Fokus Pelanggan",
      customerFocusDesc: "Membangun kemitraan jangka panjang melalui keandalan dan layanan luar biasa",
      sustainableGrowth: "Pertumbuhan Berkelanjutan",
      sustainableGrowthDesc: "Berkontribusi pada perlindungan lingkungan melalui teknologi sealing yang efisien",
      
      ourHistoryTitle: "Sejarah Kami",
      historyTitleDesc: "Perjalanan PT Eagle Industry Indonesia sebagai bagian dari Eagle Industry Co., Ltd., pemimpin global dalam teknologi sealing dan komponen presisi.",
      originEstablishment: "Asal dan Pendirian",
      originDesc1: "PT Eagle Industry Indonesia didirikan pada tahun 1990 sebagai cabang dari Eagle Industry Co., Ltd., perusahaan Jepang yang berasal dari divisi mechanical seal NOK Corporation. Divisi tersebut menjadi independen pada tahun 1964 dengan nama Nippon Sealol Co., Ltd., dan mengubah namanya menjadi Eagle Industry Co., Ltd. pada tahun 1978.",
      originDesc2: "Di Indonesia, kami memulai operasi di EJIP Industrial Park, Cikarang, dengan fokus pada produksi mechanical seal, rubber bellows, dan komponen presisi untuk industri otomotif, dirgantara, dan peralatan industri.",
      
      growthInnovation: "Pertumbuhan dan Inovasi",
      growthDesc1: "Sejak pendirian kami, kami telah tumbuh pesat dengan mengadopsi teknologi canggih dari Jepang. Pada tahun 2000-an, kami memperluas fasilitas produksi untuk memenuhi permintaan global, termasuk aliansi dengan Burgmann Industries untuk produk EagleBurgmann.",
      growthDesc2: "Kami mengembangkan sistem produksi terintegrasi dari pengembangan material hingga produksi akhir, mendukung kebutuhan mesin berputar kecepatan tinggi, suhu tinggi, dan tekanan tinggi.",
      factoryExpansion: "Ekspansi pabrik pada tahun 2010 untuk meningkatkan kapasitas.",
      qualityStandards: "Implementasi standar kualitas internasional seperti ISO 9001 dan IATF 16949.",
      envProtection: "Kontribusi pada perlindungan lingkungan melalui pencegahan kebocoran fluida.",
      
      presentFuture: "Sekarang dan Masa Depan",
      presentDesc1: "Hingga saat ini, PT Eagle Industry Indonesia telah melayani ratusan klien di berbagai sektor, dengan komitmen pada inovasi, keberlanjutan, dan tanggung jawab sosial. Kami terus mengasah kemampuan teknologi kami untuk memenuhi kebutuhan pelanggan yang semakin kompleks.",
      presentDesc2: "Di masa depan, kami bertujuan untuk menjadi pemimpin dalam solusi mobilitas di darat, laut, dan udara, sambil mendukung konservasi energi dan perlindungan lingkungan.",
      watchHistoryVideo: "Tonton Video Sejarah",
      
      companyOverview: "Ikhtisar Perusahaan",
      companyOverviewDesc: "Informasi tentang PT Eagle Industry Indonesia, bagian dari Eagle Industry Co., Ltd., yang didedikasikan untuk menyediakan solusi sealing dan komponen presisi berkualitas tinggi.",
      name: "Nama",
      established: "Didirikan",
      representative: "Wakil",
      headquarters: "Kantor Pusat",
      paidInCapital: "Modal Disetor",
      numberOfEmployees: "Jumlah Karyawan",
      businessOutline: "Rincian Bisnis",
      publicAuditingFirm: "Kantor Akuntan Publik"
    },
    
    // Sustainability Page
    sustainability: {
      pageTitle: "Keberlanjutan",
      breadcrumbHome: "Beranda",
      breadcrumbSustainability: "Keberlanjutan",
      title: "Keberlanjutan",
      conceptsTitle: "Konsep Keberlanjutan Kami",
      conceptsSubtitle: "Menciptakan masa depan yang berkelanjutan melalui inovasi dan tanggung jawab",
      visionTitle: "Visi Keberlanjutan Eagle Industry",
      visionDesc1: "Di Eagle Industry Indonesia, kami percaya bahwa perusahaan tidak hanya milik pemegang saham tetapi juga karyawan dan masyarakat. Filosofi ini telah lama meresap ke setiap aspek manajemen Grup EKK sejak pendirian kami pada tahun 1990.",
      visionDesc2: "Sebagai bagian dari Eagle Industry Co., Ltd., pemimpin global dalam solusi sealing, kami berkontribusi pada perlindungan lingkungan melalui bisnis inti kami. Mechanical seal kami mencegah gas, minyak, dan fluida lainnya bocor dari mesin, secara langsung membantu melestarikan lingkungan dan mencegah polusi.",
      corePrinciples: "Prinsip Inti Kami:",
      principle1: "Perlindungan lingkungan melalui teknologi pencegahan kebocoran",
      principle2: "Membangun kepercayaan melalui dialog dengan semua pemangku kepentingan",
      principle3: "Menciptakan keuntungan yang adil yang mendukung pertumbuhan abadi",
      principle4: "Mengembangkan produk yang mengatasi masalah regulasi lingkungan",
      learnMoreConcept: "Pelajari Lebih Lanjut Tentang Konsep Keberlanjutan Kami",
      
      esgTitle: "Inisiatif ESG",
      esgSubtitle: "Memperkuat kerangka Kerja Lingkungan, Sosial, dan Tata Kelola kami",
      environmentalTitle: "Inisiatif Lingkungan",
      environmentalDesc: "Kegiatan pelestarian lingkungan yang komprehensif sesuai dengan kebijakan lingkungan dan sertifikasi ISO 14001 kami.",
      environmentalFeature1: "Manajemen sumber daya air",
      environmentalFeature2: "Mitigasi pemanasan global",
      environmentalFeature3: "Pengurangan limbah industri",
      
      climateTitle: "Pengungkapan Perubahan Iklim",
      climateDesc: "Pengungkapan keuangan terkait iklim yang selaras dengan TCFD yang mengatasi risiko dan peluang perubahan iklim.",
      climateFeature1: "Kerangka tata kelola",
      climateFeature2: "Strategi iklim",
      climateFeature3: "Manajemen risiko",
      
      healthTitle: "Kesehatan & Keselamatan Kerja",
      healthDesc: "Sistem manajemen K3 yang komprehensif memastikan keselamatan tempat kerja dan kesejahteraan karyawan.",
      healthFeature1: "Sistem manajemen keselamatan",
      healthFeature2: "Program promosi kesehatan",
      healthFeature3: "Pelatihan dan pendidikan keselamatan",
      
      socialTitle: "Kontribusi Media Sosial",
      socialDesc: "Memanfaatkan platform sosial untuk mempromosikan kesadaran keberlanjutan dan keterlibatan pemangku kepentingan.",
      socialFeature1: "Kampanye kesadaran keberlanjutan",
      socialFeature2: "Transparansi kinerja ESG",
      socialFeature3: "Keterlibatan komunitas",
      
      learnMore: "Pelajari Lebih Lanjut",
      
      ctaTitle: "Bergabunglah dalam Perjalanan Keberlanjutan Kami",
      ctaDesc: "Kami berkomitmen untuk menciptakan nilai berkelanjutan bagi semua pemangku kepentingan kami. Bersama, kita dapat membangun masa depan yang lebih berkelanjutan melalui inovasi, tanggung jawab, dan kolaborasi.",
      contactUs: "Hubungi Kami"
    },
    
    // Contact Page
    contact: {
      pageTitle: "Formulir Inkuiri",
      breadcrumbHome: "Beranda",
      breadcrumbContact: "Formulir Inkuiri",
      title: "Formulir Inkuiri",
      address: "Alamat",
      addressDetails: "EJIP Industrial Park, Plot 8G, Sukaresmi, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17550",
      callUs: "Hubungi Kami",
      phoneNumber: "(021) 8970178",
      emailUs: "Email Kami",
      emailAddress: "shinta.maharani@ekkeagle.com",
      yourName: "Nama Anda",
      yourEmail: "Email Anda",
      subject: "Subjek",
      message: "Pesan",
      sending: "Mengirim...",
      sendMessage: "Kirim Pesan",
      loading: "Memuat",
      successMessage: "Pesan Anda telah disimpan dan email terkirim (email konfirmasi terkirim ke pengguna). Terima kasih!",
      errorMessage: "Gagal mengirim pesan",
      errorSending: "Error mengirim pesan. Silakan coba lagi.",
      successAlert: "Berhasil! Inkuiri Anda telah berhasil dikirim.",
      errorAlert: "Error: "
    },
    
    // Products Page
    products: {
      pageTitle: "Produk",
      breadcrumbHome: "Beranda",
      breadcrumbProducts: "Produk",
      title: "Produk",
      description: "Jelajahi berbagai solusi segel berkualitas tinggi dan komponen presisi yang dirancang untuk aplikasi otomotif, maritim, dirgantara, dan industri umum.",
      searchByCategory: "Cari berdasarkan \nkategori",
      searchByIndustry: "Cari berdasarkan \nIndustri",
      searchByKeyword: "Cari berdasarkan \nkata kunci",
      enterKeywords: "Masukkan kata kunci produk",
      allProducts: "Semua Produk",
      allIndustries: "Semua Industri",
      items: "item",
      showingProductsFor: "Menampilkan produk untuk:",
      category: "Kategori",
      industry: "Industri",
      keyword: "Kata Kunci",
      noProductsFound: "Tidak ada produk yang ditemukan",
      noProductsDescription: "Tidak ada produk yang tersedia untuk filter yang dipilih.",
      inquireNow: "Tanya Sekarang",
      viewDetails: "Lihat Detail",
      
      // Categories
      mechanicalSeals: "Mechanical Seal",
      lipSeal: "Lip Seal",
      valves: "Katup",
      floatingSeal: "Floating Seal",
      accumulators: "Akuumulator",
      waterLubricatedSternTubeSeal: "Water Lubricated Stern Tube Seal",
      waterLubricatedSternTubeBearing: "Water Lubricated Stern Tube Bearing",
      serviceEngineer: "Service Engineer",
      
      // Industries
      oilGas: "Minyak & Gas",
      machinery: "Mesin",
      automobile: "Otomotif",
      marine: "Maritim",
      semiconductor: "Semikonduktor",
      
      // Product Names
      eh795: "EH795 EH790 untuk Water Pump",
      eh795Desc: "Mampu untuk rotasi kecepatan tinggi. Produksi massal dengan jalur perakitan otomatis penuh dan dipasok ke pembuat water pump di seluruh dunia. Dengan desain unitnya, EH795 mendukung instalasi yang mudah ke aplikasi pelanggan.",
      lipSealAc: "Lip Seal Untuk Kompresor A/C",
      lipSealAcDesc: "Segel poros berputar yang dirancang khusus untuk kompresor AC mobil. Desain asli Eagle Industry yang menampilkan kompak dan keandalan tinggi. Membantu menghilangkan kebocoran CFC yang menyebabkan pemanasan global.",
      reedValve: "Reed Valve",
      reedValveDesc: "Dirancang untuk mesin sepeda motor empat tak untuk kontrol emisi. Secara substansial mengurangi emisi karbon monoksida dan hidrokarbon untuk mengurangi polusi udara.",
      airCutValve: "Air Cut Valve",
      airCutValveDesc: "Katup kontrol untuk kompresor A/C perpindahan variabel. Mengontrol sudut swash plate untuk menyesuaikan perpindahan kompresor sesuai dengan beban A/C untuk ekonomi bahan bakar yang lebih baik.",
      floatingSeal: "Floating Seal",
      floatingSealDesc: "Segel untuk undercarriage mesin konstruksi. Struktur sederhana yang terdiri dari O-ring dan cincin segel yang terbuat dari besi cor khusus. Segel optimum untuk undercarriage bulldozer dan ekskavator hidrolik.",
      superiorORing: "SUPERIOR O-Ring",
      superiorORingDesc: "Material O-Ring yang baru dikembangkan dengan resistensi kimia yang lebih baik, generasi outgas rendah, dan resistensi panas ringan untuk industri proses semikonduktor.",
      bladderAccumulator: "Akuumulator Tipe Bladder",
      bladderAccumulatorDesc: "Akuumulator bladder standar ini diproduksi berdasarkan pengalaman bertahun-tahun dan kinerja yang terbukti.",
      evk2rv: "Water Lubricated Stern Tube Seal - EVK2RV",
      evk2rvDesc: "Segel pelumas air yang kompak, berkinerja tinggi yang memiliki resistensi getaran dan kinerja penyegelan yang sangat baik. Segel tipe EVK adalah yang termudah dari segel di pasar untuk instalasi dan operasi.",
      evk2rt: "Water Lubricated Stern Tube Seal - EVK2RT",
      evk2rtDesc: "Segel pelumas air yang kompak, berkinerja tinggi yang memiliki resistensi getaran dan kinerja penyegelan yang sangat baik. Segel tipe EVK adalah yang termudah dari segel di pasar untuk instalasi dan operasi.",
      mas: "Marine Ace Seal (MAS)",
      masDesc: "Segel stern pelumas air untuk kapal kecil dengan sistem penggerak langsung. Fitur struktur segel end-face untuk kinerja penyegelan yang sangat baik.",
      rudderSeal: "Rudder Seal",
      rudderSealDesc: "Segel kemudi dengan lip seal yang dirancang untuk mencegah kebocoran pelumas dan masuknya air laut. Disetujui oleh masyarakat klasifikasi dengan beberapa jenis tersedia.",
      evr: "Water Lubricated Stern Tube Bearing - EVR",
      evrDesc: "Daya Tahan dan Penyerapan Getaran yang Sangat Baik. Dirancang khusus untuk aplikasi maritim dengan sistem poros pelumas air.",
      evu: "Water Lubricated Stern Tube Bearing - EVU",
      evuDesc: "Bantalan Poly-Urethane yang dikembangkan untuk sistem stern tube pelumas air berdasarkan teknologi dan pengalaman bantalan pelumas air yang luas kami.",
      serviceEngineer: "Service Engineer",
      serviceEngineerDesc: "Layanan teknik profesional untuk sistem segel kapal Anda. Kami menyediakan service engineer yang terampil dan berpengalaman untuk menangani semua aspek segel maritim."
    },
    
    // Product Details Pages
    productDetails: {
      // Common translations
      products: "PRODUK",
      home: "Beranda",
      productBreadcrumb: "Produk",
      inquireAboutProduct: "Tanya Tentang Produk Ini",
      contactUs: "Hubungi Kami",
      contactViaEmail: "Silakan hubungi kami melalui formulir email kami",
      relatedProducts: "Produk Terkait",
      exploreSimilarProducts: "Jelajahi produk serupa lainnya",
      toProductsTop: "Ke Halaman Produk",
      productSpecification: "Contoh spesifikasi produk",
      specificationInfo: "Informasi tentang spesifikasi Produk.",
      noteText: "Catatan: Angka di atas menunjukkan kondisi terbaik dalam kasus individual dan mungkin berbeda sesuai dengan ukuran katup dan aplikasi. Hubungi kami sebelum menggunakan.",
      productInformation: "Informasi Produk",
      productFeatures: "Fitur Produk",
      category: "Kategori",
      application: "Aplikasi",
      function: "Fungsi",
      operatingTemperature: "Suhu Operasional",
      material: "Material",
      applications: "Aplikasi",
      type: "Tipe",
      temperatureRange: "Rentang Suhu",
      maxPressure: "Tekanan Maks",
      volumeRange: "Rentang Volume",
      sealedFluid: "Cairan yang disegel",
      temperature: "Suhu",
      maximumCircumferentialVelocity: "Kecepatan sirkumferensial maksimum",
      pressure: "Tekanan",
      shaftDiameter: "Diameter poros",
      benefits: "Manfaat",
      improvedFuelEconomy: "Ekonomi bahan bakar yang lebih baik",
      reducedEmissions: "Emisi yang lebih rendah",
      enhancedACSystemEfficiency: "Efisiensi sistem AC yang lebih baik",
      highEnergyStorageCapacity: "Kapasitas penyimpanan energi tinggi",
      excellentResponseTime: "Waktu respons yang sangat baik",
      lowGasPermeability: "Permeabilitas gas rendah",
      easyMaintenance: "Perawatan mudah",
      longServiceLife: "Masa pakai yang panjang",
      wideTemperatureRange: "Rentang suhu yang luas",
      energyStorageInHydraulicSystems: "Penyimpanan energi dalam sistem hidrolik",
      shockAbsorption: "Penyerapan guncangan",
      pulsationDampening: "Redam pulsasi",
      emergencyPowerSupply: "Pasokan daya darurat",
      // Additional keys for serviceEngineer-details.js
      serviceType: "Tipe Layanan",
      serviceArea: "Area Layanan",
      responseTime: "Waktu Respon",
      serviceAvailability: "Ketersediaan Layanan",
      specialization: "Spesialisasi",
      serviceCenters: "Pusat Layanan",
      
      // Air Cut Valve
      airCutValve: {
        title: "Air Cut Valve",
        breadcrumb: "Air Cut Valve",
        description1: "Katup kontrol untuk kompresor A/C perpindahan variabel. Katup ini mengontrol sudut swash plate kompresor untuk menyesuaikan perpindahan kompresor sesuai dengan beban A/C.",
        description2: "Air Cut Valve dirancang dengan presisi untuk memberikan kinerja optimal dalam sistem AC otomotif. Dengan material canggih dan desain inovatif, katup ini memastikan efisiensi maksimal dalam mengontrol perpindahan kompresor sesuai dengan beban A/C, menghasilkan ekonomi bahan bakar yang lebih baik dan emisi yang lebih rendah.",
        description3: "Air Cut Valve kami menjalani proses kontrol kualitas yang ketat untuk memenuhi standar internasional untuk komponen otomotif. Material khusus yang digunakan dalam manufaktur menawarkan resistensi yang sangat baik terhadap berbagai refrigeran dan oli kompresor, memastikan masa pakai yang panjang bahkan dalam kondisi operasional yang ekstrem.",
        categoryValue: "Otomotif, Kompresor AC Mobil",
        applicationValue: "Kompresor A/C Perpindahan Variabel",
        functionValue: "Mengontrol sudut swash plate untuk menyesuaikan perpindahan kompresor",
        operatingTemperatureValue: "-40 hingga 150°C",
        materialValue: "Baja tahan karat kelas tinggi dan komponen khusus",
        applicationsValue: "Kompresor AC otomotif untuk kendaraan penumpang dan komersial"
      },
      
      // Bladder Type Accumulator
      bladderAccumulator: {
        title: "Akuumulator Tipe Bladder",
        breadcrumb: "Akuumulator Tipe Bladder",
        description1: "Akuumulator bladder standar ini diproduksi berdasarkan pengalaman bertahun-tahun dan kinerja yang terbukti. Mereka dirancang untuk menyimpan energi di bawah tekanan dalam bentuk gas terkompresi, menyediakan daya hidrolik saat dibutuhkan dalam berbagai aplikasi industri.",
        description2: "Akuumulator bladder terdiri dari bejana tekanan kekuatan tinggi yang mengandung bladder elastis yang memisahkan cairan hidrolik dari gas pra-isi. Ketika cairan hidrolik masuk ke akuumulator, bladder mengompres gas, menyimpan energi. Ketika sistem membutuhkan daya tambahan, gas terkompresi memuai, mendorong cairan kembali ke sistem.",
        description3: "Akuumulator tipe bladder Eagle Industry Indonesia menampilkan konstruksi superior dengan material berkualitas tinggi memastikan daya tahan dan keandalan di lingkungan industri yang menuntut. Akuumulator ini cocok untuk aplikasi yang membutuhkan penyimpanan energi, penyerapan guncangan, redam pulsasi, dan pasokan daya darurat.",
        categoryValue: "Industri, Komponen Hidrolik",
        typeValue: "Akuumulator Tipe Bladder",
        materialValue: "Cangkang Baja Kelas Tinggi, Bladder Nitrile",
        temperatureRangeValue: "-20°C hingga 120°C",
        maxPressureValue: "Hingga 350 bar",
        volumeRangeValue: "0,5 hingga 50 liter",
        applicationsValue: "Sistem Hidrolik"
      },
      
      // EH795/EH790 for Water Pump
      eh795: {
        title: "EH795/EH790 untuk Water Pump",
        breadcrumb: "EH795/EH790 untuk Water Pump",
        description1: "Mampu untuk rotasi kecepatan tinggi. Produksi massal dengan jalur perakitan otomatis penuh dan dipasok ke pembuat water pump di seluruh dunia. Dengan desain unitnya, EH795 mendukung instalasi yang mudah ke aplikasi pelanggan.",
        description2: "Segel ini cocok untuk rotasi kecepatan tinggi karena konstruksinya yang sederhana dan kompak. Material permukaan segel adalah komponen karbon dan SiC milik Eagle Industry yang memberikan resistensi tinggi terhadap panas, aus dan korosi. Segel ini diproduksi oleh jalur perakitan otomatis penuh di situs produksi global kami, dan memiliki pangsa pasar tinggi di seluruh dunia khususnya dalam kategori segel untuk water pump otomotif. Segel ini juga cocok untuk pompa industri. EH795: Komponen rotasi dan stasioner disatukan dengan sleeve stamped, memberikan kemudahan instalasi serta keandalan tinggi dengan melindungi permukaan geser.",
        categoryValue: "Mechanical Seal, Water Pump",
        modelValue: "EH795/EH790",
        sealedFluidValue: "Air, Pendingin, dll.",
        temperatureValue: "-20°C hingga 110°C (maks. 120°C)",
        maximumCircumferentialVelocityValue: "12 m/s",
        pressureValue: "-67 kPa hingga 0.3 MPaG",
        shaftDiameterValue: "Hingga 30 mm",
        applicationsValue: "Water pump untuk aplikasi otomotif dan industri"
      },
      
      // EVK2RV - Water Lubricated Stern Tube Seal
      evk2rv: {
        title: "Water Lubricated Stern Tube Seal - EVK2RV",
        breadcrumb: "Water Lubricated Stern Tube Seal - EVK2RV",
        description1: "Segel pelumas air yang kompak, berkinerja tinggi yang memiliki resistensi getaran dan kinerja penyegelan yang sangat baik. Segel tipe EVK adalah yang termudah dari segel di pasar untuk instalasi dan operasi.",
        description2: "EVK2RV dirancang khusus untuk aplikasi maritim di mana pelumasan air lebih disukai daripada sistem pelumasan minyak tradisional. Solusi segel inovatif ini memberikan kinerja superior di lingkungan maritim yang keras while being ramah lingkungan.",
        description3: "Segel pelumas air kami diproduksi dengan rekayasa presisi dan material berkualitas tinggi untuk memastikan operasi yang andal di kondisi maritim. Desain sederhana mengurangi persyaratan perawatan while memperpanjang masa pakai.",
        categoryValue: "Maritim, Segel Pelumas Air",
        typeValue: "Segel Stern Tube Pelumas Air",
        modelValue: "EVK2RV",
        materialValue: "Komponen Kelas Maritim Khusus",
        temperatureRangeValue: "-10°C hingga 80°C",
        maxPressureValue: "Hingga 1.0 MPa",
        applicationsValue: "Kapal Maritim, Kapal, Perahu"
      },
      
      // EVK2RT - Water Lubricated Stern Tube Seal
      evk2rt: {
        title: "Water Lubricated Stern Tube Seal - EVK2RT",
        breadcrumb: "Water Lubricated Stern Tube Seal - EVK2RT",
        description1: "Segel pelumas air yang kompak, berkinerja tinggi yang memiliki resistensi getaran dan kinerja penyegelan yang sangat baik. Segel tipe EVK adalah yang termudah dari segel di pasar untuk instalasi dan operasi.",
        description2: "Varian EVK2RT direkayasa untuk aplikasi maritim spesifik yang membutuhkan daya tahan dan keandalan yang lebih baik. Solusi segel ini memberikan kinerja optimal di berbagai kapal maritim dan kondisi operasional.",
        description3: "Dengan material canggih dan manufaktur presisi, segel EVK2RT kami menawarkan resistensi superior terhadap tantangan lingkungan maritim termasuk korosi, aus, dan getaran.",
        spareRingActivation: "Cincin cadangan dapat diaktifkan dengan mudah tanpa membongkar.",
        featuresDescription1: "Fitur aktivasi cincin cadangan cepat untuk downtime minimal dalam operasi maritim. EVK2RT dirancang untuk memberikan kinerja penyegelan yang andal dalam aplikasi stern tube pelumas air, memastikan perlindungan optimal terhadap masuknya air dan kebocoran oli.",
        featuresDescription2: "Segel EVK2RT kami diproduksi dengan material berkualitas tinggi yang menawarkan resistensi yang sangat baik terhadap lingkungan maritim. Desain inovatif memungkinkan perawatan yang mudah dan masa pakai yang diperpanjang, mengurangi biaya operasional dan downtime kapal. Mekanisme aktivasi cincin cadangan yang sederhana memungkinkan penggantian cepat tanpa perlu pembongkaran lengkap, menjadikannya solusi ideal untuk kapal maritim yang membutuhkan interval perawatan minimal.",
        productInformation: "Informasi Produk",
        category: "Kategori",
        industry: "Industri",
        application: "Aplikasi",
        keyFeature: "Fitur Utama",
        material: "Material",
        benefits: "Manfaat",
        categoryValue: "Segel Maritim",
        industryValue: "Maritim",
        applicationValue: "Stern Tube",
        keyFeatureValue: "Aktivasi cincin cadangan cepat tanpa pembongkaran",
        materialValue: "Komponen tahan maritim kelas tinggi",
        benefitsValue: "Downtime minimal, perawatan mudah",
        typeValue: "Segel Stern Tube Pelumas Air",
        modelValue: "EVK2RT",
        temperatureRangeValue: "-10°C hingga 90°C",
        maxPressureValue: "Hingga 1.2 MPa",
        applicationsValue: "Kapal Maritim Komersial, Kapal Industri"
      },
      
      // EVR - Water Lubricated Stern Tube Bearing
      evr: {
        title: "Water Lubricated Stern Tube Bearing - EVR",
        breadcrumb: "Water Lubricated Stern Tube Bearing - EVR",
        description1: "Daya Tahan dan Penyerapan Getaran yang Sangat Baik. Dirancang khusus untuk aplikasi maritim dengan sistem poros pelumas air.",
        description2: "Sistem bantalan EVR memberikan kinerja superior di lingkungan maritim di mana pelumasan air lebih disukai. Solusi bantalan ini menawarkan karakteristik daya tahan dan penyerapan getaran yang sangat baik.",
        description3: "Bantalan pelumas air kami direkayasa dengan material canggih yang memberikan kinerja optimal di kondisi maritim. Desain memastikan operasi yang halus dan masa pakai yang diperpanjang.",
        categoryValue: "Maritim, Bantalan Pelumas Air",
        typeValue: "Bantalan Stern Tube Pelumas Air",
        modelValue: "EVR",
        materialValue: "Material Bantalan Pelumas Air Khusus",
        temperatureRangeValue: "-5°C hingga 70°C",
        maxPressureValue: "Hingga 2.0 MPa",
        applicationsValue: "Sistem Propulsi Maritim, Poros Pelumas Air"
      },
      
      // EVU - Water Lubricated Stern Tube Bearing
      evu: {
        title: "Water Lubricated Stern Tube Bearing - EVU",
        breadcrumb: "Water Lubricated Stern Tube Bearing - EVU",
        description1: "Bantalan Poly-Urethane yang dikembangkan untuk sistem stern tube pelumas air berdasarkan teknologi dan pengalaman bantalan pelumas air yang luas kami.",
        description2: "Bantalan EVU memanfaatkan material poluretan canggih yang dirumuskan khusus untuk aplikasi pelumasan air. Material inovatif ini memberikan karakteristik kinerja yang sangat baik di lingkungan maritim.",
        description3: "Dengan pengalaman luas kami dalam teknologi pelumasan air, sistem bantalan EVU menawarkan daya tahan dan keandalan yang superior. Konstruksi poluretan memberikan resistensi aus yang sangat baik dan masa pakai yang panjang.",
        categoryValue: "Maritim, Bantalan Pelumas Air",
        typeValue: "Bantalan Stern Tube Pelumas Air",
        modelValue: "EVU",
        materialValue: "Kompon Poly-Urethane",
        temperatureRangeValue: "-10°C hingga 60°C",
        maxPressureValue: "Hingga 1.5 MPa",
        applicationsValue: "Kapal Maritim, Sistem Propulsi Pelumas Air"
      },
      
      // EVU Valve Stem Seal
      evuValveStemSeal: {
        title: "EVU Valve Stem Seal",
        breadcrumb: "EVU Valve Stem Seal",
        description1: "EVU valve stem seals dirancang untuk memberikan kinerja penyegelan yang sangat baik untuk aplikasi katup mesin. Segel ini mencegah oli masuk ke ruang bakar melalui panduan katup sambil memungkinkan pelumasan yang tepat dari batang katup.",
        description2: "Diproduksi dengan material berkualitas tinggi dan rekayasa presisi, EVU valve stem seals menawarkan daya tahan dan keandalan yang superior. Segel dirancang untuk menahan variasi suhu ekstrem dan kondisi operasi yang keras dalam mesin modern. Proses manufaktur canggih Eagle Industry memastikan kualitas dan kinerja yang konsisten di semua produk EVU.",
        description3: "Seri EVU menampilkan desain kompak yang memungkinkan instalasi dan penggantian yang mudah. Segel ini kompatibel dengan berbagai aplikasi mesin dan memberikan efisiensi penyegelan optimal selama masa pakainya.",
        categoryValue: "Valve Stem Seals",
        modelValue: "Seri EVU",
        materialValue: "Fluoroelastomer Kelas Tinggi",
        temperatureRangeValue: "-40°C hingga 250°C",
        pressureRatingValue: "Hingga 5 MPa",
        applicationsValue: "Sistem Katup Mesin",
        features: {
          excellentOilResistance: "Resistensi oli yang sangat baik",
          superiorHeatResistance: "Resistensi panas yang superior",
          preciseDimensionalControl: "Kontrol dimensi yang presisi",
          enhancedDurability: "Daya tahan yang ditingkatkan"
        },
        noteText: "Catatan: Angka di atas menunjukkan kondisi terbaik dalam kasus individual dan mungkin berbeda sesuai dengan ukuran segel. Hubungi kami sebelum menggunakan."
      },
      
      // Floating Seal
      floatingSeal: {
        title: "Floating Seal ES100 & ES764",
        breadcrumb: "Floating Seal ES100 & ES764",
        description1: "Segel untuk undercarriage mesin konstruksi (track rollers, final drives, axles dan idlers). Struktur sederhana yang terdiri dari O-ring dan cincin segel yang terbuat dari besi cor khusus. Segel optimum untuk undercarriage bulldozer dan ekskavator hidrolik yang sering terkena pasir, kotoran dan benda asing lainnya. ES764 menawarkan kemudahan dalam merancang dan memproduksi housing.",
        description2: "Segel floating adalah produk sederhana, yang terdiri dari dua komponen: cincin segel yang terbuat dari besi cor khusus dan komponen karet (O-ring/gasket). Dalam penggunaan, dua segel identik membentuk sepasang. Cincin segel, yang merupakan komponen sliding, tidak kontak dengan shaft karena ditahan oleh komponen karet, dan karenanya mengikuti gerakan radial dan thrusting shaft dengan erat.",
        description3: "Karena dikembangkan untuk aplikasi slurry, cincin segel terbuat dari material yang sangat keras, tahan aus dan tahan korosi. Komponen karet menekan permukaan sliding cincin segel dan juga berfungsi sebagai segel. Oleh karena itu, terbuat dari material yang sangat tahan terhadap suhu dingin dan panas dengan sedikit set kompresi untuk masa pakai yang lebih lama.",
        description4: "Penggunaan utama segel floating termasuk crawler rollers, travel drives dan idlers mesin konstruksi dan pertanian, dan juga untuk conveyor, mixer dan berbagai mesin penggalian. Dengan kata lain, mereka digunakan secara luas dalam aplikasi kecepatan rendah yang relatif terkena benda asing.",
        categoryValue: "Mesin, Undercarriage",
        sealedFluidValue: "Bagian dalam: pelumas, Bagian luar: pasir, kotoran dan lumpur",
        temperatureValue: "NBR: -40 hingga 100ºC, H-NBR: -30 hingga 130ºC, FKM: -10 hingga 200ºC",
        maximumCircumferentialVelocityValue: "MAKS. 2m/detik",
        pressureValue: "MAKS. 0.2 MPaG",
        shaftDiameterValue: "φ38～φ429mm",
        materialValue: "Cincin segel besi cor khusus, O-ring/gasket karet",
        applicationsValue: "Track rollers, final drives, axles, idlers, conveyor, mixer, mesin penggalian",
        noteText: "Catatan: Angka di atas menunjukkan kondisi terbaik dalam kasus individual dan mungkin berbeda sesuai dengan ukuran segel. Hubungi kami sebelum menggunakan."
      },
      
      // Lip Seal
      lipSeal: {
        title: "Lip Seal Untuk Kompresor A/C",
        breadcrumb: "Lip Seal Untuk Kompresor A/C",
        description1: "Segel poros berputar yang dirancang khusus untuk kompresor AC mobil. Desain asli Eagle Industry yang menampilkan kompak dan keandalan tinggi. Membantu menghilangkan kebocoran CFC yang menyebabkan pemanasan global.",
        description2: "Segel lip kami untuk kompresor A/C direkayasa dengan presisi untuk memberikan kinerja penyegelan optimal dalam sistem AC otomotif. Desain inovatif memastikan keandalan while membantu mencegah kebocoran refrigeran.",
        description3: "Diproduksi dengan material canggih dan proses, segel lip kami menawarkan resistensi yang sangat baik terhadap berbagai refrigeran dan kondisi operasional. Desain kompak memungkinkan instalasi yang mudah dalam berbagai konfigurasi kompresor.",
        categoryValue: "Otomotif, Sistem AC",
        typeValue: "Lip Seal",
        materialValue: "Kompon Elastomer Khusus",
        temperatureRangeValue: "-40°C hingga 150°C",
        maxPressureValue: "Hingga 2.5 MPa",
        applicationsValue: "Kompresor AC Otomotif, Sistem Refrigerasi",
        // Additional keys for lipSeal-details.js
        productTitle: "Lip Seal Untuk Kompresor A/C",
        descriptionParagraph1: "Ini adalah segel poros berputar yang dirancang khusus untuk kompresor AC mobil. Desain asli Eagle Industry yang menampilkan kompak dan keandalan tinggi. Mereka membantu menghilangkan kebocoran CFC yang menyebabkan pemanasan global. Terbuat dari karet yang cocok untuk penyegelan CFC dan oli kulkas. Produksi massal dengan jalur perakitan otomatis penuh dan dipasok ke pembuat kompresor di seluruh dunia.",
        descriptionParagraph2: "Segel lip kami untuk kompresor A/C direkayasa dengan presisi untuk memberikan kinerja penyegelan optimal dalam sistem AC otomotif. Dengan material canggih dan desain inovatif, segel ini memastikan daya tahan dan efisiensi maksimal dalam mencegah kebocoran refrigeran while mempertahankan operasi yang halus dari poros kompresor.",
        descriptionParagraph3: "Segel lip kami menjalani proses kontrol kualitas yang ketat untuk memenuhi standar internasional untuk komponen otomotif. Kompon karet khusus yang digunakan dalam manufaktur menawarkan resistensi yang sangat baik terhadap berbagai refrigeran dan oli kompresor, memastikan masa pakai yang panjang bahkan dalam kondisi operasional yang ekstrem.",
        productInformation: "Informasi Produk",
        category: "Kategori",
        categoryValue: "Otomotif, Kompresor AC Mobil",
        sealedFluid: "Cairan yang disegel",
        sealedFluidValue: "R134a/R1234yf & Oli kompresor",
        operatingTemperature: "Suhu Operasional",
        operatingTemperatureValue: "-40 hingga 150ºC",
        maximumCircumferentialVelocity: "Kecepatan sirkumferensial maksimum",
        maximumCircumferentialVelocityValue: "8 m/s (kira-kira. 10.000 rpm)",
        fluidPressureRange: "Rentang Tekanan Cairan",
        fluidPressureRangeValue: "Saat berputar (ON): 0 hingga 0.7 MPaG, Saat diam (OFF): -760 mmHg hingga 3 MPaG",
        shaftDiameter: "Diameter poros",
        shaftDiameterValue: "12,7 hingga 20 mm",
        material: "Material",
        materialValue: "Kompon karet khusus untuk resistensi CFC",
        applications: "Aplikasi",
        applicationsValue: "Kompresor AC otomotif untuk kendaraan penumpang dan komersial",
        inquireAboutThisProduct: "Tanya Tentang Produk Ini",
        noteText: "Catatan: Angka di atas menunjukkan kondisi terbaik dalam kasus individual dan mungkin berbeda sesuai dengan ukuran segel. Hubungi kami sebelum menggunakan.",
        // Related products
        forAcCompressor: "untuk kompresor A/C",
        typeAMechanicalSeal: "Tipe A Mechanical seal",
        forWaterPump: "untuk Water Pump",
        eh795EH790: "EH795/EH790",
        forVariableDisplacementAcCompressor: "untuk Kompresor A/C Perpindahan Variabel",
        controlValve: "Katup Kontrol",
        contact: "Kontak"
      },
      
      // Marine Ace Seal (MAS)
      mas: {
        title: "Marine Ace Seal (MAS)",
        breadcrumb: "Marine Ace Seal (MAS)",
        description1: "Kami adalah produsen terkemuka perangkat segel poros stern tube di seluruh dunia dengan produk kami dipasang di lebih dari 30.000 kapal dengan tonase kotor 100 atau lebih. Marine Ace Seal (MAS) adalah segel stern pelumas air yang baru kami kembangkan untuk kapal kecil dengan sistem penggerak langsung.",
        description2: "Karena struktur segel end-face yang terdiri dari cincin segel karet dan cincin pasangan baja tahan karat, mampu mengikuti getaran dan perpindahan poros yang kompleks sehingga menunjukkan kinerja penyegelan yang sangat baik. Karena penyegelan dicapai oleh cincin segel yang berputar dengan kecepatan yang sama dengan poros dan struktur wajahnya membuat kontak dengan cincin pasangan stasioner sebagai penghenti, mampu menyerap semua pergerakan aksial.",
        description3: "Diameter dalam perumahan dirancang dengan standar tinggi yang sama seperti bantalan karet sehingga dapat menahan kontak dengan poros. Karena area penyegelan tidak terpapar secara eksternal seperti halnya dengan segel mekanis, mampu menahan 'guncangan mekanis' dengan tingkat tinggi. Ruang instalasi kompak dengan struktur yang hanya memerlukan selang air pendingin untuk disuplai.",
        categoryValue: "Water Lubricated Stern Tube Seal",
        typeValue: "Segel Stern Pelumas Air",
        modelValue: "MAS",
        materialValue: "Material Segel Kelas Maritim",
        temperatureRangeValue: "-5°C hingga 70°C",
        maxPressureValue: "Hingga 0.8 MPa",
        applicationsValue: "Kapal kecil dengan sistem penggerak langsung",
        shaftRange: "Rentang Poros",
        allowablePvValue: "Nilai PV yang Diizinkan",
        pressure: "Tekanan (P)",
        requiredCoolingWater: "Air Pendingin yang Diperlukan",
        coolingWaterTemperature: "Suhu Air Pendingin",
        shaftRotationSpeed: "V (Kecepatan rotasi poros)",
        variesByApplication: "Bervariasi sesuai aplikasi",
        noteText: "Catatan: Angka di atas menunjukkan kondisi terbaik dalam kasus individual dan mungkin berbeda sesuai dengan ukuran segel. Hubungi kami sebelum menggunakan."
      },
      
      // O-Ring
      oRing: {
        title: "SUPERIOR O-Ring",
        breadcrumb: "SUPERIOR O-Ring",
        description1: "Material O-Ring yang baru dikembangkan dengan resistensi kimia yang lebih baik, generasi outgas rendah, dan resistensi panas ringan untuk industri proses semikonduktor.",
        description2: "SUPERIOR O-Ring kami direkayasa khusus untuk aplikasi semikonduktor dan kemurnian tinggi. Formulasi material canggih memberikan resistensi kimia yang sangat baik dan sifat outgassing yang minimal.",
        description3: "Dikembangkan dengan teknologi mutakhir, O-Ring kami menawarkan kinerja superior dalam proses semikonduktor yang menuntut. Material memberikan resistensi yang sangat baik terhadap berbagai kimia while mempertahankan integritas penyegelan.",
        categoryValue: "Semikonduktor, Solusi Penyegelan",
        typeValue: "O-Ring",
        materialValue: "Elastomer Kelas Semikonduktor Canggih",
        temperatureRangeValue: "-50°C hingga 200°C",
        maxPressureValue: "Hingga 10.0 MPa",
        applicationsValue: "Peralatan Proses Semikonduktor, Aplikasi Kemurnian Tinggi",
        // Additional keys for oRing-details.js
        semiconductor: "Semikonduktor",
        semiconductorProcess: "Proses Semikonduktor",
        productTitle: "SUPERIOR O-Ring",
        descriptionParagraph1: "Seri \"SUPERIOR\" yang baru dikembangkan sebagai material O-Ring dengan resistensi kimia yang lebih baik, generasi outgas rendah, dan resistensi panas ringan khusus untuk industri proses semikonduktor.",
        descriptionParagraph2: "FKM dan VMQ untuk berbagai aplikasi dalam proses manufaktur semikonduktor tersedia. O-ring ini memberikan kinerja luar biasa dalam lingkungan semikonduktor yang menuntut di mana presisi dan keandalan sangat kritis.",
        descriptionParagraph3: "Seri SUPERIOR menunjukkan resistensi yang sangat baik untuk plasma dan kimia, menjadikannya ideal untuk kondisi keras yang dihadapi dalam manufaktur semikonduktor. Dengan generasi outgas kecil dan kontinuitas resistensi baik terhadap foto termal yang dihasilkan dalam proses manufaktur semikonduktor, O-ring ini mempertahankan integritas dan kinerja penyegelan bahkan dalam kondisi ekstrem.",
        productInformation: "Informasi Produk",
        category: "Kategori",
        categoryValue: "Packing, Gasket",
        productSeries: "Seri Produk",
        productSeriesValue: "SUPERIOR",
        material: "Material",
        materialValue: "FKM dan VMQ",
        keyFeatures: "Fitur Utama",
        keyFeaturesValue: "Resistensi kimia, Generasi outgas rendah",
        specialProperties: "Properti Khusus",
        specialPropertiesValue: "Resistensi plasma, Resistensi panas ringan",
        applications: "Aplikasi",
        applicationsValue: "Industri proses semikonduktor",
        inquireAboutThisProduct: "Tanya Tentang Produk Ini",
        productFeatures: "Fitur Produk",
        featuresInfo: "Informasi tentang fitur SUPERIOR O-Ring.",
        materialOptions: "Opsi Material",
        materialOptionsValue: "FKM dan VMQ untuk berbagai aplikasi dalam proses manufaktur semikonduktor",
        plasmaResistance: "Resistensi Plasma",
        plasmaResistanceValue: "Resistensi sangat baik untuk plasma",
        chemicalResistance: "Resistensi Kimia",
        chemicalResistanceValue: "Resistensi sangat baik untuk kimia",
        outgasGeneration: "Generasi Outgas",
        outgasGenerationValue: "Generasi outgas kecil",
        photoThermalResistance: "Resistensi Foto Termal",
        photoThermalResistanceValue: "Kontinuitas resistensi baik terhadap foto termal yang dihasilkan dalam proses manufaktur semikonduktor",
        noteText: "Catatan: Seri SUPERIOR dikembangkan khusus untuk aplikasi industri proses semikonduktor dengan resistensi kimia superior dan generasi outgas rendah.",
        // Related products
        forAcCompressor: "untuk kompresor A/C",
        typeAMechanicalSeal: "Tipe A Mechanical seal",
        forWaterPump: "untuk Water Pump",
        eh795EH790: "EH795/EH790",
        forVariableDisplacementAcCompressor: "untuk Kompresor A/C Perpindahan Variabel",
        controlValve: "Katup Kontrol",
        contact: "Kontak"
      },
      
      // Reed Valve
      reedValve: {
        title: "Reed Valve",
        breadcrumb: "Reed Valve",
        description1: "Dirancang untuk digunakan dalam mesin sepeda motor empat tak untuk kontrol emisi (pasokan udara sekunder). Secara substansial mengurangi emisi karbon monoksida (CO) dan hidrokarbon (HC) untuk mengurangi polusi udara.",
        description2: "Reed Valve yang ringkas dan ringan ini dipasang di ruang terbatas memastikan aliran besar. Katup yang sangat responsif untuk mode kecepatan tinggi.",
        description3: "Reed valve kami direkayasa dengan presisi untuk memberikan kinerja optimal dalam mesin sepeda motor. Dengan material canggih dan desain inovatif, katup ini memastikan daya tahan dan efisiensi maksimal dalam mengontrol emisi while mempertahankan operasi mesin yang halus.",
        productTitle: "Reed Valves",
        categoryValue: "Otomotif, Mesin Sepeda Motor",
        applicationValue: "Mesin sepeda motor empat tak",
        functionValue: "Kontrol emisi (pasokan udara sekunder)",
        temperatureRangeValue: "-20 hingga 140°C",
        vibrationDurabilityValue: "20 G pada 200Hz untuk 10^7 siklus",
        materialValue: "Baja tahan karat kelas tinggi",
        applicationsValue: "Sistem kontrol emisi sepeda motor",
        productSpecification: "Contoh Spesifikasi Produk",
        specificationInfo: "Informasi tentang spesifikasi Produk.",
        temperature: "Suhu",
        vibrationDurability: "Daya tahan getaran",
        noteText: "Catatan: Angka di atas menunjukkan beberapa contoh. Hubungi kami ketika Anda mempertimbangkan untuk melakukan pembelian.",
        // Related products
        forAcCompressor: "untuk kompresor A/C",
        typeAMechanicalSeal: "Tipe A Mechanical seal",
        forWaterPump: "untuk Water Pump",
        eh795EH790: "EH795/EH790",
        forVariableDisplacementAcCompressor: "untuk Kompresor A/C Perpindahan Variabel",
        controlValve: "Katup Kontrol",
        contact: "Kontak"
      },
      
      // Rudder Seal
      rudderSeal: {
        title: "Rudder Seal",
        breadcrumb: "Rudder Seal",
        description1: "Rudder Seal diproduksi dengan lip seal berperforma tinggi yang dapat melumasi sendiri, dirancang untuk dipasang di atas bearing kemudi guna mencegah masuknya air laut ke dalam lambung kapal. Terbuat dari karet khusus, segel ini memberikan masa pakai yang panjang tanpa memerlukan penyetelan berkala, beroperasi dengan hambatan yang lebih rendah, serta mengurangi keausan pada shaft atau bearing.",
        productInformation: "Informasi Produk",
        category: "Kategori",
        sealedFluid: "Cairan yang disegel",
        operatingTemperature: "Suhu Operasional",
        maximumCircumferentialVelocity: "Kecepatan sirkumferensial maksimum",
        fluidPressureRange: "Rentang Tekanan Cairan",
        shaftDiameter: "Diameter poros",
        material: "Material",
        applications: "Aplikasi",
        categoryValue: "Kelautan, Segel Kemudi",
        sealedFluidValue: "Berpelumas air laut",
        operatingTemperatureValue: "-20°C hingga 120°C",
        maximumCircumferentialVelocityValue: "15 m/s (kira-kira. 5.000 rpm)",
        fluidPressureRangeValue: "0 hingga 0.5 MPaG",
        shaftDiameterValue: "100 hingga 800 mm",
        materialValue: "Kompon karet khusus untuk seal kapal",
        applicationsValue: "Kapal tug boat, kapal tanker, kapal cargo dll.",
        typesAvailable: "Tipe yang Tersedia",
        cxType: "Tipe CX: Model standar",
        dxType: "Tipe DX: Dengan segel siaga tambahan",
        axType: "Tipe AX: Model bebas polusi",
        evaType: "Tipe EVA: Dilengkapi dengan face seal",
        inquireAboutThisProduct: "Tanya Tentang Produk Ini",
        noteText: "Catatan: Angka di atas menunjukkan kondisi terbaik dalam kasus individual dan mungkin berbeda sesuai dengan ukuran segel. Hubungi kami sebelum menggunakan.",
        // Related products
        forAcCompressor: "untuk kompresor A/C",
        typeAMechanicalSeal: "Tipe A Mechanical seal",
        forWaterPump: "untuk Water Pump",
        eh795EH790: "EH795/EH790",
        forVariableDisplacementAcCompressor: "untuk Kompresor A/C Perpindahan Variabel",
        controlValve: "Katup Kontrol",
        contact: "Kontak"
      },
      
      // Service Engineer
      serviceEngineer: {
        title: "Service Engineer",
        breadcrumb: "Service Engineer",
        description1: "Layanan teknik profesional untuk sistem segel kapal Anda. Kami menyediakan service engineer yang terampil dan berpengalaman untuk menangani semua aspek segel maritim.",
        description2: "Tim rekayasa layanan kami menawarkan dukungan komprehensif untuk sistem segel maritim. Dengan pengalaman luas dan keahlian teknis, kami menyediakan solusi untuk berbagai tantangan penyegelan dalam aplikasi maritim.",
        description3: "Service engineer kami dilatih untuk menangani semua aspek sistem segel maritim, dari instalasi hingga perawatan dan troubleshooting. Kami memastikan kinerja dan keandalan optimal dari solusi penyegelan Anda.",
        categoryValue: "Layanan Maritim, Dukungan Teknis",
        serviceType: "Layanan Teknis Profesional",
        expertise: "Sistem Segel Maritim",
        serviceAreas: "Instalasi, Perawatan, Troubleshooting",
        availability: "Jaringan Layanan Global",
        applicationsValue: "Kapal Maritim, Kapal, Platform Lepas Pantai",
        // Additional keys for serviceEngineer-details.js
        serviceInformation: "Informasi Layanan",
        serviceTypeValue: "Dukungan Teknis & Perawatan",
        serviceAreaValue: "Cakupan Seluruh Dunia",
        responseTimeValue: "24-48 jam (Darurat)",
        serviceAvailabilityValue: "Dukungan 24/7",
        specializationValue: "Sistem Segel Maritim",
        serviceCentersValue: "Jaringan Global",
        contactServiceEngineer: "Hubungi Service Engineer",
        globalServiceNetwork: "Jaringan Layanan Global",
        ourServiceEngineersAvailableWorldwide: "Tim rekayasa layanan kami tersedia di seluruh dunia",
        noteText: "Catatan: Service engineer kami tersedia 24/7 untuk dukungan darurat. Hubungi kami untuk bantuan segera.",
        contactServiceEngineerSection: "Hubungi Service Engineer",
        pleaseContactUsViaOurEmailForm: "Silakan hubungi kami melalui formulir email kami untuk dukungan teknis",
        // Region translations
        asia: "Asia",
        asiaLocations: "Jepang (Tokyo, Kobe, Hiroshima)<br>Cina, Singapura, Taiwan, Korea Selatan<br>Indonesia, Filipina, Thailand, India",
        europe: "Eropa",
        europeLocations: "Inggris, Jerman, Yunani<br>Norwegia, Swedia, Denmark, Finlandia<br>Italia, Prancis, Portugal, Polandia, Belanda<br>Rusia, Bulgaria, Spanyol",
        northAmerica: "Amerika Utara",
        northAmericaLocations: "USA, Kanada, Meksiko, Laut Karibia",
        southAmerica: "Amerika Selatan",
        southAmericaLocations: "Cile, Brasil",
        oceania: "Oseania",
        oceaniaLocations: "Australia",
        middleEast: "Timur Tengah",
        middleEastLocations: "UAE & Teluk",
        // Related products
        forAcCompressor: "untuk kompresor A/C",
        typeAMechanicalSeal: "Tipe A Mechanical seal",
        forWaterPump: "untuk Water Pump",
        eh795EH790: "EH795/EH790",
        forVariableDisplacementAcCompressor: "untuk Kompresor A/C Perpindahan Variabel",
        controlValve: "Katup Kontrol",
        contact: "Kontak"
      }
    },
    
    // Footer
    footer: {
      quickLinks: "Tautan Cepat",
      home: "Beranda",
      company: "Perusahaan",
      products: "Produk",
      sustainability: "Keberlanjutan",
      inquiryForm: "Formulir Inkuiri",
      officeHours: "Jam Kantor",
      mondayFriday: "Senin - Jumat",
      saturday: "Sabtu",
      sunday: "Minggu",
      closed: "Tutup",
      ourCertifications: "Sertifikasi Kami",
      allRightsReserved: "Hak Cipta Dilindungi",
      subsidiaryOf: "Anak perusahaan dari",
      designedBy: "Dirancang oleh"
    }
  }
};

// Create language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'id' : 'en');
  };

  const t = (key) => {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Return the key if translation is not found
        return key;
      }
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;