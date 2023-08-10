import { Controller } from './Controller';
import { Request, Response } from 'express';

export class SectionsGetController implements Controller {
  run(req: Request, res: Response): Promise<void> {
    return Promise.resolve(undefined);
  }
}
