# Todo App - Backend Development Project

A REST API backend built with Node.js, Express.js, PostgreSQL, and Prisma ORM. Demonstrates modern backend development practices including authentication, database management, containerization, and API documentation.

## 🚀 Key Features

- **REST API** with CRUD operations for todos
- **JWT Authentication** with secure password hashing
- **PostgreSQL Database** with Prisma ORM
- **Docker Containerization** for easy deployment
- **Swagger API Documentation** for testing endpoints
- **Type-safe Database Operations** with Prisma Client

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT, bcryptjs
- **Documentation**: Swagger UI
- **Containerization**: Docker, Docker Compose

## 🚀 Quick Start

```bash
# Clone and start with Docker
git clone https://github.com/MohamedAbouzid1/To-doApp
cd To-doApp
docker-compose up --build
```

**Access Points:**

- **API**: http://localhost:5000
- **Documentation**: http://localhost:5000/api-docs

## 📖 API Endpoints

**Authentication:**

- `POST /auth/register` - Register user
- `POST /auth/login` - Login user

**Todos (JWT Required):**

- `GET /todos` - Get user's todos
- `POST /todos` - Create todo
- `PUT /todos/:id` - Update todo
- `DELETE /todos/:id` - Delete todo

**Testing:** Use Swagger UI at `/api-docs` for interactive API testing

## 🏗️ Project Structure

```
src/
├── routes/           # API endpoints
├── middleware/       # Authentication middleware
├── prismaClient.js   # Database client
└── server.js         # Express server

prisma/
├── schema.prisma     # Database schema
└── migrations/       # Database migrations

docker-compose.yaml   # Container orchestration
```

## 🔐 Security & Features

- **JWT Authentication** with bcrypt password hashing
- **Prisma ORM** for type-safe database operations
- **Docker containerization** for consistent deployment
- **Swagger documentation** for API testing
- **PostgreSQL** database with proper relationships

## 📝 About

This project demonstrates modern backend development practices using Node.js, Express.js, and PostgreSQL with Prisma ORM. Built to showcase REST API design, authentication, database management, and containerization skills.
