//Import Statements
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'colors';
import { connectDb } from './database/configuration/config.js';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import helmet from 'helmet';
import { apiLimiter } from './middlewares/rateLimiter/rateLimiter.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for file path resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dotenv Configuration
dotenv.config();

// Express Object
const app = express();

// Middleware
app.use(cors({
    origin: "https://e-commerce-2024-frontend.onrender.com",
    methods: 'GET,POST,DELETE,PUT',
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization',
}));
app.use(express.json());
app.use(morgan('dev'));
// app.use(helmet()); // Uncomment if using helmet for security headers
app.use(apiLimiter);
app.use(cookieParser());

// Serve static files from 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'middlewares', 'multer', 'uploads')));

// Database Connection
connectDb();

// Routes
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/products', productRoutes);

// PORT
const PORT = process.env.PORT || 8080;

// Listening Port
app.listen(PORT, () => {
    console.log(`Welcome! Server Successfully Running At Port ${PORT}`.bgYellow.white);
});
