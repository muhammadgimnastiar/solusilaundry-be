import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import Router from './routes/UserRoute.js'
import dot from 'dotenv';
dot.config();

import middlewares from './middlewares.js';
import api from './api/index.js';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(Router);
app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});



app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
