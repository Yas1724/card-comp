# 🪪 Profile Cards – Full Stack Web App

A full-stack web application where users can create stylish profile cards with images and social links. Cards are stored in a database and rendered dynamically on the frontend. Each user can remove **only their own cards from the UI** without deleting data globally.

---

## ✨ Features

- 🧑 Create profile cards with:
  - Name & bio
  - Interests (comma-separated)
  - Profile image upload
  - Social links (Twitter, GitHub, LinkedIn)
- 🖼 Image upload support using Multer
- 📦 Cards persisted in MongoDB Atlas
- 🔐 User-scoped delete (frontend-only removal using localStorage)
- 🌍 RESTful API (CRUD)
- 🎨 Clean, responsive card UI
- 🔒 Secure environment variables using `.env`

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES6+)
- CSS (custom styling)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (file uploads)
- dotenv

### Database
- MongoDB Atlas

---

## 📁 Project Structure
card_fullstack/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── uploads/
│ ├── server.js
│ ├── package.json
│ └── .env (ignored)
│
└── frontend/
├── src/
│ ├── components/
│ ├── api.js
│ ├── App.jsx
│ └── main.jsx
├── index.html
└── package.json

## API Endpoints
<img width="902" height="243" alt="image" src="https://github.com/user-attachments/assets/ca4cd0d8-ce3b-46f5-96ce-c25f07e85577" />


