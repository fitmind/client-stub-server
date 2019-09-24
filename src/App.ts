import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import { CREATED, OK, UNAUTHORIZED } from 'http-status-codes';
import morgan from 'morgan';
import CONFIG from './config/config';
import expertRegistrationSuccessResponse from './responses/expert-register-success-response';
import expertLoginSuccessResponse from './responses/expert-success-response';
import expertProfileUpdateSuccessResponse from './responses/expert-user-profile-response';
import expertUserUnAuthorizedResponse from './responses/expert-user-unauthorized-response';
import getExpertMeResponse from './responses/get-expert-response';
import logoutSuccessResponse from './responses/logout-success-response';
import createUserToken from './utils/create-token';
import userRouter from './api/user/user';

const createApp = (app: express.Application): express.Application => {
  app.use(
    helmet({
      hidePoweredBy: true,
    }),
  );
  app.use(compression());
  app.use(
    cors({
      origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
      credentials: true,
    }),
  );
  // app.use(cors())
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(morgan('dev'));

  app.get('/', (_req: Request, res: Response) => {
    res.send({ message: 'welcome to the Fitmind Stub API' });
  });

  app.use('/user', userRouter);

  app.post('/expert/register', (req: Request, res: Response) => {
    res.status(CREATED).json(expertRegistrationSuccessResponse);
  });

  app.post('/expert/login', (req: Request, res: Response) => {
    const token = createUserToken('1');
    res.status(201).cookie(CONFIG.cookies.expert, token, {
      maxAge: CONFIG.authTokenExpiryDate,
      httpOnly: true,
    });

    res.status(CREATED).json(expertLoginSuccessResponse);
  });
  app.get('/expert/me', (req: Request, res: Response) => {
    if (req.cookies[CONFIG.cookies.expert]) {
      res.status(OK).json(getExpertMeResponse);
    } else {
      res.status(UNAUTHORIZED).json(expertUserUnAuthorizedResponse);
    }
  });

  app.post('/expert/logout', (req: Request, res: Response) => {
    res.clearCookie(CONFIG.cookies.expert);
    res.status(OK).json(logoutSuccessResponse);
  });

  app.put('/expert/me', (req: Request, res: Response) => {
    if (req.cookies[CONFIG.cookies.expert]) {
      res.status(CREATED).json(expertProfileUpdateSuccessResponse);
    } else {
      res.status(UNAUTHORIZED).json(expertUserUnAuthorizedResponse);
    }
  });
  return app;
};

export default createApp;
