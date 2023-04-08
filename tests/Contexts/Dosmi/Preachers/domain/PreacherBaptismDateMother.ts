import { PreacherBaptismDate } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherBaptismDate';
import { DateMother } from '../../../Shared/domain/DateMother';

export class PreacherBaptismDateMother {
  static create(value: Date): PreacherBaptismDate {
    return new PreacherBaptismDate(value);
  }

  static random(): PreacherBaptismDate {
    return this.create(DateMother.random());
  }
}
