# 🗂️ G-Drive Clone

A full-stack cloud-based file management system inspired by Google Drive.  
Built using the MERN stack (MongoDB, Express, React, Node.js) with features like file upload, view, rename, delete, authentication, and real-time stats.

> 🔗 **Live Demo:** https://gp-drive-w9b5.vercel.app/

---

## ✨ Features

- ✅ User authentication with JWT
- 📤 Upload files of any type via Cloudinary
- 🧾 View uploaded files in **grid or list view**
- 📂 Filter by file type (Image, Video, Document, Other)
- 🔍 Search files by name
- 🧠 File size and type display with dynamic stats
- 🗑️ Rename & delete files with confirmation
- 🧭 Modern UI with Tailwind CSS
- 🔐 Protected routes & secure storage

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Storage:** Cloudinary + Multer
- **Auth:** JWT (JSON Web Token)
- **Tools:** Postman, Vercel, MongoDB Atlas

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account
- Cloudinary account

### 1. Clone the Repository

```bash
git clone https://github.com/ganeshppawar12/GpDrive.git
cd GpDrive

cd gp-drive-backend
npm install

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
