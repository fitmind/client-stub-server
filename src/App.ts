import express, {  Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { CREATED, OK } from 'http-status-codes';
import exampleResponse from './responses/example-response';

const createApp = (app: express.Application): express.Application => {
  app.use(
    helmet({
      hidePoweredBy: true,
    }),
  );
  app.use(compression());
  app.use(cors());
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
    res.status(CREATED);
  });

  return app;
};

export default createApp;
