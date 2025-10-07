import  express, { Router } from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js'
import authMidlleware from './middleware/authMiddleware.js';
import { specs, swaggerUi } from './swagger.js';

const app = express();

const PORT = process.env.PORT || 5000; 

// get the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url);

// get the directory name from the file path
const __dirname = dirname(__filename); 

// MIDDLEWARE
// middleware telling the app to expect json
app.use(express.json());

// middleware telling our code to look for the public dir not in the src folder but one level above
app.use(express.static(path.join(__dirname, '../public')));


// getting the html from the public directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
})

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'Todo App API Documentation'
}));

// ROUTES
app.use('/auth', authRoutes);
app.use('/todos', authMidlleware, todoRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
