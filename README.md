E-Commerce Application

This repository contains the codebase for a full-stack E-Commerce Application built with modern web technologies. The platform provides features for browsing products, adding them to a cart, completing orders, and managing user profiles and payments.

Features

User Features:

Product Browsing: View a catalog of products with details like price, description, and images.

Cart Management: Add, update, and remove items from the shopping cart.

Order Management: Place orders and view order history.

Stripe Integration: Secure online payments.

Admin Features:

Product Management: Add, update, or delete products.

Order Tracking: Monitor user orders.

Tech Stack

Frontend:

React with React Router DOM

Redux Toolkit for state management

Material-UI (MUI) for UI components

Backend:

Node.js with Express

MongoDB for the database

Stripe for payment processing

Installation

Prerequisites:

Node.js (v14 or higher)

MongoDB (local or cloud-based)

Steps:

Clone the repository:

git clone https://github.com/Rachitdhyani2002/E-Commerce-2024.git
cd E-Commerce-2024

Install dependencies for the backend and frontend:

# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install

Set up environment variables:

Create a .env file in the backend folder.

Add the following variables:

PORT=8080
MONGO_URI=<your-mongodb-connection-string>
STRIPE_SECRET_KEY=<your-stripe-secret-key>

Start the application:

# Start backend server
cd backend
npm run dev

# Start frontend server
cd ../frontend
npm start

Open your browser and navigate to:

http://localhost:3000

Folder Structure

E-Commerce-2024/
├── backend/          # Backend code (Node.js, Express, MongoDB)
│   ├── controllers/  # Route handlers
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API routes
│   ├── server.js    # Application entry point
│   └── .env         # Environment variables
├── frontend/         # Frontend code (React)
│   ├── src/
│       ├── components/  # Reusable UI components
│       ├── pages/       # Page components (e.g., Home, Cart, Checkout)
│       ├── redux/       # Redux slices
│       └── App.js      # Main React component

API Endpoints

Product Routes:

GET /api/v1/products - Fetch all products

POST /api/v1/products - Add a new product (Admin only)

PUT /api/v1/products/:id - Update a product (Admin only)

DELETE /api/v1/products/:id - Delete a product (Admin only)

Order Routes:

POST /api/v1/orders - Create an order

GET /api/v1/orders - Fetch user orders

Payment Routes:

POST /api/v1/products/payment - Initiate Stripe payment session

Future Enhancements

Wishlist Feature: Allow users to save products for future purchase.

Ratings and Reviews: Enable users to review products.

Admin Dashboard: Add analytics and order summaries for admins.

License

This project is licensed under the MIT License.

Contributors

Rachit Dhyani

Feel free to fork, contribute, or report issues!

