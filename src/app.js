const Router = require('./routes/UserRoute');
// import express from "express";
// import cors from "cors";
// import helmet from 'helmet'
// import morgan from 'morgan'

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');

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

module.exports = app;
