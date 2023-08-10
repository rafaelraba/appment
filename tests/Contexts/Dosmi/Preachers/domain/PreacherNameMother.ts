import { PreacherName } from '../../../../../src/Contexts/Dosmi/Preachers/domain';
import { WordMother } from '../../../Shared/domain/WordMother';

export class PreacherNameMother {
  static create(value: string): PreacherName {
    return new PreacherName(value);
  }

  static random () {
    return this.create(WordMother.random({maxLength: 20}))
  }
}
