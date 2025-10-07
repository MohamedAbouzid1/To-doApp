import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo App API',
      version: '1.0.0',
      description: 'A simple Todo application API with JWT authentication',
      contact: {
        name: 'API Support',
        email: 'support@example.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT token obtained from login/register endpoints'
        }
      },
      schemas: {
        User: {
          type: 'object',
          required: ['username', 'password'],
          properties: {
            username: {
              type: 'string',
              description: 'User email/username',
              example: 'user@example.com'
            },
            password: {
              type: 'string',
              description: 'User password (minimum 6 characters)',
              example: 'password123'
            }
          }
        },
        Todo: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'Todo ID',
              example: 1
            },
            user_id: {
              type: 'integer',
              description: 'User ID who owns this todo',
              example: 1
            },
            task: {
              type: 'string',
              description: 'Todo task description',
              example: 'Complete the project'
            },
            completed: {
              type: 'boolean',
              description: 'Whether the todo is completed',
              example: false
            }
          }
        },
        AuthResponse: {
          type: 'object',
          properties: {
            token: {
              type: 'string',
              description: 'JWT token for authentication',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Error message',
              example: 'User not found'
            }
          }
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./src/routes/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
