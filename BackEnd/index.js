import express from 'express';
import ConnectDB from './db/index.js';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js'
import transactionRoute from './routes/tranactionRoute.js'
dotenv.config();

const app = express();
app.use(express.json());

ConnectDB();

app.use('/api',userRoute);
app.use('/api/transaction',transactionRoute);

app.listen(process.env.PORT || 300);