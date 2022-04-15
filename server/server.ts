require('dotenv').config();

import { Request, Response } from 'express';
import express from 'express';
import auth from './routes/auth'
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

const mongoUrl: string = process.env.MONGO_URL as string;

mongoose.connect(
    mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
        console.log('Connected to MongoDB');
    }
);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use('/auth', auth);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
