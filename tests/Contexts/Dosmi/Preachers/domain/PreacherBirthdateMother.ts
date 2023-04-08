import { PreacherBirthdate } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherBirthdate';
import { DateMother } from '../../../Shared/domain/DateMother';

export class PreacherBirthdateMother {
  static create(value: Date): PreacherBirthdate {
    return new PreacherBirthdate(value);
  }

  static random(): PreacherBirthdate {
    return this.create(DateMother.random());
  }
}
