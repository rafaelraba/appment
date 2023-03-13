import { Preacher } from '../../domain/Preacher';
import { PreacherRepository } from '../../domain/PreacherRepository';
import { CreatePreacherRequest } from './CreatePreacherRequest';
import { Uuid } from "../../../../Shared/domain/value-object/Uuid";

export class PreacherCreator {
  private readonly repository: PreacherRepository;

  constructor(repository: PreacherRepository) {
    this.repository = repository;
  }

  async run(request: CreatePreacherRequest): Promise<void> {
    const preacher = new Preacher({
      id: new Uuid(request.id),
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
