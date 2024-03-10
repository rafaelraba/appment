import { Publisher } from '../../domain';
import { PublisherRepository } from '../../domain';
import { CreatePublisherRequest } from './CreatePublisherRequest';

export class PublisherCreator {
  private readonly repository: PublisherRepository;

  constructor(repository: PublisherRepository) {
    this.repository = repository;
  }

  async run(request: CreatePublisherRequest): Promise<void> {
    const publisher = Publisher.fromPrimitives({
      id: request.id,
      name: request.name,
      type: request.type,
      state: request.state,
      gender: request.gender,
      birthdate: request.birthdate,
      baptismDate: request.baptismDate,
      privilege: request.privilege
    });

    return this.repository.save(publisher);
  }
}
