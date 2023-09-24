import { SectionRepository } from '../../domain/SectionRepository';

export class SectionsSearcher {
  private readonly repository: SectionRepository;

  constructor(repository: SectionRepository) {
    this.repository = repository;
  }

  async run() {
    return await this.repository.search();
  }
}
