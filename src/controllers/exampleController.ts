import { Request, Response } from 'express';
// Get example data
export const getExample = (req: Request, res: Response) => {
  res.status(200).json({ message: 'GET request successful' });
};

// Create example data
export const createExample = (req: Request, res: Response) => {
  const data = req.body;
  // Process the data
  res.status(201).json({ message: 'POST request successful', data });
};
