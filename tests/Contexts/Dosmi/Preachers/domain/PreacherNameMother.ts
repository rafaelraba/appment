import { PreacherName } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherName';
import { WordMother } from '../../../Shared/domain/WordMother';

export class PreacherNameMother {
  static create(value: string): PreacherName {
    return new PreacherName(value);
  }

  static random () {
    return this.create(WordMother.random({maxLength: 20}))
  }
}
