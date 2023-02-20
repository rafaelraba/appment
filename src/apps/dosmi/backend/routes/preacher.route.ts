import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { PreachersPutController } from '../controllers/PreachersPutController';
import { body } from "express-validator";
import { validateReqSchema } from "./index";

export const register = (router: Router) => {
  const reqSchema = [
    body('name').exists().isString(),
    body('gender').exists().isString(),
    body('state').exists().isString(),
    body('type').exists().isString(),
  ]
  const preachersPutController: PreachersPutController = container.get('Apps.dosmi.controllers.PreachersPutController');
  router.put('/preachers/:id', reqSchema, validateReqSchema, (req: Request, res: Response) => preachersPutController.run(req, res));
};


