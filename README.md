# Todo App - Full Stack Web Application

A modern full-stack Todo application built with Node.js, Express.js, SQLite, and JWT authentication. Features a clean web interface and comprehensive REST API with Swagger documentation.

## 🚀 Features

- **User Authentication**: JWT-based registration and login system
- **Todo Management**: Create, read, update, and delete todos
- **Real-time UI**: Dynamic dashboard with task filtering
- **REST API**: Complete CRUD operations with proper error handling
- **API Documentation**: Interactive Swagger UI for testing endpoints
- **Security**: Password hashing with bcrypt and JWT token authentication
- **Database**: SQLite with in-memory storage for development

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: SQLite (in-memory)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcryptjs
- **API Documentation**: Swagger UI
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Icons**: Font Awesome

## 📋 Prerequisites

- Node.js (v22 or higher)
- npm (Node Package Manager)

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/MohamedAbouzid1/To-doApp

# Install dependencies
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
JWT_SECRET=your_super_secret_jwt_key
PORT=5000
```

### 3. Run the Application

```bash
# Start the development server
npm run dev
```

The application will be available at:

- **Web App**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api-docs

## 📖 Usage

### Web Application

1. **Register/Login**: Create an account or login with existing credentials
2. **Dashboard**: View your todos with filtering options (All, Open, Complete)
3. **Add Todos**: Use the input field to add new tasks
4. **Manage Todos**: Mark tasks as complete or delete them
5. **Real-time Updates**: The interface updates automatically

### API Endpoints

#### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user

#### Todos (Requires JWT Authentication)

- `GET /todos` - Get all todos for authenticated user
- `POST /todos` - Create a new todo
- `PUT /todos/:id` - Update todo completion status
- `DELETE /todos/:id` - Delete a todo

## 🔧 API Documentation

Interactive API documentation is available at `/api-docs` using Swagger UI.

### Testing with Swagger UI

1. Open http://localhost:5000/api-docs
2. Register or login to get a JWT token
3. Click "Authorize" and enter: `Bearer YOUR_JWT_TOKEN`
4. Test all endpoints directly from the browser

### Example API Usage

```bash
# Register a new user
curl -X POST http://localhost:5000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "user@example.com", "password": "password123"}'

# Login
curl -X POST http://localhost:5000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "user@example.com", "password": "password123"}'

# Get todos (replace TOKEN with actual JWT)
curl -X GET http://localhost:5000/todos \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Create a todo
curl -X POST http://localhost:5000/todos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"task": "Complete the project"}'
```

## 🏗️ Project Structure

```
chapter3/
├── src/
│   ├── routes/
│   │   ├── authRoutes.js      # Authentication endpoints
│   │   └── todoRoutes.js      # Todo CRUD endpoints
│   ├── middleware/
│   │   └── authMiddleware.js   # JWT authentication middleware
│   ├── db.js                  # SQLite database setup
│   ├── server.js              # Express server configuration
│   └── swagger.js             # Swagger documentation setup
├── public/
│   ├── index.html             # Frontend application
│   ├── style.css              # Application styles
│   └── fanta.css              # Additional styling
├── .env                       # Environment variables
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🔐 Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: Todo endpoints require valid JWT tokens
- **Input Validation**: Basic validation for user inputs
- **SQL Injection Protection**: Parameterized queries with SQLite

## 🧪 Development

### Available Scripts

```bash
npm run dev    # Start development server with auto-reload
```

### Database Schema

```sql
-- Users table
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
);

-- Todos table
CREATE TABLE todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    task TEXT,
    completed BOOLEAN DEFAULT 0,
    FOREIGN KEY(user_id) REFERENCES users(id)
);
```

## 🐛 Troubleshooting

### Common Issues

1. **Server won't start**: Check if port 5000 is available
2. **Authentication fails**: Verify JWT_SECRET is set in .env
3. **Database errors**: The app uses in-memory SQLite, data resets on restart
4. **CORS issues**: All requests are from same origin, no CORS needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built as part of a full-stack development course
- Uses modern web technologies and best practices
- Inspired by clean, minimal todo applications
