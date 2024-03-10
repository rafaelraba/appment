import { Request, Response, Router } from 'express';
import { container } from '../dependency-injection';
import { SectionsGetController } from "../controllers/SectionsGetController";

export const register = (router: Router) => {
  const controller: SectionsGetController = container.get('Apps.dosmi.controllers.SectionsGetController');
  router.get('/sections', (req: Request, res: Response) => controller.run(req, res));
};
