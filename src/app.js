import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import 'dotenv/config';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js'; 
import errorHandler from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 8080;

console.log('MONGO_URL:', process.env.MONGO_URL);

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  console.error('MONGO_URL no está definida en las variables de entorno.');
  process.exit(1);
}

mongoose.set('strictQuery', false);

mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

app.use(express.json());
app.use(cookieParser());
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mocks', mocksRouter);

app.use(errorHandler);

const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
  server.close(() => process.exit(1));
});
