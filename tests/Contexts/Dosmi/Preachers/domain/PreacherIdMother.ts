import { PreacherId } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherId';
import { UuidMother } from '../../../Shared/domain/UuidMother';

export class PreacherIdMother {
  static create(value: string): PreacherId {
    return new PreacherId(value);
  }

  static random() {
    return this.create(UuidMother.random());
  }
}
