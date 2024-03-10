import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import { PublisherCreator } from '../../../../Contexts/Dosmi/Publishers/application/create/PublisherCreator';

type PublisherPutRequest = Request & {
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

export class PublishersPutController implements Controller {
  private readonly publisherCreator: PublisherCreator;

  constructor(publisherCreator: PublisherCreator) {
    this.publisherCreator = publisherCreator;
  }

  async run(req: PublisherPutRequest, res: Response): Promise<void> {
    const id = req.params.id;
    const { name, gender, type, privilege, state, birthdate, baptismDate } = req.body;
    await this.publisherCreator.run({ id, name, gender, type, privilege, state, birthdate, baptismDate });
    res.status(httpStatus.CREATED).send();
  }
}
