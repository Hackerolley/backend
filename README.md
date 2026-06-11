# E-Commerce API

A RESTful E-Commerce API built with Node.js, Express.js, MongoDB, and JWT Authentication. This project provides secure user authentication and product management functionalities for an online store.

## Features

* User Registration
* User Login
* User Logout
* JWT Authentication
* Password Hashing with bcrypt
* Create Product
* Retrieve Products
* Update Product
* Delete Product
* MongoDB Database Integration
* Error Handling and Validation

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt
* dotenv
* Nodemon

## Project Structure

backend/
├── src/
│   ├── app.js
│   ├── index.js
│   ├── config/
│   │   ├── constant.js
│   │   └── database.js
│   ├── controller/
│   │   ├── product.controller.js
│   │   └── user.controller.js
│   ├── models/
│   │   ├── model.product.js
│   │   └── model.user.js
│   └── router/
│       ├── product.route.js
│       └── user.route.js
├── .env
├── package.json
├── package-lock.json
└── README.md

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/[your-username]/[repository-name].git
```

### 2. Navigate to the Project Directory

```bash
cd [repository-name]
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables
thi sproject required an enviroment variables bellow 

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Run the Development Server

```bash
npm run dev
```

The server should start on:

```bash
http://localhost:5000
```

## API Endpoints

### Authentication Routes

#### Register User

```http
POST /api/users/register
```

Request Body:

```json
{
  "username": "yusuf olaide",
  "email": "yakubyusufolaide@gmail.com",
  "phone": 2348012345678,
  "password": "Password123"
}
```

#### Login User

```http
POST /api/users/login
```

Request Body:

```json
{
  "email": "yakubyusufolaide@gmail.com",
  "password": "Password123"
}
```

#### Logout User

```http
POST /api/users/logout
```

---

### Product Routes

#### Create Product

```http
POST /api/products/addproduct
```

#### Get All Products

```http
GET /api/products/getallproduct
```

#### Get Product By ID

```http
GET /api/products/:id
```

#### Update Product

```http
PUT /api/products/:id
```

#### Delete Product

```http
DELETE /api/products/:id
```

## Authentication

Protected routes require a valid JWT token.

Example:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

## Sample Response

```json
{
  "success": true,
  "message": "Operation completed successfully"
}
```

## Current Progress

* ✅ User Registration
* ✅ User Login
* ✅ User Logout
* ✅ Product CRUD Operations
* 🚧 Shopping Cart
* 🚧 Order Management
* 🚧 Payment Integration
* 🚧 Admin Dashboard

## Future Improvements

* Shopping Cart System
* Order Processing
* Payment Gateway Integration
* Product Categories
* Product Reviews and Ratings
* Wishlist Functionality
* Image Uploads
* Admin Dashboard
* Email Notifications

## Author

**Yakub Yusuf olaide**

GitHub: https://github.com/Hackerolley

Email: yakubyusufolaide@gmail.com

