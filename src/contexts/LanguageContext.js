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
      establishedSince: "Established Since 1996",
      ourHistory: "Our History",
      historyDesc1: "PT Eagle Industry Indonesia is part of Eagle Industry Co., Ltd., a global company based in Japan known as a leader in manufacturing automotive and industrial components. Established in Indonesia in 1996, we focus on producing mechanical seals, rubber bellows, and other precision components used in various industries, including automotive, aerospace, and industrial equipment. With a commitment to quality and innovation, we continue to grow to meet customer needs worldwide.",
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
      managingDirectorDesc1: "PT Eagle Industry Indonesia was established in 1996 as part of Eagle Industry Co., Ltd.'s global expansion strategy. Located in EJIP Industrial Park, Cikarang, our facility represents Eagle Industry's commitment to the growing Southeast Asian market.",
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
      originDesc1: "PT Eagle Industry Indonesia was established in 1996 as a branch of Eagle Industry Co., Ltd., a Japanese company originating from the mechanical seal division of NOK Corporation. This division became independent in 1964 under the name Nippon Sealol Co., Ltd., and changed its name to Eagle Industry Co., Ltd. in 1978.",
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
      visionDesc1: "At Eagle Industry Indonesia, we believe that companies belong to not only their shareholders but also their employees and society. This philosophy has long permeated every aspect of the EKK Group's management since our establishment in 1996.",
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
      emailAddress: "shinta.maharani@ekkeagle.com",
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
      evk2rv: "Water Lubricated Stern Tube Seal - EVK2RV",
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
      establishedSince: "Berdiri Sejak 1996",
      ourHistory: "Sejarah Kami",
      historyDesc1: "PT Eagle Industry Indonesia adalah bagian dari Eagle Industry Co., Ltd., perusahaan global yang berbasis di Jepang yang dikenal sebagai pemimpin dalam manufaktur komponen otomotif dan industri. Didirikan di Indonesia pada tahun 1996, kami fokus pada produksi mechanical seal, rubber bellows, dan komponen presisi lainnya yang digunakan di berbagai industri, termasuk otomotif, dirgantara, dan peralatan industri. Dengan komitmen pada kualitas dan inovasi, kami terus tumbuh untuk memenuhi kebutuhan pelanggan di seluruh dunia.",
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
      managingDirectorDesc1: "PT Eagle Industry Indonesia didirikan pada tahun 1996 sebagai bagian dari strategi ekspansi global Eagle Industry Co., Ltd. Terletak di EJIP Industrial Park, Cikarang, fasilitas kami mewakili komitmen Eagle Industry terhadap pasar Asia Tenggara yang berkembang.",
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
      originDesc1: "PT Eagle Industry Indonesia didirikan pada tahun 1996 sebagai cabang dari Eagle Industry Co., Ltd., perusahaan Jepang yang berasal dari divisi mechanical seal NOK Corporation. Divisi tersebut menjadi independen pada tahun 1964 dengan nama Nippon Sealol Co., Ltd., dan mengubah namanya menjadi Eagle Industry Co., Ltd. pada tahun 1978.",
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
      visionDesc1: "Di Eagle Industry Indonesia, kami percaya bahwa perusahaan tidak hanya milik pemegang saham tetapi juga karyawan dan masyarakat. Filosofi ini telah lama meresap ke setiap aspek manajemen Grup EKK sejak pendirian kami pada tahun 1996.",
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