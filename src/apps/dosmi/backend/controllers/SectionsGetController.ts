import { Controller } from './Controller';
import { Request, Response } from 'express';
import { SectionsSearcher } from '../../../../Contexts/Dosmi/Sections/application/search/SectionsSearcher';
import httpStatus from 'http-status';

export class SectionsGetController implements Controller {
  private readonly sectionsSearcher: SectionsSearcher;

  constructor(sectionsSearcher: SectionsSearcher) {
    this.sectionsSearcher = sectionsSearcher;
  }

  async run(req: Request, res: Response): Promise<void> {
    const sections = await this.sectionsSearcher.run();
    res.status(httpStatus.OK).send(sections);
  }
}
