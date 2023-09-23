import { Section } from '../../../../../src/Contexts/Dosmi/Sections/domain/Section';
import { SectionId } from '../../../../../src/Contexts/Dosmi/Sections/domain/SectionId';
import { SectionName } from '../../../../../src/Contexts/Dosmi/Sections/domain/SectionName';
import { SectionValue } from '../../../../../src/Contexts/Dosmi/Sections/domain/SectionValue';
import { SectionCode } from '../../../../../src/Contexts/Dosmi/Sections/domain/SectionCode';
import { SectionIdMother } from './SectionIdMother';
import { SectionNameMother } from './SectionNameMother';
import { SectionValueMother } from './SectionValueMother';
import { SectionCodeMother } from './SectionCodeMother';

export class SectionMother {
  static create(id: SectionId, name: SectionName, value: SectionValue, code: SectionCode): Section {
    return new Section({ id, name, code, value });
  }

  static random() {
    return this.create(
      SectionIdMother.random(),
      SectionNameMother.random(),
      SectionValueMother.random(),
      SectionCodeMother.random()
    );
  }
}
