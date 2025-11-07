require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./config/db');
const { sendInquiryEmail, sendConfirmationEmail } = require('./config/email');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API endpoint to save inquiry form data
app.post('/api/inquiry', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }

  // Insert data into tb_inquiry table
  const query = 'INSERT INTO tb_inquiry (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, NOW())';
  
  db.query(query, [name, email, subject, message], async (error, results) => {
    if (error) {
      console.error('Error saving inquiry:', error);
      return res.status(500).json({
        success: false,
        message: 'Error saving inquiry to database'
      });
    }
    
    // Send email notification to agustiar.fajar@ekkeagle.com
    const emailResult = await sendInquiryEmail({ name, email, subject, message });
    
    // Send confirmation email to the user
    const confirmationResult = await sendConfirmationEmail(email, name);
    
    // Log email results (but don't fail the request if emails fail)
    if (!emailResult.success) {
      console.error('Failed to send notification email:', emailResult.error);
    }
    
    if (!confirmationResult.success) {
      console.error('Failed to send confirmation email:', confirmationResult.error);
    }
    
    res.status(200).json({
      success: true,
      message: 'Inquiry saved successfully and emails sent',
      data: {
        id: results.insertId,
        name,
        email,
        subject,
        message,
        emailSent: emailResult.success,
        confirmationSent: confirmationResult.success
      }
    });
  });
});

// Serve static files from React app
app.use(express.static(path.join(__dirname, 'build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('/*path', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});