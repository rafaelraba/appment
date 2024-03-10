import { PublisherType } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { WordMother } from '../../../Shared/domain/WordMother';

export class PublisherTypeMother {
  static create(value: string): PublisherType {
    return new PublisherType(value);
  }

  static random(): PublisherType {
    return this.create(WordMother.random({ maxLength: 10 }));
  }
}

