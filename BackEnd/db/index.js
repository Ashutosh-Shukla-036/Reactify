import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Database connected successfully...');
    } catch(error) {
        console.log('Failed to connect database' + error);
        process.exit(1);
    }
}

export default ConnectDB;