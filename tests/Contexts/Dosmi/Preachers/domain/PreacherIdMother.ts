import { PreacherId } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherId';
import { create } from 'domain';

export class PreacherIdMother {
  static create (value: string): PreacherId {
    return new PreacherId(value)
  }

}
