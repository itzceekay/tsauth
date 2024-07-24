import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(8081, () => {
    console.log("server running");
} )

const MONGO_URL = 'mongodb+srv://kirustudiesalot:6CCXU9RFxacv22FI@cluster0.tmqzjrs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error)=> console.log(error));


