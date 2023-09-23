import { Controller } from './Controller';
import { Request, Response } from 'express';
import { SectionSearcher } from '../../../../Contexts/Dosmi/Sections/application/search/SectionSearcher';
import httpStatus from 'http-status';

export class SectionsGetController implements Controller {
  private readonly sectionSearcher: SectionSearcher;

  constructor(sectionSearcher: SectionSearcher) {
    this.sectionSearcher = sectionSearcher;
  }

  async run(req: Request, res: Response): Promise<void> {
    const sections = await this.sectionSearcher.run();
    res.status(httpStatus.OK).send(sections);
  }
}
