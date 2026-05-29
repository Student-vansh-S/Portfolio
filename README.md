# Vansh Saini Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111111)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=ffffff)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=ffffff)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=ffffff)](https://www.mongodb.com/)

A modern full stack portfolio website for **Vansh Saini**, an aspiring AI/ML engineer and full stack MERN developer. The project combines a polished React frontend with smooth animations, 3D visuals, project showcases, testimonials, and a working Express contact API backed by MongoDB and Resend email notifications.

## Preview

The portfolio includes a responsive landing experience with a 3D hero section, animated navigation, project cards, skills, certifications, testimonials, and a contact form.

```txt
frontend/public/profile.jpeg
frontend/public/projects/*.png
frontend/public/resume.pdf
```

## Features

- Responsive single-page portfolio built with React and Vite.
- Animated hero section with typewriter text and React Three Fiber 3D sphere.
- Smooth scrolling experience using Lenis and section navigation via react-scroll.
- Modern UI with Tailwind CSS, glassmorphism cards, gradients, and Framer Motion animations.
- Dedicated sections for services, about, experience, skills, projects, certifications, testimonials, CTA, and contact.
- Project showcase with live links, GitHub links, tech tags, and preview images.
- Downloadable resume from the navbar.
- Contact form connected to an Express API.
- MongoDB storage for contact submissions.
- Resend email integration for contact notifications.
- Production-ready frontend build with Vite chunk splitting.

## Tech Stack

| Area | Tools |
| --- | --- |
| Frontend | React 19, Vite, Tailwind CSS, Framer Motion |
| 3D/Visuals | Three.js, React Three Fiber, Drei |
| UI Helpers | React Icons, Swiper, Lenis, react-scroll |
| Backend | Node.js, Express 5, CORS, dotenv |
| Database | MongoDB, Mongoose |
| Email | Resend API |
| Deployment | Vercel for frontend, Render or similar Node host for backend |

## Project Structure

```txt
Portfolio/
|-- backend/
|   |-- models/
|   |   `-- Contact.js
|   |-- package.json
|   `-- server.js
|-- frontend/
|   |-- public/
|   |   |-- projects/
|   |   |-- favicon.svg
|   |   |-- profile.jpeg
|   |   `-- resume.pdf
|   |-- src/
|   |   |-- components/layout/
|   |   |-- pages/
|   |   |-- sections/
|   |   |-- App.jsx
|   |   |-- index.css
|   |   `-- main.jsx
|   |-- index.html
|   |-- package.json
|   `-- vite.config.js
`-- README.md
```

## Portfolio Sections

| Section | Description |
| --- | --- |
| Hero | Intro, role highlights, animated typewriter, stats, and 3D visual. |
| Services | Full stack development, responsive design, APIs, MERN apps, AI chatbot integration, and modern UI work. |
| About | Education, career direction, profile image, and core strengths. |
| Experience | Internship and freelance experience timeline. |
| Skills | Frontend, backend, programming, AI/ML, and tooling skill groups. |
| Projects | Six featured projects with live and GitHub links. |
| Certifications | Courses, simulations, and achievements. |
| Testimonials | Swiper-powered testimonial carousel. |
| Contact | Contact details, social links, and backend-connected message form. |

## Featured Projects

| Project | Tech | Live | Source |
| --- | --- | --- | --- |
| Wanderlust - Airbnb Clone | MERN Stack, Mapbox, Passport.js | [Live](https://wanderlust-4psh.onrender.com/listings) | [GitHub](https://github.com/Student-vansh-S/Wanderlust) |
| Dialogix AI - ChatGPT Clone | React.js, Node.js, MongoDB, Gemini API | [Live](https://dialogixai.vercel.app/) | [GitHub](https://github.com/Student-vansh-S/Dialogix-Ai) |
| Stock Trading Platform | MERN Stack, WebSockets, Chart.js | Coming soon | [GitHub](https://github.com/Student-vansh-S/TradeLens) |
| Video Conferencing Platform | MERN Stack, WebRTC, Socket.io | [Live](https://vi-connects.vercel.app/) | [GitHub](https://github.com/Student-vansh-S/VI-Connects) |
| Radhey Mart | MERN Stack, Stripe, Redux | [Live](https://radhey-mart.vercel.app/) | [GitHub](https://github.com/Student-vansh-S/Radhey-Mart) |
| School Website | React.js, Tailwind CSS, Framer Motion | [Live](https://rkph-school.vercel.app/) | [GitHub](https://github.com/Student-vansh-S/School_RKPH) |

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- MongoDB Atlas connection string or local MongoDB URI
- Resend API key for email notifications

### 1. Clone The Repository

```bash
git clone https://github.com/Student-vansh-S/Portfolio.git
cd Portfolio
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

## Environment Variables

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
EMAIL_USER=your_email@example.com
```

Create a `.env` file inside `frontend/` when connecting the frontend to a deployed backend:

```env
VITE_API_URL=https://your-backend-url.com
```

For local development, the frontend falls back to:

```txt
http://localhost:5000
```

## Run Locally

Start the backend:

```bash
cd backend
node server.js
```

Start the frontend in a second terminal:

```bash
cd frontend
npm run dev
```

Open the Vite local URL in your browser:

```txt
http://localhost:5173
```

## Available Scripts

### Frontend

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `frontend/dist`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint checks. |

### Backend

| Command | Purpose |
| --- | --- |
| `node server.js` | Start the Express API server. |

## API Endpoint

### POST `/api/contact`

Stores a contact message in MongoDB and sends an email notification using Resend when `RESEND_API_KEY` is configured.

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I would like to talk about a project."
}
```

Success response:

```json
{
  "message": "Message sent successfully!"
}
```

## Deployment

### Frontend On Vercel

Use these Vercel settings:

```txt
Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

Add this environment variable in Vercel if your backend is deployed:

```env
VITE_API_URL=https://your-backend-url.com
```

### Backend On Render Or Similar

Use these backend settings:

```txt
Root Directory: backend
Build Command: npm install
Start Command: node server.js
```

Add the backend environment variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
EMAIL_USER=your_email@example.com
```

## Contact

**Vansh Saini**

- Email: [sainivansh8116@gmail.com](mailto:sainivansh8116@gmail.com)
- GitHub: [Student-vansh-S](https://github.com/Student-vansh-S)
- LinkedIn: [vansh-saini-4446b02a8](https://www.linkedin.com/in/vansh-saini-4446b02a8/)
- Instagram: [ig.vansh_07](https://www.instagram.com/ig.vansh_07/)

## License

This project is open for learning, inspiration, and portfolio reference. Add a formal license file if you plan to distribute or reuse it publicly.
