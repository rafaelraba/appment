import { SectionRepository } from '../../domain/SectionRepository';

export class SectionSearcher {
  private readonly repository: SectionRepository;

  constructor(repository: SectionRepository) {
    this.repository = repository;
  }

  async run() {
    await this.repository.search();
  }
}