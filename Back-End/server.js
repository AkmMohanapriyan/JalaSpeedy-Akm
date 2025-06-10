
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import supplierRoutes from './routes/supplierRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Routes
app.use('/api/users', authRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/suppliers', supplierRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on localhost ${PORT}`));
