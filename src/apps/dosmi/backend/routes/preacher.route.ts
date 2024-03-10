import { Router, Request, Response } from 'express';
import { container } from '../dependency-injection';
import { PublishersPutController } from '../controllers/PublishersPutController';
import { body } from "express-validator";
import { validateReqSchema } from "./index";

export const register = (router: Router) => {
  const reqSchema = [
    body('name').exists().isString(),
    body('gender').exists().isString(),
    body('state').exists().isString(),
    body('type').exists().isString(),
  ]
  const publishersPutController: PublishersPutController = container.get('Apps.dosmi.controllers.PublishersPutController');
  router.put('/publishers/:id', reqSchema, validateReqSchema, (req: Request, res: Response) => publishersPutController.run(req, res));
};
