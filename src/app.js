import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { config } from 'dotenv';
import { documentsRoute } from './app/http/index.js';
import queue from './app/queue/index.js';

config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/documents', documentsRoute());

queue();

export default app;