import { Request, Response, NextFunction } from 'express';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];
  if (token === 'Password123') {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
};
