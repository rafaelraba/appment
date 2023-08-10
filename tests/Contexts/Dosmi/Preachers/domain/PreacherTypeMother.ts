import { PreacherType } from '../../../../../src/Contexts/Dosmi/Preachers/domain';
import { WordMother } from '../../../Shared/domain/WordMother';

export class PreacherTypeMother {
  static create(value: string): PreacherType {
    return new PreacherType(value);
  }

  static random(): PreacherType {
    return this.create(WordMother.random({ maxLength: 10 }));
  }
}

