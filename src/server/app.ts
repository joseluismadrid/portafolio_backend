import express from 'express';
import cors from 'cors';

import contactRoute from '../router/contact.router';

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  '/api/contact',
  contactRoute
);

export default app;