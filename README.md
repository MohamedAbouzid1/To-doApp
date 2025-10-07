# Todo App - Backend Development Project

## A Comprehensive Backend Development Demonstration

A modern backend application built with Node.js, Express.js, PostgreSQL, Prisma ORM, and JWT authentication. This project demonstrates essential backend development concepts including REST API design, database management with ORM, authentication systems, containerization, and API documentation. Features a clean web interface for testing and comprehensive REST API with Swagger documentation.

## 🚀 Backend Development Features

- **REST API Architecture**: Complete CRUD operations with proper HTTP status codes and error handling
- **Database Management**: PostgreSQL with Prisma ORM for type-safe database operations and migrations
- **Authentication System**: JWT-based registration and login with secure password hashing
- **API Documentation**: Interactive Swagger UI for comprehensive endpoint testing and documentation
- **Containerization**: Docker and Docker Compose for consistent deployment environments
- **Security Implementation**: Password hashing with bcrypt, JWT tokens, and SQL injection protection
- **Type Safety**: Prisma Client with TypeScript support for robust development
- **Middleware Architecture**: Custom authentication middleware for route protection
- **Environment Configuration**: Proper environment variable management for different deployment stages

## 🛠️ Backend Tech Stack

- **Runtime**: Node.js (v22+)
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcryptjs
- **API Documentation**: Swagger UI with JSDoc
- **Containerization**: Docker, Docker Compose
- **Database Client**: Prisma Client with TypeScript support
- **HTTP Status Codes**: http-status-codes library
- **Testing Interface**: Simple HTML/CSS frontend for API testing

## 🎯 Backend Development Concepts Demonstrated

This project showcases essential backend development skills and concepts:

- **API Design**: RESTful API architecture with proper HTTP methods and status codes
- **Database Integration**: ORM usage with Prisma for database operations and migrations
- **Authentication & Authorization**: JWT token-based authentication with middleware
- **Security Best Practices**: Password hashing, input validation, and SQL injection prevention
- **Containerization**: Docker containerization for consistent deployment
- **API Documentation**: Swagger/OpenAPI documentation with interactive testing
- **Environment Management**: Configuration management for different environments
- **Error Handling**: Comprehensive error handling and status code management
- **Database Relationships**: One-to-many relationships between users and todos
- **Middleware Development**: Custom middleware for authentication and request processing

## 📋 Prerequisites

- Node.js (v22 or higher)
- npm (Node Package Manager)
- Docker and Docker Compose
- Git

## 🚀 Quick Start

### Option 1: Docker Setup (Recommended)

```bash
# Clone the repository
git clone https://github.com/MohamedAbouzid1/To-doApp
cd To-doApp

# Create environment file
cp .env.example .env
# Edit .env file with your configuration

# Start the application with Docker Compose
docker-compose up --build
```

### Option 2: Local Development

```bash
# Clone the repository
git clone https://github.com/MohamedAbouzid1/To-doApp
cd To-doApp

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env file with your configuration

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start the development server
npm run dev
```

### Environment Setup

Create a `.env` file in the root directory:

```env
JWT_SECRET=your_super_secret_jwt_key
PORT=5000
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/todoapp
NODE_ENV=development
```

The application will be available at:

- **Web App**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api-docs
- **Database**: PostgreSQL on port 5433 (when using Docker)

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
│   ├── generated/
│   │   └── prisma/            # Generated Prisma client
│   ├── prismaClient.js        # Prisma client configuration
│   ├── server.js              # Express server configuration
│   ├── swagger.js             # Swagger documentation setup
│   └── Dockerfile             # Docker configuration
├── prisma/
│   ├── migrations/            # Database migrations
│   └── schema.prisma          # Prisma schema definition
├── public/
│   ├── index.html             # Frontend application
│   ├── style.css              # Application styles
│   └── fanta.css              # Additional styling
├── docker-compose.yaml        # Docker Compose configuration
├── .env                       # Environment variables
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🔐 Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: Todo endpoints require valid JWT tokens
- **Input Validation**: Basic validation for user inputs
- **SQL Injection Protection**: Prisma ORM provides built-in protection against SQL injection
- **Type Safety**: Prisma Client ensures type-safe database operations
- **Environment Variables**: Sensitive data stored in environment variables
- **Container Security**: Docker containers with minimal attack surface

## 🧪 Development

### Available Scripts

```bash
npm run dev                    # Start development server with auto-reload
npx prisma generate           # Generate Prisma client
npx prisma migrate dev        # Run database migrations in development
npx prisma migrate deploy     # Deploy migrations in production
npx prisma studio            # Open Prisma Studio (database GUI)
npx prisma db push           # Push schema changes to database
npx prisma db pull           # Pull database schema to Prisma schema
```

### Prisma Commands

```bash
# Generate Prisma client after schema changes
npx prisma generate

# Create and apply a new migration
npx prisma migrate dev --name "migration_name"

# Reset database (development only)
npx prisma migrate reset

# View database in Prisma Studio
npx prisma studio
```

### Database Schema

The application uses Prisma ORM with PostgreSQL. Here's the Prisma schema:

```prisma
model User {
  id       Int    @id @default(autoincrement())
  username String @unique
  password String
  todo     Todo[]
}

model Todo {
  id        Int     @id @default(autoincrement())
  userId    Int
  task      String
  completed Boolean @default(false)
  user      User    @relation(fields: [userId], references: [id])
}
```

### Database Operations

All database operations are handled through Prisma Client, providing:

- **Type Safety**: Full TypeScript support with auto-completion
- **Query Optimization**: Efficient database queries with built-in optimizations
- **Migration Management**: Version-controlled database schema changes
- **Connection Pooling**: Automatic connection management

## 🐳 Docker Deployment

### Docker Compose Services

The application is containerized using Docker Compose with the following services:

- **app**: Node.js application container
- **db**: PostgreSQL database container

### Docker Configuration

```yaml
services:
  app:
    build:
      context: .
      dockerfile: src/Dockerfile
    container_name: todo-app
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/todoapp
      - NODE_ENV=development
    ports:
      - "5000:5000"
    depends_on:
      - db

  db:
    image: postgres:13-alpine
    container_name: postgres-db
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: todoapp
    ports:
      - "5433:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data
```

### Docker Commands

```bash
# Build and start all services
docker-compose up --build

# Start services in background
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f app
docker-compose logs -f db

# Access database directly
docker-compose exec db psql -U postgres -d todoapp

# Run Prisma migrations in container
docker-compose exec app npx prisma migrate deploy
```

## 🐛 Troubleshooting

### Common Issues

1. **Server won't start**:

   - Check if port 5000 is available
   - Verify Docker is running if using Docker setup
   - Ensure all environment variables are set correctly

2. **Authentication fails**:

   - Verify JWT_SECRET is set in .env
   - Check if the user exists in the database

3. **Database connection errors**:

   - Ensure PostgreSQL container is running: `docker-compose ps`
   - Check DATABASE_URL in .env file
   - Verify database credentials match Docker Compose configuration

4. **Prisma client errors**:

   - Run `npx prisma generate` to regenerate the client
   - For Docker: `docker-compose exec app npx prisma generate`
   - Run migrations: `npx prisma migrate dev` or `docker-compose exec app npx prisma migrate deploy`

5. **Docker issues**:

   - Rebuild containers: `docker-compose down && docker-compose up --build`
   - Check container logs: `docker-compose logs -f app`
   - Ensure Docker has enough resources allocated

6. **CORS issues**: All requests are from same origin, no CORS needed

## 🙏 Acknowledgments

- Built as part of a full-stack development course
- Uses modern web technologies and best practices
- Inspired by clean, minimal todo applications
