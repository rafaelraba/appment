import { PublisherBirthdate } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { DateMother } from '../../../Shared/domain/DateMother';

export class PublisherBirthdateMother {
  static create(value: Date): PublisherBirthdate {
    return new PublisherBirthdate(value);
  }

  static random(): PublisherBirthdate {
    return this.create(DateMother.random());
  }
}
