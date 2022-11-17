import { Router, Request, Response } from 'express';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const preacherPutController = container.get('Apps.dosmi.controllers.PreacherPutController');
  router.put('/preachers/:id', (req: Request, res: Response) => preacherPutController.run(req, res));
};
