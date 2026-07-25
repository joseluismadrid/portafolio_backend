import dotenv from 'dotenv';

dotenv.config({ quiet: true });

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  EMAIL_USER: process.env.EMAIL_USER ?? '',
  EMAIL_PASS: process.env.EMAIL_PASS ?? ''
};
