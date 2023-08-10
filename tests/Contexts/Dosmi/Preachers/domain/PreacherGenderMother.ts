import { PreacherGender } from '../../../../../src/Contexts/Dosmi/Preachers/domain';
import { WordMother } from '../../../Shared/domain/WordMother';

export class PreacherGenderMother {
  static create(value: string): PreacherGender {
    return new PreacherGender(value);
  }

  static random(): PreacherGender {
    return this.create(WordMother.random({ maxLength: 1 }));
  }
}
