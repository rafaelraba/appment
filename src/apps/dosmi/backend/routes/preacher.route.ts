import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {PreachersPutController} from '../controllers/PreachersPutController';

export const register = (router: Router) => {
  const preachersPutController: PreachersPutController = container.get('Apps.dosmi.controllers.PreachersPutController');
  router.put('/preachers/:id', (req: Request, res: Response) => preachersPutController.run(req, res));
};
