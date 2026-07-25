import express from 'express';
import cors from 'cors';

import contactRoute from '../router/contact.router';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Portafolio backend activo'
  });
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'OK'
  });
});

app.use(
  '/api/contact',
  contactRoute
);

export default app;
