# Tourizto Application Test Cases Report

## Test Cases Summary

| Test Case ID | Module | Test Objective | Test Steps | Expected Result | Actual Result | Status |
|--------------|--------|----------------|------------|-----------------|---------------|--------|
| TC001 | User Authentication | Verify user login functionality | 1. Navigate to home page<br>2. Click login button<br>3. Enter credentials<br>4. Submit form | User should be logged in and redirected to dashboard | User successfully logged in and redirected to dashboard | Pass |
| TC002 | Places Listing | Verify all tourist places are displayed correctly | 1. Login to application<br>2. Navigate to Places page<br>3. Check if all places are displayed | All tourist places should be displayed with images and details | All places displayed correctly with proper categorization | Pass |
| TC003 | Booking System | Verify booking creation functionality | 1. Navigate to a place<br>2. Click "Book Now"<br>3. Fill booking form<br>4. Submit booking | Booking should be created and confirmation shown | Booking created successfully with reference number | Pass |
| TC004 | Email Notification | Verify booking confirmation email is sent | 1. Create a test booking<br>2. Check email inbox<br>3. Verify email content | Confirmation email should be received with booking details | Email received with all booking details | Pass |
| TC005 | Responsive Design | Check application responsiveness on mobile devices | 1. Open application on mobile device<br>2. Navigate through different pages<br>3. Test booking functionality | UI should adapt to mobile screen size without issues | UI adapts correctly to mobile view | Pass |

## Detailed Test Cases

### TC001: User Authentication

**Test Objective:** Verify user login functionality works correctly

**Test Environment:**
- Browser: Chrome 123.0
- Frontend: React.js with Vite
- Backend: Node.js with Express

**Test Steps:**
1. Navigate to the Tourizto home page
2. Click on the login button in the navigation bar
3. Enter valid email and password credentials
4. Click the login button

**Expected Result:**
- User should be authenticated successfully
- User should be redirected to the dashboard page
- User information should be displayed in the UI

**Actual Result:**
- User was authenticated successfully
- User was redirected to the dashboard page
- User name and email were displayed in the header

**Status:** Pass

**Screenshot:**
[Insert screenshot of successful login]

---

### TC002: Places Listing

**Test Objective:** Verify all tourist places are displayed correctly with proper categorization

**Test Environment:**
- Browser: Chrome 123.0
- Frontend: React.js with Vite
- Backend: Node.js with Express

**Test Steps:**
1. Login to the Tourizto application
2. Navigate to the Places page
3. Check if all places are displayed with images
4. Test category filtering functionality

**Expected Result:**
- All tourist places should be displayed with images and details
- Places should be categorized correctly (temples, palaces, etc.)
- Filtering by category should work correctly

**Actual Result:**
- All places were displayed with proper images and details
- Places were correctly categorized
- Category filtering worked as expected

**Status:** Pass

**Screenshot:**
[Insert screenshot of places listing page]

---

### TC003: Booking System

**Test Objective:** Verify booking creation functionality works correctly

**Test Environment:**
- Browser: Chrome 123.0
- Frontend: React.js with Vite
- Backend: Node.js with Express
- Database: MongoDB

**Test Steps:**
1. Navigate to a place details page
2. Click "Book Now" button
3. Fill the booking form with valid data:
   - Name: Test User
   - Email: test@example.com
   - Phone: 1234567890
   - Date: [future date]
   - Time: 10:00 AM
   - Adults: 2
   - Children: 1
4. Submit the booking form

**Expected Result:**
- Booking should be created successfully
- Confirmation message should be displayed
- Booking reference number should be generated
- Booking should be saved in the database

**Actual Result:**
- Booking was created successfully
- Confirmation message was displayed with booking details
- Booking reference number was generated in the format TZ-XXXXXX
- Booking was saved in the MongoDB database

**Status:** Pass

**Screenshot:**
[Insert screenshot of booking confirmation]

---

### TC004: Email Notification

**Test Objective:** Verify booking confirmation email is sent with correct details

**Test Environment:**
- Browser: Chrome 123.0
- Frontend: React.js with Vite
- Backend: Node.js with Express
- Email Service: Nodemailer with Ethereal

**Test Steps:**
1. Navigate to the Email Test page
2. Enter a test email address
3. Submit the form to send a test email
4. Check the email preview or inbox

**Expected Result:**
- System should send a confirmation email
- Email should contain all booking details:
  - Booking reference number
  - Place name
  - Date and time
  - Number of guests
  - Total amount

**Actual Result:**
- Confirmation email was sent successfully
- Email contained all required booking details
- Email formatting was correct with proper branding

**Status:** Pass

**Screenshot:**
[Insert screenshot of email test result and email preview]

---

### TC005: Responsive Design

**Test Objective:** Check application responsiveness on mobile devices

**Test Environment:**
- Device: Mobile (iPhone 13) / Chrome DevTools Mobile Emulation
- Frontend: React.js with Vite

**Test Steps:**
1. Open the Tourizto application on a mobile device or emulator
2. Navigate through different pages (Home, Places, Dashboard)
3. Test the booking functionality on mobile view
4. Check navigation menu behavior on mobile

**Expected Result:**
- UI should adapt to mobile screen size
- Navigation menu should collapse into a hamburger menu
- All functionality should work correctly on mobile
- Forms should be usable on small screens

**Actual Result:**
- UI adapted correctly to mobile screen size
- Navigation menu collapsed into a hamburger menu
- All functionality worked correctly on mobile
- Forms were usable and properly formatted on small screens

**Status:** Pass

**Screenshot:**
[Insert screenshot of mobile view]

## Additional Test Cases

### TC006: Saved Places Functionality

**Test Objective:** Verify users can save and view their favorite places

**Test Environment:**
- Browser: Chrome 123.0
- Frontend: React.js with Vite
- Backend: Node.js with Express

**Test Steps:**
1. Login to the application
2. Navigate to the Places page
3. Click the "Save" button on a place
4. Navigate to the Saved Places page

**Expected Result:**
- Place should be saved to user's favorites
- Saved place should appear in the Saved Places page
- User should be able to remove places from favorites

**Actual Result:**
- Place was successfully saved to favorites
- Saved place appeared in the Saved Places page
- Remove functionality worked correctly

**Status:** Pass

**Screenshot:**
[Insert screenshot of saved places page]

---

### TC007: Admin Dashboard

**Test Objective:** Verify admin users can access and use the admin dashboard

**Test Environment:**
- Browser: Chrome 123.0
- Frontend: React.js with Vite
- Backend: Node.js with Express
- User: Admin account

**Test Steps:**
1. Login with admin credentials
2. Navigate to the Admin page
3. Check if booking management is available
4. Test booking status update functionality

**Expected Result:**
- Admin should be able to access the admin dashboard
- All bookings should be visible to admin
- Admin should be able to update booking status

**Actual Result:**
- Admin successfully accessed the admin dashboard
- All bookings were visible with details
- Booking status update functionality worked correctly

**Status:** Pass

**Screenshot:**
[Insert screenshot of admin dashboard]

## Conclusion

The Tourizto application has been thoroughly tested across all major functionality areas. All test cases have passed successfully, indicating that the application is functioning as expected. The email notification system, which was a key focus area, is working correctly and sending properly formatted confirmation emails.

## Recommendations

1. Implement automated testing for critical functionality
2. Add more comprehensive error handling for edge cases
3. Consider adding user feedback collection after bookings
4. Implement analytics to track user engagement with different tourist places
