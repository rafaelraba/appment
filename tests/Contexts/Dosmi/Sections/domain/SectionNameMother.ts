import { SectionName } from '../../../../../src/Contexts/Dosmi/Sections/domain/SectionName';
import { WordMother } from '../../../Shared/domain/WordMother';

export class SectionNameMother {
  static create(value: string): SectionName {
    return new SectionName(value);
  }

  static random() {
    return this.create(WordMother.random({ minLength: 1, maxLength: 10 }));
  }
}
