🍕 Food E-Commerce Application

This repository contains a complete food delivery e-commerce application built with modern web technologies. It combines three main applications: a customer-facing frontend, an administrator dashboard, and a backend API. Together, these create a full solution for food ordering, management, and payment processing.

📁 Project Structure

The project is organized into distinct modules for customer use, administration, and backend services.

The customer frontend (food-app/) is built with React and Vite. It contains reusable components such as navigation, food display cards, login popups, and cart functionality. Page-level components like Home, Menu, Cart, and Place Order define the customer journey, while state is managed globally through the React Context API.

The admin panel (admin/vite-project/) is also built with React and Vite. It provides tools for uploading food items, managing listings, processing orders, and viewing metrics. The interface includes navigation, sidebar menus, and toast notifications for real-time feedback.

The backend (backend/) uses Node.js with Express and MongoDB. It provides RESTful APIs for food management, authentication, and order handling. Additional features include image upload with Multer, JWT-based authentication, Stripe integration for payments, and middleware for security and validation.

Legacy and supporting files are included in server/, routes/, and frontend/.

🚀 Features

On the customer side, users can browse a responsive landing page with featured food items and categories, filter and search menus in real time, and manage a shopping cart with add/remove functionality. A simple checkout process summarizes the order before submission. Authentication is handled through login and signup popups. The interface is mobile-first, cleanly designed, and enhanced with smooth animations, including floating motivational quotes.

The admin panel allows administrators to upload new food items with images, manage existing inventory, and oversee customer orders. A dashboard presents an overview of business metrics, while toast notifications provide instant feedback. File uploads support previews to ensure accuracy.

The backend API exposes comprehensive endpoints for food, authentication, and orders. It uses JWT tokens for secure user sessions, bcrypt for password hashing, Multer for file handling, and Stripe for payment processing. CORS support ensures smooth communication with both the frontend and admin applications.

🛠️ Technology Stack

Customer Frontend: React 19.0.0, Vite 6.2.0, React Router DOM 7.4.0, React Icons 5.5.0, and the Context API for state management.

Admin Panel: React 19.0.0, Vite 6.2.0, React Router DOM 7.4.1, Axios 1.8.4, and React Toastify 11.0.5.

Backend: Node.js with Express 4.21.2, MongoDB 8.13.0 with Mongoose 8.13.0, JWT 9.0.2 for authentication, bcrypt 5.1.1 for password hashing, Multer 1.4.5 for uploads, Stripe 17.7.0 for payments, CORS 2.8.5, and Validator 13.15.0.

📦 Installation & Setup
Prerequisites

You’ll need Node.js (v18 or higher), a MongoDB Atlas account or local MongoDB instance, and npm or yarn.

Clone the Repository:

git clone <repository-url>
cd food-app


Backend Setup:

cd backend
npm install


Create a .env file in the backend/ folder:

PORT=3000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/food-del
JWT_SECRET=your-jwt-secret
STRIPE_SECRET_KEY=your-stripe-secret-key


Start the backend server:

npm run dev


Customer Frontend Setup:

cd food-app
npm install
npm run dev


Admin Panel Setup:

cd admin/vite-project
npm install
npm run dev

🔧 API Endpoints

Food Management:

GET /api/foods/list – Fetch all food items

POST /api/foods/upload – Add new food item with image

POST /api/foods/remove – Remove food item

Authentication:

POST /api/auth/register – Register new user

POST /api/auth/login – Authenticate user

Orders:

POST /api/orders/create – Create new order

GET /api/orders/list – Get all orders

PUT /api/orders/update – Update order status

🗄️ Database Schema

The Food model includes:

{
  name: String (required),
  description: String (required),
  price: Number (required),
  countInStock: Number (required),
  category: String (required),
  imageUrl: String,
  timestamps: true
}

🎯 Usage

For Customers: Visit the frontend (default: http://localhost:5173), browse items, add them to the cart, and place an order. You can then track order status.

For Administrators: Access the admin panel (default: http://localhost:5174), add new food items, manage inventory, and process orders.

🔒 Environment Variables

Your .env file in the backend should include:

PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=sk_test_your-stripe-key
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-key

📱 Available Scripts

Backend:

npm start – Run in production

npm run dev – Run in development with nodemon

Frontend (Customer & Admin):

npm run dev – Start dev server

npm run build – Build for production

npm run preview – Preview production build

npm run lint – Run ESLint checks

🚀 Deployment

To deploy the backend, configure environment variables on your hosting provider, ensure MongoDB is accessible, and push to platforms like Heroku, Railway, or Vercel. For the frontend apps, build the project (npm run build) and deploy the dist folder on services like Vercel, Netlify, or GitHub Pages.

🏗️ Development Workflow

Start the backend server first, then launch the customer and admin apps. Ensure MongoDB is running, as all data flows through it. File uploads are stored in backend/uploads/, and API testing can be done with tools like Postman or Thunder Client.

🔧 Troubleshooting

Backend not starting: Check MongoDB connectivity, verify .env variables, and ensure dependencies are installed.

Frontend issues: Confirm backend is running, check for CORS errors, and reinstall dependencies if needed.

Image upload failures: Check permissions for the uploads/ directory, verify Multer configuration, and confirm file size limits.

Database connection issues: Validate your MongoDB URI, ensure proper user permissions, and check network connectivity.

🔄 Future Enhancements

Planned improvements include user profiles, order history, real-time notifications, advanced analytics dashboards, multi-language support, smarter search, and mobile app development.

🤝 Contributing

To contribute, fork the repository, create a feature branch, commit your changes, and submit a pull request. Follow React best practices, write meaningful commits, and ensure mobile responsiveness across devices.

📄 License

This project is licensed under the ISC License.

👨‍💻 Author

Simerjeet Singh

📞 Support

For help, open an issue in the repository, refer to the troubleshooting section, or double-check that all prerequisites are installed correctly
