import validate from 'uuid-validate';
import {InvalidArgumentsError} from './InvalidArgumentsError';

export class Uuid {
  readonly value: string;

  constructor(value: string) {
    this.ensureIsValidUuid(value);
    this.value = value;
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentsError(`<${this.constructor.name}> does not allow the value <${id}>`);
    }
  }

  toString() {
    return this.value;
  }
}
