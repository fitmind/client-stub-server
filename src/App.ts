import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import userRouter from './api/user/user';
import expertRouter from './api/expert/expert';
import adminRouter from './api/admin/admin';

const createApp = (app: express.Application): express.Application => {
  app.use(
    helmet({
      hidePoweredBy: true,
    }),
  );
  app.use(compression());

  const CLIENT_PLATFORM_ORIGIN = process.env.CLIENT_ORIGIN;
  const ADMIN_PLATFORM_ORIGIN = process.env.ADMIN_ORIGIN;

  const whitelist = [CLIENT_PLATFORM_ORIGIN, ADMIN_PLATFORM_ORIGIN];

  const options: cors.CorsOptions = {
    credentials: true,
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void): void => {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };

  app.use(cors(options));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(morgan('dev'));

  app.get('/', (_req: Request, res: Response) => {
    res.send({ message: 'welcome to the Fitmind Stub API' });
  });

  app.use('/user', userRouter);
  app.use('/expert', expertRouter);
  app.use('/admin', adminRouter);

  return app;
};

export default createApp;
