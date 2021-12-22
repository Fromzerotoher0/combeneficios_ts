import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './src/routes/routes';
import * as dotenv from 'dotenv';
import ErrorHandler from './src/helpers/errorHandler';
import HttpException from './src/helpers/httpException';
import { createConnection } from 'typeorm';

const app = express();

// Connection to the db
createConnection();

// To handle the cors
app.use(cors());
// To recognize the incoming request object as a json object
app.use(express.json({ limit: '50mb' }));
// To recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({ extended: true }));
// get the logs
app.use(morgan('dev'));
// Environment variables
dotenv.config({ path: './src/env/.env' });
//storage folder to upload the images
app.use('/public', express.static(`${__dirname}/storage`));
// Api routes
app.use('/api', routes);

// Wrong routes handler
app.all('*', (request, response, next) => {
  next(
    new HttpException(
      `no se encuentra la ruta ${request.originalUrl} en el servidor`,
      404
    )
  );
});

// Error handler
app.use(ErrorHandler);

app.listen(process.env.PORT);
console.log(`server running on port ${process.env.PORT}`);
