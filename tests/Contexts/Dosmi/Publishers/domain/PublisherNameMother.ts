import { PublisherName } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { WordMother } from '../../../Shared/domain/WordMother';

export class PublisherNameMother {
  static create(value: string): PublisherName {
    return new PublisherName(value);
  }

  static random () {
    return this.create(WordMother.random({maxLength: 20}))
  }
}
