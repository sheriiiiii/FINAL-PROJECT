import express from 'express';
import { router } from './routes/routes';
import cors from 'cors';
import { Server } from 'http';

export const app = express();
const port = Number(process.env.PORT);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Body: ${JSON.stringify(req.body)}`);
  console.log(`Request Headers: ${JSON.stringify(req.headers)}`);
  res.on('finish', () => {
    console.log(`Response Status: ${res.statusCode}`);
    console.log(`Response Message: ${res.statusMessage}`);
  });
  next();
});

// Error handling middleware
interface ErrorRequestHandler {
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): any;
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  res.status(500).send('Server Error');
};

app.use(errorHandler);

app.use('/', router);

export const server: Server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
