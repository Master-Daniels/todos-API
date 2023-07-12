import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import 'dotenv/config';

import indexApi from './api';

import MessageResponse from './interfaces/MessageResponse';

const app = express();

app.use(morgan('combined'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Hello World',
  });
});

app.use('/api/v1', indexApi);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
