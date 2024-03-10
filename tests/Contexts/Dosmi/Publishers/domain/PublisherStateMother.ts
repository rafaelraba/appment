import { PublisherState } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { WordMother } from '../../../Shared/domain/WordMother';

export class PublisherStateMother {
  static create(value: string): PublisherState {
    return new PublisherState(value);
  }

  static random(): PublisherState {
    return this.create(WordMother.random({ maxLength: 10 }));
  }
}
