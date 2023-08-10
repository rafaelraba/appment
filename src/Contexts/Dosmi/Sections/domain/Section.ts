import { SectionId } from './SectionId';
import { SectionName } from './SectionName';
import { SectionCode } from './SectionCode';
import { SectionValue } from './SectionValue';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';

export class Section extends AggregateRoot {
  readonly id: SectionId;
  readonly name: SectionName;
  readonly code: SectionCode;
  readonly value: SectionValue;

  constructor({ id, name, code, value }: { id: SectionId; name: SectionName; code: SectionCode; value: SectionValue }) {
    super();
    this.id = id;
    this.name = name;
    this.code = code;
    this.value = value;
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value,
      code: this.code.value,
      value: this.value.value
    };
  }

  static fromPrimitives({ id, name, code, value }: { id: string; name: string; code: string; value: string }) {
    return new Section({
      id: new SectionId(id),
      code: new SectionCode(code),
      value: new SectionValue(value),
      name: new SectionName(name)
    });
  }
}
