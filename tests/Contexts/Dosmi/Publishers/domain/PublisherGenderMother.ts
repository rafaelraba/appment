import { PublisherGender } from "../../../../../src/Contexts/Dosmi/Publishers/domain";
import { WordMother } from '../../../Shared/domain/WordMother';

export class PublisherGenderMother {
  static create(value: string): PublisherGender {
    return new PublisherGender(value);
  }

  static random(): PublisherGender {
    return this.create(WordMother.random({ maxLength: 1 }));
  }
}
