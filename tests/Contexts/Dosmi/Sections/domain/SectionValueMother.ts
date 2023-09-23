import { SectionValue } from '../../../../../src/Contexts/Dosmi/Sections/domain/SectionValue';
import { WordMother } from '../../../Shared/domain/WordMother';

export class SectionValueMother {
  static create(value: string): SectionValue {
    return new SectionValue(value);
  }

  static random() {
    return this.create(WordMother.random({ maxLength: 10 }));
  }
}
