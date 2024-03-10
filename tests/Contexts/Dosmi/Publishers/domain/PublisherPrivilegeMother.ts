import { PublisherPrivilege } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { WordMother } from '../../../Shared/domain/WordMother';

export class PublisherPrivilegeMother {
  static create(value: string): PublisherPrivilege {
    return new PublisherPrivilege(value);
  }

  static random(): PublisherPrivilege {
    return this.create(WordMother.random({ maxLength: 15 }));
  }
}
