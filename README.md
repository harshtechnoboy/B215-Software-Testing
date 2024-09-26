# B215-Software-Testing

### Overview

<p>This project is  based on a full-stack web application that consists of both frontend and backend components.<br> 
The testing is done using cypress for the frontend and vitest for the backend.</p>

### Table of Contents

1. [Technologies](#Technologies)
2. [Features](#Features)
3. [Installation](#Installation)
4. [Testing](#Testing)
5. [License](#License)

### Technologies

#### Backend
* Node.js for handling packages
* Express.js for managing server and routes
* MongoDB for data storage
* Mongoose for database model
* JWT for authentication

#### Frontend
* React.js for creating app
* Redux for state management
* Axios for making HTTP request

### Features

* User Authentication: Sign in, sign up and user profile management
* Product Management: List, add, update and delete products
* Order Management: Place orders, view order history and manage orders
* Responsive Design: Optimized for both mobile and desktop

### Installation

#### Prerequisites

* Node.js (v14+) https://nodejs.org/en/download

* MongoDB Local or Cloud https://www.mongodb.com/docs/manual/installation/ or https://www.mongodb.com/cloud/atlas/register

* NPM or Yarn https://docs.npmjs.com/getting-started or https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable

* Cypress https://docs.cypress.io/guides/getting-started/installing-cypress

#### Option 1: Running remotely

This website has been deployed online using Render on: https://sneakervault.onrender.com

#### Option 2: Running locally

This website can be built on local machine by following these steps:

#### Backend Setup

1. Navigate to the backend directory: `cd backend`

2. Install dependencies: `npm install`

3. Set up environment variables by creating a `.env` file:

* BASE_URL=(http://localhost:3000) or (https://yourcustomdomain.com)
* CLOUDINARY_API_KEY=your_cloudinary_api_key
* CLOUDINARY_API_SECRET=your_cloudinary_api_secret
* CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
* CLOUDINARY_URL=your_cloudinary_url
* JWT_SECRET=your_jwt_secret
* MAILGUN_API_KEY=your_mailgun_api_key
* MAILGUN_DOMAIN=your_mailgun_domain
* MONGODB_URI=your_mongodb_connection_string
* PAYPAL_CLIENT_ID=
* PAYPAL_SECRET_KEY=

4. Start the backend server: `npm start`

#### Frontend Setup

1. Navigate to the frontend directory: `cd frontend`

2. Install dependencies: `npm install`

3. Start the frontend development server: `npm start`

4. For the first time open in your browser at http://localhost:5000/api/seed

5. Open the app normally in your browser at http://localhost:3000/signin

### Testing

To run the cypress end-to-end test case scripts:

1. `git clone https://github.com/harshtechnoboy/B215-Software-Testing-SS0624.git`

2. `cd frontend`

3. `npx cypress run`

To run the vitest unit test case scripts:

1. `git clone https://github.com/harshtechnoboy/B215-Software-Testing-SS0624.git`

2. `cd backend`

3. `npm run test`

### License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/harshtechnoboy/B215-Software-Testing-SS0624/blob/main/LICENSE) file for details.