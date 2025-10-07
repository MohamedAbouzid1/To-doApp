# Todo App API Documentation

## Swagger UI

This project includes Swagger UI for interactive API documentation. Once the server is running, you can access the documentation at:

**http://localhost:5000/api-docs**

## Features

- **Interactive API Testing**: Test all endpoints directly from the browser
- **Authentication Support**: JWT Bearer token authentication
- **Complete Schema Documentation**: All request/response schemas are documented
- **Error Response Examples**: Common error responses are documented

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user

### Todos (Requires Authentication)

- `GET /todos` - Get all todos for the authenticated user
- `POST /todos` - Create a new todo
- `PUT /todos/:id` - Update a todo's completion status
- `DELETE /todos/:id` - Delete a todo

## How to Use Swagger UI

1. Start the server: `npm run dev`
2. Open your browser and go to `http://localhost:5000/api-docs`
3. To test authenticated endpoints:
   - First, register or login using the `/auth/register` or `/auth/login` endpoints
   - Copy the JWT token from the response
   - Click the "Authorize" button at the top of the Swagger UI
   - Enter: `Bearer YOUR_JWT_TOKEN_HERE`
   - Now you can test all the todo endpoints

## Authentication

All todo endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

## Example Usage

1. **Register a new user:**

   ```json
   POST /auth/register
   {
     "username": "user@example.com",
     "password": "password123"
   }
   ```

2. **Login:**

   ```json
   POST /auth/login
   {
     "username": "user@example.com",
     "password": "password123"
   }
   ```

3. **Create a todo (with JWT token):**
   ```json
   POST /todos
   Authorization: Bearer YOUR_JWT_TOKEN
   {
     "task": "Complete the project"
   }
   ```
