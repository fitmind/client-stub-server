import express, { Request, Response } from 'express';
import { CREATED, OK, UNAUTHORIZED } from 'http-status-codes';
import createUserToken from '../../utils/create-token';
import CONFIG from '../../config/config';
import getExpertMe from './responses/get-expert-response.json';

const expertRouter = express.Router();

expertRouter.post('/register', (req: Request, res: Response) => {
  res.sendStatus(CREATED);
});

expertRouter.post('/login', (req: Request, res: Response) => {
  const token = createUserToken('1');
  res.status(CREATED).cookie(CONFIG.cookies.expert, token, {
    maxAge: CONFIG.authTokenExpiryDate,
    httpOnly: true,
  });

  res.sendStatus(CREATED);
});

expertRouter.post('/logout', (req: Request, res: Response) => {
  res.clearCookie(CONFIG.cookies.expert);
  res.sendStatus(OK);
});

expertRouter.get('/me', (req: Request, res: Response) => {
  if (req.cookies[CONFIG.cookies.expert]) {
    res.status(OK).json(getExpertMe);
  } else {
    res.sendStatus(UNAUTHORIZED);
  }
});

expertRouter.put('/me', (req: Request, res: Response) => {
  if (req.cookies[CONFIG.cookies.expert]) {
    res.sendStatus(OK);
  } else {
    res.sendStatus(UNAUTHORIZED);
  }
});

export default expertRouter;
