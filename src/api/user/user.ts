import express, { Request, Response } from 'express';
import { CREATED, OK, UNAUTHORIZED } from 'http-status-codes';
import createUserToken from '../../utils/create-token';
import CONFIG from '../../config/config';
import getUserMeResponse from './responses/get-user-response.json';

const userRouter = express.Router();

userRouter.post('/user/register', (req: Request, res: Response) => {
  res.sendStatus(CREATED);
});

userRouter.post('/user/login', (req: Request, res: Response) => {
  const token = createUserToken('1');
  res.status(CREATED).cookie(CONFIG.cookies.user, token, {
    maxAge: CONFIG.authTokenExpiryDate,
    httpOnly: true,
  });

  res.sendStatus(CREATED);
});

userRouter.post('/user/logout', (req: Request, res: Response) => {
  res.clearCookie(CONFIG.cookies.user);
  res.sendStatus(OK);
});

userRouter.get('/user/me', (req: Request, res: Response) => {
  if (req.cookies[CONFIG.cookies.user]) {
    res.status(OK).json(getUserMeResponse);
  } else {
    res.sendStatus(UNAUTHORIZED);
  }
});

userRouter.put('/user/me', (req: Request, res: Response) => {
  if (req.cookies[CONFIG.cookies.user]) {
    res.sendStatus(OK);
  } else {
    res.sendStatus(UNAUTHORIZED);
  }
});

export default userRouter;
