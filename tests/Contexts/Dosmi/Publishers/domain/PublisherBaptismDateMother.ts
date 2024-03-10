import { PublisherBaptismDate } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { DateMother } from '../../../Shared/domain/DateMother';

export class PublisherBaptismDateMother {
  static create(value: Date): PublisherBaptismDate {
    return new PublisherBaptismDate(value);
  }

  static random(): PublisherBaptismDate {
    return this.create(DateMother.random());
  }
}
