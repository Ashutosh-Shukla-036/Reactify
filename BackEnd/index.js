import express from 'express';
import ConnectDB from './db/index.js';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js'
import transactionRoute from './routes/tranactionRoute.js'
import friendRoute from './routes/friendRoute.js'
import cors from 'cors'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

ConnectDB();

app.use('/api',userRoute);
app.use('/api/transaction',transactionRoute);
app.use('/api/friend',friendRoute);

app.get('/', (req,res) => {
    res.status(200).send('Backend is Up...');
})

app.listen(process.env.PORT);