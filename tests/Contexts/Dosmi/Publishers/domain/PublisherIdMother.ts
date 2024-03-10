import { PublisherId } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { UuidMother } from '../../../Shared/domain/UuidMother';

export class PublisherIdMother {
  static create(value: string): PublisherId {
    return new PublisherId(value);
  }

  static random() {
    return this.create(UuidMother.random());
  }
}
