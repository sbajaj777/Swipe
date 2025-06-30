<h1 align="center">Swipe ✨</h1>

<p align="center">
A full-stack swipe-based matchmaking app built with the MERN stack.<br />
Includes authentication, real-time chat, notifications, profile matching, and more.
</p>

---

## 🔥 Features

- 🔐 Authentication System with JWT  
- 🛡️ Route Protection  
- 👤 User Profile Creation & Updates  
- 🖼️ Profile Image Upload via Cloudinary  
- 🔄 Swipe Left / Right Match Feature (with location-based filtering)  
- 💬 Real-time Chat Messaging (Socket.IO)  
- 🔔 Real-time Notifications  
- 🤝 Intelligent Matching Algorithm  
- 📱 Fully Responsive Mobile Design  
- ⌛ Production-Ready Optimized Build  

---

## ⚙️ Tech Stack

**Frontend**  
- React (Vite)  
- Tailwind CSS  
- Zustand  
- Axios  

**Backend**  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Socket.IO  
- Cloudinary  

---

## 🧪 Local Development Setup

```bash
git clone https://github.com/sbajaj777/Swipe.git
cd Swipe
```

Create a `.env` file inside the `/api` directory and add the following:

```env
PORT=5000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
NODE_ENV=development
CLIENT_URL=http://localhost:5173
CLOUDINARY_API_KEY=<your_cloudinary_key>
CLOUDINARY_API_SECRET=<your_cloudinary_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
```

Run the backend:

```bash
cd api
npm install
npm start
```

Run the frontend:

```bash
cd ../client
npm install
npm run dev
```

The app will be available at: `http://localhost:5173`

---

## 🏗️ Build for Production

```bash
npm run build
```

Make sure `NODE_ENV=production` is set in your `.env` file.

---

## 👨‍💻 Author

Built with ❤️ by [Shivam Bajaj](https://github.com/sbajaj777)

---

## 🌟 Feedback

If you like this project, consider giving it a ⭐ on GitHub!  
Feel free to open an issue or PR with suggestions or improvements.
