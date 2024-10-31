import express from 'express';
import ConnectDB from './db/index.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

ConnectDB();

app.listen(process.env.PORT || 300);