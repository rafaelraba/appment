import { PreacherPrivilege } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherPrivilege';
import { WordMother } from '../../../Shared/domain/WordMother';

export class PreacherPrivilegeMother {
  static create(value: string): PreacherPrivilege {
    return new PreacherPrivilege(value);
  }

  static random(): PreacherPrivilege {
    return this.create(WordMother.random({ maxLength: 15 }));
  }
}
