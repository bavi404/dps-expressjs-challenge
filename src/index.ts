import express, { Express } from 'express';
import dotenv from 'dotenv';
import exampleRoute from './routes/exampleRoute';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Use routes
app.use('/api/example', exampleRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
