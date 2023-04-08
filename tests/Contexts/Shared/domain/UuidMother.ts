import { MotherCreator } from './MotherCreator';

export class UuidMother {
  static random() {
    return MotherCreator.random().datatype.uuid();
  }
}
