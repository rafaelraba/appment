import { PreacherState } from '../../../../../src/Contexts/Dosmi/Preachers/domain';
import { WordMother } from '../../../Shared/domain/WordMother';

export class PreacherStateMother {
  static create(value: string): PreacherState {
    return new PreacherState(value);
  }

  static random(): PreacherState {
    return this.create(WordMother.random({ maxLength: 10 }));
  }
}
