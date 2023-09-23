import { MotherCreator } from './MotherCreator';

export class WordMother {
  static random({ minLength = 1, maxLength }: { minLength?: number; maxLength: number }) {
    const size = Math.floor(Math.random() * (maxLength - minLength) + minLength);
    return MotherCreator.random().lorem.word(size) || 'word';
  }
}
