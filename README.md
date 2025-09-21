# 🍕 Food E-Commerce Application 

A full-stack food delivery e-commerce application built with modern web technologies. This project consists of three main applications: a customer-facing frontend, an admin panel, and a backend API, providing a complete solution for food ordering and management.

## 📁 Project Structure

```
food-app/
├── food-app/                    # Customer Frontend (React + Vite)
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── AnimatedQuotes/  # Animated motivational quotes
│   │   │   ├── App Download/    # App download section
│   │   │   ├── Food/            # Food display components
│   │   │   ├── FoodItem/        # Individual food item cards
│   │   │   ├── Header/          # Hero section with call-to-action
│   │   │   ├── Login/           # Authentication popup
│   │   │   ├── Menu/            # Food menu with filtering
│   │   │   ├── Navbar/          # Navigation with search & filters
│   │   │   └── pages/           # Page components
│   │   │       ├── Cart/        # Shopping cart page
│   │   │       ├── Home/        # Landing page
│   │   │       └── PlaceOrder/  # Checkout page
│   │   ├── context/             # React Context for state management
│   │   └── assets/              # Static assets and data
│   └── public/                  # Public static files
├── admin/vite-project/          # Admin Panel (React + Vite)
│   ├── src/
│   │   ├── components/          # Admin UI components
│   │   │   ├── Navbar/          # Admin navigation
│   │   │   ├── Sidebar/         # Admin sidebar menu
│   │   │   └── Toast/           # Toast notifications
│   │   ├── pages/               # Admin pages
│   │   │   ├── Add/             # Add food items
│   │   │   ├── List/            # List all food items
│   │   │   └── Orders/          # Order management
│   │   └── admin_assets/        # Admin-specific assets
│   └── public/                  # Public admin assets
├── backend/                     # Backend API (Node.js + Express)
│   ├── config/                  # Database configuration
│   ├── controller/              # Request handlers
│   ├── models/                  # Database models
│   ├── routes/                  # API routes
│   ├── uploads/                 # File upload directory
│   └── middleware/              # Custom middleware
├── server/                      # Additional server components
├── routes/                      # Additional route definitions
└── frontend/                    # Legacy frontend components
```

## 🚀 Features

### Customer Frontend (`food-app/`)
- **🏠 Home Page**: Featured food items, categories, and call-to-action sections
- **🍽️ Menu**: Browse all available food items with advanced filtering and sorting
- **🔍 Search & Filter**: Real-time search and category-based filtering
- **🛒 Shopping Cart**: Add/remove items with quantity management
- **📱 Place Order**: Complete checkout process with order summary
- **👤 User Authentication**: Login/signup functionality with popup modal
- **💬 Animated Quotes**: Motivational quotes with floating animation
- **📱 Responsive Design**: Mobile-first responsive interface
- **🎨 Modern UI**: Clean, modern design with smooth animations

### Admin Panel (`admin/vite-project/`)
- **➕ Add Food Items**: Upload new food items with images and details
- **📋 List Management**: View, search, and manage all food items
- **📦 Order Management**: Track and manage customer orders
- **📊 Dashboard**: Overview of business metrics and operations
- **🔔 Toast Notifications**: Real-time feedback for user actions
- **📁 File Upload**: Image upload with preview functionality

### Backend API (`backend/`)
- **🔗 RESTful API**: Comprehensive food management endpoints
- **📸 Image Upload**: Multer middleware for file handling
- **🗄️ Database**: MongoDB with Mongoose ODM
- **🔐 Authentication**: JWT-based user authentication system
- **💳 Payment Integration**: Stripe payment processing
- **🛡️ Security**: Password hashing with bcrypt
- **🌐 CORS Support**: Cross-origin resource sharing enabled

## 🛠️ Technology Stack

### Frontend (Customer App)
- **React 19.0.0** - Modern React with latest features
- **Vite 6.2.0** - Fast build tool and development server
- **React Router DOM 7.4.0** - Client-side routing
- **React Icons 5.5.0** - Beautiful icon library
- **Context API** - State management for cart and user data

### Admin Panel
- **React 19.0.0** - UI framework
- **Vite 6.2.0** - Build tool and development server
- **React Router DOM 7.4.1** - Navigation and routing
- **Axios 1.8.4** - HTTP client for API communication
- **React Toastify 11.0.5** - Toast notification system

### Backend
- **Node.js** - Runtime environment
- **Express.js 4.21.2** - Web framework
- **MongoDB 8.13.0** - NoSQL database
- **Mongoose 8.13.0** - MongoDB object modeling
- **JWT 9.0.2** - JSON Web Token authentication
- **bcrypt 5.1.1** - Password hashing
- **Multer 1.4.5** - File upload middleware
- **Stripe 17.7.0** - Payment processing
- **CORS 2.8.5** - Cross-origin resource sharing
- **Validator 13.15.0** - Input validation

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <repository-url>
cd food-app
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=3000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/food-del
JWT_SECRET=your-jwt-secret
STRIPE_SECRET_KEY=your-stripe-secret-key
```

Start the backend server:
```bash
npm run dev
```

### 3. Customer Frontend Setup
```bash
cd food-app
npm install
```

Start the development server:
```bash
npm run dev
```

### 4. Admin Panel Setup
```bash
cd admin/vite-project
npm install
```

Start the admin panel:
```bash
npm run dev
```

## 🔧 API Endpoints

### Food Management
- `GET /api/foods/list` - Get all food items
- `POST /api/foods/upload` - Add new food item with image
- `POST /api/foods/remove` - Remove food item

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Orders
- `POST /api/orders/create` - Create new order
- `GET /api/orders/list` - Get all orders
- `PUT /api/orders/update` - Update order status

## 🗄️ Database Schema

### Food Model
```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required),
  countInStock: Number (required),
  category: String (required),
  imageUrl: String,
  timestamps: true
}
```

## 🎯 Usage

### For Customers
1. Visit the customer frontend (typically `http://localhost:5173`)
2. Browse food items and add them to cart
3. Complete checkout and place orders
4. Track order status

### For Administrators
1. Access the admin panel (typically `http://localhost:5174`)
2. Add new food items with images
3. Manage existing inventory
4. Process and track customer orders

## 🔒 Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=sk_test_your-stripe-key
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-key
```

## 📱 Available Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend (both customer and admin)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Ensure MongoDB connection is accessible
3. Deploy to platforms like Heroku, Railway, or Vercel

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or GitHub Pages

## 🏗️ Development Workflow

1. **Start Backend**: Always start the backend server first
2. **Start Frontend**: Launch customer app and admin panel
3. **Database**: Ensure MongoDB is running (local or Atlas)
4. **File Uploads**: Images are stored in `backend/uploads/`
5. **API Testing**: Use tools like Postman or Thunder Client

## 🔧 Troubleshooting

### Common Issues

**Backend not starting:**
- Check if MongoDB is running
- Verify `.env` file exists with correct values
- Ensure all dependencies are installed: `npm install`

**Frontend not loading:**
- Verify backend is running on correct port
- Check browser console for CORS errors
- Ensure all dependencies are installed

**Image uploads failing:**
- Check file permissions for `uploads/` folder
- Verify Multer configuration in routes
- Ensure file size limits are appropriate

**Database connection issues:**
- Verify MongoDB URI in `.env`
- Check network connectivity
- Ensure database user has correct permissions

## 🔄 Future Enhancements

- [ ] User authentication and profiles
- [ ] Order history and tracking
- [ ] Payment gateway integration
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Advanced search and recommendations

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature-name`
3. **Commit** your changes: `git commit -m 'Add feature'`
4. **Push** to the branch: `git push origin feature-name`
5. **Submit** a pull request

### Development Guidelines
- Follow React best practices and hooks patterns
- Use TypeScript for new components (optional)
- Write meaningful commit messages
- Test features across different browsers
- Ensure responsive design for mobile devices

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Simerjeet Singh**

---

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the troubleshooting section above
- Ensure all prerequisites are properly installed

---

**Note**: Make sure to update the MongoDB connection string and other sensitive information in the `.env` file before deploying to production. Never commit sensitive data to version control.

 
