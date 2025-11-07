require('dotenv').config();
const { sendInquiryEmail, sendConfirmationEmail } = require('./config/email');

// Test data
const testInquiry = {
  name: 'Test User',
  email: 'guztiart06@gmail.com',
  subject: 'Test Inquiry',
  message: 'This is a test inquiry to verify email functionality.'
};

async function testEmailFunction() {
  console.log('Testing email functionality...');
  
  try {
    // Test notification email
    console.log('\n1. Testing notification email to agustiar.fajar@ekkeagle.com...');
    const notificationResult = await sendInquiryEmail(testInquiry);
    if (notificationResult.success) {
      console.log('✅ Notification email sent successfully!');
      console.log(`Message ID: ${notificationResult.messageId}`);
    } else {
      console.log('❌ Failed to send notification email:', notificationResult.error);
    }
    
    // Test confirmation email
    console.log('\n2. Testing confirmation email to user...');
    const confirmationResult = await sendConfirmationEmail(testInquiry.email, testInquiry.name);
    if (confirmationResult.success) {
      console.log('✅ Confirmation email sent successfully!');
      console.log(`Message ID: ${confirmationResult.messageId}`);
    } else {
      console.log('❌ Failed to send confirmation email:', confirmationResult.error);
    }
    
    console.log('\nEmail testing completed!');
  } catch (error) {
    console.error('Error during email testing:', error);
  }
}

// Run the test
testEmailFunction();