import { Preacher } from '../domain/Preacher';
import { PreacherRepository } from '../domain/PreacherRepository';

export class PreacherCreator {
  private repository: PreacherRepository;

  constructor(repository: PreacherRepository) {
    this.repository = repository;
  }

  async run(
    id: string,
    name: string,
    preacherType: string,
    state: string,
    gender: string,
    birthdate: string,
    baptismDate: string,
    privilege: string
  ): Promise<void> {
    const preacher = new Preacher({ id, name, preacherType, state, gender, birthdate, baptismDate, privilege });

    return this.repository.save(preacher);
  }
}
