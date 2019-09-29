import express, { Request, Response } from 'express';
import { CREATED, OK } from 'http-status-codes';
import createUserToken from '../../utils/create-token';
import CONFIG from '../../config/config';
import getPendingListings from './responses/get-pending-listings.json';
import getPendingExerts from './responses/get-pending-experts.json';
import getExpertById from './responses/get-expert-by-id.json';
import getListingById from './responses/get-listing-by-id.json';

const adminRouter = express.Router();

adminRouter.post('/login', (req: Request, res: Response) => {
  const token = createUserToken('1');
  res.status(CREATED).cookie(CONFIG.cookies.admin, token, {
    maxAge: CONFIG.authTokenExpiryDate,
    httpOnly: true,
  });

  res.sendStatus(OK);
});

adminRouter.post('/logout', (req: Request, res: Response) => {
  res.clearCookie(CONFIG.cookies.admin);
  res.sendStatus(OK);
});

adminRouter.get('/expert/pending', (req: Request, res: Response) => {
  res.status(OK).json(getPendingExerts);
});

adminRouter.get('/expert/:id', (req: Request, res: Response) => {
  res.status(OK).json(getExpertById);
});

adminRouter.put('/expert/approve/:id', (req: Request, res: Response) => {
  res.sendStatus(OK);
});

adminRouter.get('/listing/pending', (req: Request, res: Response) => {
  res.status(OK).json(getPendingListings);
});

adminRouter.get('/listing/:id', (req: Request, res: Response) => {
  res.status(OK).json(getListingById);
});

adminRouter.put('/listing/approve/:id', (req: Request, res: Response) => {
  res.sendStatus(OK);
});

export default adminRouter;
