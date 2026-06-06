<p align="center">
  <img src="" alt="StudySpot Banner" width="100%" />
</p>

<h1 align="center">🏫 StudySpot</h1>

<p align="center">
  A modern study room booking platform with authentication, scheduling, and role-based access control.
</p>

<p align="center">
  🔗 <a href="https://studyspot-client.vercel.app">Live Site</a> • 
  📂 <a href="https://github.com/Abdur-Rahim-web/studyspot-client">Client Repo</a> • 
  ⚙️ <a href="https://github.com/Abdur-Rahim-web/studyspot-server">Server Repo</a>
</p>

---

## 📌 Overview

StudySpot is a full-stack room booking system that allows users to create study spaces, explore available rooms, and book them based on time availability.

The platform ensures secure authentication, owner-based access control, and conflict-free booking logic, providing a smooth real-world booking experience.

---

## ✨ Features

- 🔐 Secure authentication (JWT-based login system)
- 🏠 Create, edit, and delete study rooms
- 📅 Real-time booking system with conflict validation
- 👤 User-specific dashboards (My Listings, My Bookings)
- 🧾 Owner-only access for edit/delete actions
- ⚡ Fast and responsive UI with Next.js App Router
- 🔄 Persistent login state after page refresh
- 🚫 Protected routes for authenticated users only
- 📱 Fully responsive (mobile, tablet, desktop)

---

## 🧠 Tech Stack

**Frontend:**
- Next.js
- React
- Tailwind CSS
- HeroUI

**Backend:**
- Node.js
- Express.js
- MongoDB

**Authentication:**
- JWT
- OAuth (Google Login)

**Deployment:**
- Vercel (Client)
- Render / Railway (Server)

---

## 🔐 Security & Auth

- JWT token-based authentication
- Protected API routes
- Owner-based authorization for CRUD actions
- Environment variables for sensitive data
- Secure session handling

---

## 📂 Core Modules

### 🏠 Room Management
- Create study rooms with details:
  - Room name
  - Description
  - Capacity
  - Hourly rate
  - Amenities

### 📅 Booking System
- Prevents overlapping bookings
- Time-slot conflict validation
- Booking history per user

### 👤 User System
- Login / Register system
- Google OAuth support
- Role-based access (Owner / User)

---

## 📸 Screenshots

### 🏠 Home Page
<p align="center">
  <img src="https://your-image-link.com/home.png" width="90%" />
</p>

---

### 🏢 Room Details Page
<p align="center">
  <img src="https://your-image-link.com/room-details.png" width="90%" />
</p>

---

### ➕ Add Room Page
<p align="center">
  <img src="https://your-image-link.com/add-room.png" width="90%" />
</p>

---

### 📅 My Listings Page
<p align="center">
  <img src="https://your-image-link.com/my-listings.png" width="90%" />
</p>

---

### 📌 My Bookings Page
<p align="center">
  <img src="https://your-image-link.com/my-bookings.png" width="90%" />
</p>

---

## 🚀 Deployment

### Client
- Hosted on Vercel
- Environment variables configured via dashboard

### Server
- Hosted on Render / Railway
- MongoDB Atlas connected
- JWT-secured API communication

---

## 🔁 Reliability Features

- Page refresh does not break authentication
- Protected routes persist after reload
- Hydration issues resolved
- Custom toast notifications instead of default alerts
- Graceful error handling for API failures

---

## 📦 Installation

### Client Setup
```bash
git clone https://github.com/Abdur-Rahim-web/studyspot-client
cd studyspot-client
npm install
npm run dev

### Server Setup

```bash
git clone https://github.com/Abdur-Rahim-web/studyspot-server
cd studyspot-server
npm install
npm start


👨‍💻 Developer

Abdur Rahim
Junior Full Stack Developer
GitHub: https://github.com/Abdur-Rahim-web