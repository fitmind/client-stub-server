import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import { CREATED, OK, UNAUTHORIZED } from 'http-status-codes';
import morgan from 'morgan';
import CONFIG from './config/config';
import customerDashboardResponse from './responses/customer-dashboard-response';
import customerDashboardUnAuthorizedResponse from './responses/customer-dashboard-unauthorized-response';
import customerRegistrationSuccessResponse from './responses/customer-register-success-response';
import customerProfileUpdateSuccessResponse from './responses/customer-user-profile-response';
import customerUserdUnAuthorizedResponse from './responses/customer-user-unauthorized-response';
import exampleResponse from './responses/example-response';
import expertRegistrationSuccessResponse from './responses/expert-register-success-response';
import expertLoginSuccessResponse from './responses/expert-success-response';
import expertUserdUnAuthorizedResponse from './responses/expert-user-unauthorized-response';
import getExpertMeResponse from './responses/get-expert-response';
import getUserMeResponse from './responses/get-user-response';
import loginSuccessResponse from './responses/login-success-response';
import logoutSuccessResponse from './responses/logout-success-response';
import createUserToken from './utils/create-token';

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

  app.get('/example-response', (req: Request, res: Response) => {
    res.status(OK).json(exampleResponse);
  });

  app.post('/user/register', (req: Request, res: Response) => {
    res.status(CREATED).json(customerRegistrationSuccessResponse);
  });

  app.post('/user/login', (req: Request, res: Response) => {
    const token = createUserToken('1');
    res.status(201).cookie(CONFIG.cookies.user, token, {
      maxAge: CONFIG.authTokenExpiryDate,
      httpOnly: true,
    });

    res.status(CREATED).json(loginSuccessResponse);
  });

  app.get('/user/me', (req: Request, res: Response) => {
    if (req.cookies[CONFIG.cookies.user]) {
      res.status(OK).json(getUserMeResponse);
    } else {
      res.status(UNAUTHORIZED).json(customerUserdUnAuthorizedResponse);
    }
  });

  app.put('/user/me', (req: Request, res: Response) => {
    if (req.cookies[CONFIG.cookies.user]) {
      res.status(CREATED).json(customerProfileUpdateSuccessResponse);
    } else {
      res.status(UNAUTHORIZED).json(customerUserdUnAuthorizedResponse);
    }
  });

  app.get('/user/dashboard', (req: Request, res: Response) => {
    if (req.cookies[CONFIG.cookies.user]) {
      res.status(OK).json(customerDashboardResponse);
    } else {
      res.status(UNAUTHORIZED).json(customerDashboardUnAuthorizedResponse);
    }
  });

  app.post('/user/logout', (req: Request, res: Response) => {
    res.clearCookie(CONFIG.cookies.user);
    res.status(OK).json(logoutSuccessResponse);
  });

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
      res.status(UNAUTHORIZED).json(expertUserdUnAuthorizedResponse);
    }
  });

  app.post('/expert/logout', (req: Request, res: Response) => {
    res.clearCookie(CONFIG.cookies.expert);
    res.status(OK).json(logoutSuccessResponse);
  });
  return app;
};

export default createApp;
