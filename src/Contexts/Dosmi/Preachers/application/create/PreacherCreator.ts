import { Preacher } from '../../domain';
import { PreacherRepository } from '../../domain';
import { CreatePreacherRequest } from './CreatePreacherRequest';

export class PreacherCreator {
  private readonly repository: PreacherRepository;

  constructor(repository: PreacherRepository) {
    this.repository = repository;
  }

  async run(request: CreatePreacherRequest): Promise<void> {
    const preacher = Preacher.fromPrimitives({
      id: request.id,
      name: request.name,
      type: request.type,
      state: request.state,
      gender: request.gender,
      birthdate: request.birthdate,
      baptismDate: request.baptismDate,
      privilege: request.privilege
    });

    return this.repository.save(preacher);
  }
}
