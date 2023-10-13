import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import { PreacherCreator } from '../../../../Contexts/Dosmi/Preachers/application/create/PreacherCreator';

type PreacherPutRequest = Request & {
  body: {
    name: string;
    gender: string;
    state: string;
    type: string;
    birthdate: string;
    baptismDate: string;
    privilege: string;
  };
};

export class PreachersPutController implements Controller {
  private readonly preacherCreator: PreacherCreator;

  constructor(preacherCreator: PreacherCreator) {
    this.preacherCreator = preacherCreator;
  }

  async run(req: PreacherPutRequest, res: Response): Promise<void> {
    const id = req.params.id;
    const { name, gender, type, privilege, state, birthdate, baptismDate } = req.body;
    await this.preacherCreator.run({ id, name, gender, type, privilege, state, birthdate, baptismDate });
    res.status(httpStatus.CREATED).send();
  }
}
