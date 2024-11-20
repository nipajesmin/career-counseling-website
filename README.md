# Career Counseling Website

Welcome to the Career Counseling Website, a platform designed to provide personalized career guidance and resources to help users make informed decisions about their professional futures. With user-friendly navigation and interactive features, the site ensures a seamless experience.

# Live Website Link

# React Fundamental Concepts Used

1. React: Core framework for building the user interface.
2. React Router: For implementing navigation and protected routes.
3. React Icons: To enhance the UI with modern and interactive icons.
4. CSS: For crafting responsive and visually appealing designs.

# Data Management

## Firebase
    Used for managing user authentication, user profiles, and real-time updates.

# Top Features of the Website

## Categorized Career Services

1. The home page features a dynamic list of career services displayed as cards.
2. Each card includes key details: service name, category, price, counselor, and a "Learn More" button.

## Service Details Page (Protected Route)

1. Clicking "Learn More" navigates to a detailed page with:
     Comprehensive service information.
     Feedback functionality where users can submit and view comments in real-time.
2. Requires user login to access.

## Authentication System

1. Includes email/password and Google authentication.
2. Features a secure login and registration system:
     Password strength validation.
     "Show/Hide Password" functionality on the registration page.
3. Displays user-specific data (photo, name) in the navbar after login.

## My Profile Page (Protected Route)

1. Users can view and edit their profile information, including their name and profile picture.
2. Changes are securely saved using Firebase's updateProfile method.

## Dynamic and Responsive Design
1. Navbar:
   Displays login/logout buttons or user details based on authentication state.
   Fully responsive for mobile, tablet, and desktop views.
2. Dynamic Title:
   The browser tab title updates based on the current page for better usability.

## Additional Features

1. 404 Page: 
   A custom error page guides users back to valid routes.
2. Extra Protected Route: 
   Includes a meaningful additional page for career resources or tips.

### Technologies Used

1. Frontend: React, React Router, React Icons, CSS
2. Backend: Firebase Authentication and Database
3. Data Management: Firebase Realtime Updates