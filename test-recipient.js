require('dotenv').config();
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'guztiart06@gmail.com',
    pass: process.env.SMTP_PASS || 'ilqx ogdd taaf rwab'
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

async function testRecipientEmail() {
  console.log('=== TESTING RECIPIENT EMAIL ===');
  console.log('SMTP User:', process.env.SMTP_USER);
  console.log('SMTP Host:', process.env.SMTP_HOST);
  
  // Test 1: Send to agustiar.fajar@ekkeagle.com
  try {
    const mailOptions1 = {
      from: process.env.SMTP_USER,
      to: 'agustiar.fajar@ekkeagle.com',
      subject: 'Test 1: Direct to agustiar.fajar@ekkeagle.com',
      text: 'This is a test email to verify recipient address works.'
    };
    
    const result1 = await transporter.sendMail(mailOptions1);
    console.log('✅ Test 1 successful - Email sent to agustiar.fajar@ekkeagle.com');
    console.log('Message ID:', result1.messageId);
  } catch (error1) {
    console.error('❌ Test 1 failed - Error sending to agustiar.fajar@ekkeagle.com:', error1.message);
  }
  
  // Test 2: Send to a different email (like Gmail)
  try {
    const mailOptions2 = {
      from: process.env.SMTP_USER,
      to: 'test@gmail.com', // Replace with a test Gmail address
      subject: 'Test 2: To a different email address',
      text: 'This is a test email to verify if the issue is with recipient address.'
    };
    
    const result2 = await transporter.sendMail(mailOptions2);
    console.log('✅ Test 2 successful - Email sent to test@gmail.com');
    console.log('Message ID:', result2.messageId);
  } catch (error2) {
    console.error('❌ Test 2 failed - Error sending to test@gmail.com:', error2.message);
  }
}

// Run the test
testRecipientEmail();