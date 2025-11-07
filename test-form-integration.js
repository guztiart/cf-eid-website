require('dotenv').config();
const axios = require('axios');

// Test data that simulates form submission
const testFormData = {
  name: 'Test User',
  email: 'test@example.com',
  subject: 'Test Inquiry from Form',
  message: 'This is a test inquiry submitted through the form to verify the complete integration.'
};

async function testFormIntegration() {
  console.log('Testing form submission with email integration...');
  console.log('Test data:', testFormData);
  
  try {
    // Simulate form submission by calling the API endpoint
    const response = await axios.post('http://localhost:5000/api/inquiry', testFormData);
    
    console.log('\n✅ Form submission successful!');
    console.log('Response:', response.data);
    
    if (response.data.success) {
      console.log('\n📧 Email Status:');
      console.log('- Notification email to agustiar.fajar@ekkeagle.com:', response.data.emailSent ? '✅ Sent' : '❌ Failed');
      console.log('- Confirmation email to user:', response.data.confirmationSent ? '✅ Sent' : '❌ Failed');
      console.log('- From address:', testFormData.email, '(using user email from form)');
    }
    
  } catch (error) {
    console.error('\n❌ Form submission failed:', error.message);
    if (error.response) {
      console.error('Server response:', error.response.data);
    }
  }
}

// Check if server is running
async function checkServer() {
  try {
    await axios.get('http://localhost:5000');
    return true;
  } catch (error) {
    return false;
  }
}

async function runTest() {
  console.log('Checking if server is running...');
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.log('❌ Server is not running. Please start the server with: npm run server');
    return;
  }
  
  console.log('✅ Server is running');
  await testFormIntegration();
}

// Run the test
runTest();