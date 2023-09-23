import { SectionCode } from '../../../../../src/Contexts/Dosmi/Sections/domain/SectionCode';
import { WordMother } from '../../../Shared/domain/WordMother';

export class SectionCodeMother {
  static create(value: string): SectionCode {
    return new SectionCode(value);
  }

  static random() {
    return this.create(WordMother.random({ minLength: 1, maxLength: 10 }));
  }
}
