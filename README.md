# Fullstack Portfolio Project

This repository contains the code for a personal portfolio website, featuring a React & Tailwind CSS frontend and an Express & Node.js backend.

## Project Structure

- `/frontend` - React + Tailwind CSS client, built with Vite.
- `/backend` - Express API server for contact form submission, saving to MongoDB, and sending email notifications.

---

## Setup and Installation

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory (do not commit this file to Git):
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

---

## Technologies Used

- **Frontend**: React, Tailwind CSS, Vite, Framer Motion, React Icons, Three.js / React Three Fiber.
- **Backend**: Node.js, Express, MongoDB (Mongoose), Nodemailer (for contact emails).
