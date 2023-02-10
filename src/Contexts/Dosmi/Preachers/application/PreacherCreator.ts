import { Preacher } from '../domain/Preacher';
import { PreacherRepository } from '../domain/PreacherRepository';

export class PreacherCreator {
  private repository: PreacherRepository;

  constructor(repository: PreacherRepository) {
    this.repository = repository;
  }

  async run(id: string, name: string, duration: string): Promise<void> {
    const preacher = new Preacher({ id, name, duration });

    return this.repository.save(preacher);
  }
}
