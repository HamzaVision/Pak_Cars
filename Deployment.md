# Pak_Cars Deployment Guide

This guide provides step-by-step instructions to deploy the project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- MongoDB

## Getting Started

####1. **Clone the Repository:**

   ```bash
   git clone https://github.com/HamzaVision/Pak_Cars.git
   cd Pak_Cars
   ```

####2. **Install Dependencies:**

   Install the packages for **Server App** 

   ```bash
   npm i express
   npm i cors
   npm i mongoose
   npm i body-parser
   npm i jsonwebtoken
   npm i multer
   ```

   Install the packages for **Client App** 

   ```bash
   npm i react-router-dom@5.2.0
   npm i axios
   npm i @react-google-maps/api
   ```

####3. **Run the Application:**

   First we start the server

   ```bash
   cd .\pakcars-node-app\
   npm start
   ```

   Then we run the frontend client application

   ```bash
   cd .\react-app\
   npm start
   ```

   ​


   The application should now be running at `http://localhost:3000` 



