require('dotenv').config();
const { sendInquiryEmail, sendConfirmationEmail } = require('./config/email');

// Test data that simulates form submission
const testInquiry = {
  name: 'Test User',
  email: 'test@example.com',
  subject: 'Test Inquiry from Form',
  message: 'This is a test inquiry submitted through form to verify complete integration.'
};

async function debugEmail() {
  console.log('=== DEBUGGING EMAIL CONFIGURATION ===');
  console.log('SMTP User:', process.env.SMTP_USER);
  console.log('SMTP Host:', process.env.SMTP_HOST);
  console.log('SMTP Port:', process.env.SMTP_PORT);
  console.log('Test inquiry data:', testInquiry);
  
  console.log('\n=== TESTING sendInquiryEmail FUNCTION ===');
  try {
    const result = await sendInquiryEmail(testInquiry);
    console.log('✅ sendInquiryEmail result:', result);
  } catch (error) {
    console.error('❌ sendInquiryEmail error:', error);
  }
  
  console.log('\n=== TESTING sendConfirmationEmail FUNCTION ===');
  try {
    const result = await sendConfirmationEmail(testInquiry.email, testInquiry.name);
    console.log('✅ sendConfirmationEmail result:', result);
  } catch (error) {
    console.error('❌ sendConfirmationEmail error:', error);
  }
}

// Run the debug test
debugEmail();