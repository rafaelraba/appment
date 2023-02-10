import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';

export class PreachersPutController implements Controller {
  constructor() {}

  async run(req: Request, res: Response): Promise<void> {
    res.status(httpStatus.CREATED).send();
  }
}
