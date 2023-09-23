import { SectionId } from '../../../../../src/Contexts/Dosmi/Sections/domain/SectionId';
import { UuidMother } from "../../../Shared/domain/UuidMother";

export class SectionIdMother {
  static create(value: string): SectionId {
    return new SectionId(value);
  }

  static random() {
    return this.create(UuidMother.random());
  }
}
