import dotenv from 'dotenv';

dotenv.config({ quiet: true });

if (!process.env.EMAIL_USER) {
  throw new Error(
    'EMAIL_USER no configurado'
  );
}

if (!process.env.EMAIL_PASS) {
  throw new Error(
    'EMAIL_PASS no configurado'
  );
}

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS
};