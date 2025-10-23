<<<<<<< HEAD
# eid-website
Company Profile Website
=======
# Eagle Industry Indonesia - React.js Refactor

This project is a React.js refactoring of the Eagle Industry Indonesia website, originally built with HTML, Bootstrap, and JavaScript. The website showcases PT Eagle Industry Indonesia, a manufacturer of mechanical seals, valves, and precision components for various industries.

## Project Structure

```
eagle-indonesia-react/
├── public/                 # Static assets
│   ├── assets/             # Images, CSS, and JS files
│   └── index.html          # HTML template
├── src/                   # React source code
│   ├── components/         # Reusable React components
│   │   ├── Footer.js       # Footer component
│   │   ├── Header.js       # Header component
│   │   └── ScrollTop.js    # Scroll to top component
│   ├── pages/              # Page components
│   │   ├── About.js        # About page
│   │   ├── Blog.js         # Blog page
│   │   ├── BlogDetails.js  # Blog details page
│   │   ├── Contact.js      # Contact page
│   │   ├── Home.js         # Home page
│   │   ├── ProjectDetails.js # Project details page
│   │   ├── Projects.js     # Projects page
│   │   ├── ServiceDetails.js # Service details page
│   │   └── Services.js     # Services page
│   ├── utils/              # Utility functions
│   │   └── loadScripts.js  # Script loading utilities
│   ├── App.css             # App-specific styles
│   ├── App.js              # Main App component
│   ├── index.css           # Global styles
│   ├── index.js            # Entry point
│   └── reportWebVitals.js  # Web vitals reporting
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## Features

- **Responsive Design**: Fully responsive website that works on all devices
- **Modern React Architecture**: Built with React.js for better maintainability and performance
- **Component-Based Structure**: Reusable components for consistent design and functionality
- **React Router**: Client-side routing for smooth navigation
- **Integration with Existing Libraries**: Maintains the original Bootstrap styling and JavaScript functionality
- **SEO-Friendly**: Proper meta tags and semantic HTML for better search engine optimization

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/eagle-indonesia-react.git
cd eagle-indonesia-react
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

Create a production build:
```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Learn More

- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://create-react-app.dev/)
- [React Router Documentation](https://reactrouter.com/)

## Original Design Credits

The original website was designed by [Riyanda Aditiya Senjaya](https://www.instagram.com/riyy2410/).

## License

This project is licensed under the MIT License.
>>>>>>> f33ee29 (First Commit)
