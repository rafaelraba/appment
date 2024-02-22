import { SectionRepository } from '../../domain/SectionRepository';

export class SectionsSearcher {
  private readonly repository: SectionRepository;

  constructor(repository: SectionRepository) {
    this.repository = repository;
  }

  async run() {
    const sections = await this.repository.search()
    return sections.map(section => section.toPrimitives());
  }
}
