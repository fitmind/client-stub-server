import express, { Request, Response } from 'express';
import { CREATED } from 'http-status-codes';

const listingRouter = express.Router();

listingRouter.post('/new', (req: Request, res: Response) => {
  res.sendStatus(CREATED);
});

export default listingRouter;
