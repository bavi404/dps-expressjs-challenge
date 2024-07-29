import { Router } from 'express';
import { getExample, createExample } from '../controllers/exampleController';

const router = Router();

// Define your routes here
router.get('/', getExample);
router.post('/', createExample);

export default router;
