import { Request, Response } from 'express';

export function HelloTypescript(request: Request, response: Response) {
  return response.json({ message: 'Hello TypeScript!' });
};
