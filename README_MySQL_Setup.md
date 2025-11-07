# MySQL Contact Form Setup

This document provides instructions for setting up the MySQL database and running the contact form with MySQL integration.

## Prerequisites

1. Node.js and npm installed
2. MySQL server installed and running
3. Create a database named `eid_website` in MySQL

## Database Setup

1. Create the database in MySQL:
   ```sql
   CREATE DATABASE eid_website;
   ```

2. Import the table structure:
   ```bash
   mysql -u root -p eid_website < database/create_tb_inquiry.sql
   ```

3. Update the database credentials in `config/db.js`:
   ```javascript
   const connection = mysql.createConnection({
     host: 'localhost',
     user: 'root', // Replace with your MySQL username
     password: '', // Replace with your MySQL password
     database: 'eid_website'
   });
   ```

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start both the React app and Node.js server:
   ```bash
   npm run dev
   ```

   Or start them separately:
   
   Terminal 1 (Backend):
   ```bash
   npm run server
   ```
   
   Terminal 2 (Frontend):
   ```bash
   npm start
   ```

3. Access the application at `http://localhost:3000`

## How It Works

1. The contact form in `src/pages/Contact.js` collects user input
2. When submitted, the form data is sent to the Node.js backend API endpoint at `http://localhost:5000/api/inquiry`
3. The backend server connects to the MySQL database and saves the form data to the `tb_inquiry` table
4. The form shows success/error messages based on the API response

## API Endpoint

- **POST** `/api/inquiry` - Saves contact form data to MySQL database

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry about products",
  "message": "I would like to know more about your products."
}
```

Response:
```json
{
  "success": true,
  "message": "Inquiry saved successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry about products",
    "message": "I would like to know more about your products."
  }
}
```

## Troubleshooting

1. **Database Connection Error**: Make sure MySQL is running and the credentials in `config/db.js` are correct
2. **CORS Error**: The backend server is configured to handle CORS, but make sure both frontend and backend are running
3. **Port Already in Use**: Change the port in `server.js` if port 5000 is already in use