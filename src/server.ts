// const express = require('express'); CommonJS

import express from 'express';  // ES Modules
import 'dotenv/config';

import router from './router';

import { connectDB } from './config/db';

const app = express();

connectDB();

//* leer datos del formulario
app.use(express.json());

app.use('/', router);

export default app;