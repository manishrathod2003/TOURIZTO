// Email Service Test Script
import axios from 'axios';

// Configuration
const API_URL = 'http://localhost:5000/api/email/send-test';
const TEST_EMAIL = 'test@example.com'; // Replace with your test email

// Test case: Send a test email
async function testSendEmail() {
  console.log('=== Email Service Test ===');
  console.log('Testing: Send confirmation email');
  console.log(`Sending to: ${TEST_EMAIL}`);
  
  try {
    // Test data
    const testData = {
      email: TEST_EMAIL,
      name: 'Test User',
      place: 'Rajwada Palace',
      date: 'June 15, 2023',
      time: '10:00 AM',
      adults: 2,
      children: 1,
      totalAmount: 200,
      bookingReference: `TZ-${Date.now().toString().slice(-6)}`
    };
    
    console.log('Test data:', testData);
    
    // Send request to API
    console.log('Sending request to API...');
    const response = await axios.post(API_URL, testData);
    
    // Validate response
    if (response.status === 200 && response.data.success) {
      console.log('✅ TEST PASSED: Email sent successfully');
      console.log('Message ID:', response.data.messageId);
      console.log('Preview URL:', response.data.previewUrl);
      
      return {
        success: true,
        messageId: response.data.messageId,
        previewUrl: response.data.previewUrl,
        data: response.data
      };
    } else {
      console.log('❌ TEST FAILED: Unexpected response');
      console.log('Response:', response.data);
      
      return {
        success: false,
        error: 'Unexpected response',
        data: response.data
      };
    }
  } catch (error) {
    console.log('❌ TEST FAILED: Error occurred');
    console.log('Error:', error.message);
    
    if (error.response) {
      console.log('Response status:', error.response.status);
      console.log('Response data:', error.response.data);
    }
    
    return {
      success: false,
      error: error.message,
      data: error.response?.data
    };
  }
}

// Run the test
testSendEmail()
  .then(result => {
    console.log('\n=== Test Summary ===');
    console.log('Status:', result.success ? 'PASSED' : 'FAILED');
    
    if (result.success) {
      console.log('Message ID:', result.messageId);
      console.log('Preview URL:', result.previewUrl);
      console.log('\nYou can view the test email at the preview URL above.');
      console.log('Take a screenshot of this result and the email preview for your report.');
    } else {
      console.log('Error:', result.error);
      console.log('Take a screenshot of this error for your report.');
    }
  })
  .catch(err => {
    console.error('Test execution error:', err);
  });
