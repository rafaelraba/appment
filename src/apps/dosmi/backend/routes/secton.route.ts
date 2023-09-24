import { Request, Response, Router } from 'express';
import StatusGetController from '../controllers/StatusGetController';
import { container } from '../dependency-injection';

export const register = (router: Router) => {
  const controller: StatusGetController = container.get('Apps.dosmi.controllers.SectionsGetController');
  router.get('/sections', (req: Request, res: Response) => controller.run(req, res));
};
