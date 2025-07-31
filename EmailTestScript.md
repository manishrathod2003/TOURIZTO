# Email Functionality Test Script

## Test Objective
To verify that the Tourizto application correctly sends booking confirmation emails with all required details.

## Prerequisites
- Tourizto frontend running on http://localhost:5173
- Tourizto backend running on http://localhost:5000
- Valid test email address

## Test Steps

### 1. Access the Email Test Page
1. Open your browser and navigate to http://localhost:5173/email-test
2. Verify that the email test form is displayed
3. **Take Screenshot #1**: Email test page

### 2. Submit the Test Form
1. Enter a valid email address in the email field
2. Click the "Send Test Email" button
3. Wait for the response
4. **Take Screenshot #2**: Form submission result showing success or error message

### 3. Check Email Preview (if using Ethereal)
1. If the test uses Ethereal (fake email service), a preview link will be provided
2. Click on the preview link to open the email in a new tab
3. Verify that the email contains all the required booking details:
   - Booking reference number
   - Place name (Rajwada Palace)
   - Date and time
   - Number of guests
   - Total amount
4. **Take Screenshot #3**: Email preview showing all booking details

### 4. Check Actual Email (if using real email)
1. If the test uses a real email address, check your email inbox
2. Open the received email from Tourizto
3. Verify that the email contains all the required booking details
4. **Take Screenshot #4**: Received email showing all booking details

## Expected Results
- The system should successfully send a test email
- A success message should be displayed with a message ID
- The email should contain all the booking details in a well-formatted layout
- The email should have proper branding elements (logo, colors, etc.)

## Test Data
- **Email**: [Your test email address]
- **Name**: Test User
- **Place**: Rajwada Palace
- **Date**: June 15, 2023
- **Time**: 10:00 AM
- **Adults**: 2
- **Children**: 1
- **Total Amount**: ₹200

## Notes for Report
When adding screenshots to your report, make sure to:
1. Capture the entire page/email to show all relevant details
2. Highlight any important elements (success messages, booking details, etc.)
3. Blur or redact any sensitive information (email addresses, etc.)
4. Include captions explaining what each screenshot shows

## Troubleshooting
If the test fails, check the following:
1. Backend server is running and accessible
2. Email service is properly configured
3. Browser console for any JavaScript errors
4. Backend logs for any server-side errors
