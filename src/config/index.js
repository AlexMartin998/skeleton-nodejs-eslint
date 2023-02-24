import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'producction') config();

export const PORT = process.env.PORT;
export const MONGODB_URI = process.env.MONGODB_URI;
