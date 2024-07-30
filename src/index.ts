import express, { Express } from 'express';
import dotenv from 'dotenv';
import projectRoutes from './routes/projectRoutes';
import exampleRoutes from './routes/exampleRoute'; // Import example routes

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/projects', projectRoutes);
app.use('/api/example', exampleRoutes); // Add example routes

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
