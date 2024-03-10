import { PublisherId } from './PublisherId';
import { PublisherName } from './PublisherName';
import { PublisherType } from './PublisherType';
import { PublisherState } from './PublisherState';
import { PublisherGender } from './PublisherGender';
import { PublisherBirthdate } from './PublisherBirthdate';
import { PublisherBaptismDate } from './PublisherBaptismDate';
import { PublisherPrivilege } from './PublisherPrivilege';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';

export class Publisher extends AggregateRoot {
  readonly id: PublisherId;
  readonly name: PublisherName;
  readonly type: PublisherType;
  readonly state: PublisherState;
  readonly gender: PublisherGender;
  readonly birthdate: PublisherBirthdate;
  readonly baptismDate: PublisherBaptismDate;
  readonly privilege: PublisherPrivilege;

  constructor({
    id,
    name,
    type,
    state,
    gender,
    birthdate,
    baptismDate,
    privilege
  }: {
    id: PublisherId;
    name: PublisherName;
    type: PublisherType;
    state: PublisherState;
    gender: PublisherGender;
    birthdate: PublisherBirthdate;
    baptismDate: PublisherBaptismDate;
    privilege: PublisherPrivilege;
  }) {
    super();
    this.id = id;
    this.name = name;
    this.type = type;
    this.state = state;
    this.gender = gender;
    this.birthdate = birthdate;
    this.baptismDate = baptismDate;
    this.privilege = privilege;
  }

  static fromPrimitives({
    id,
    type,
    name,
    state,
    gender,
    birthdate,
    baptismDate,
    privilege
  }: {
    id: string;
    name: string;
    type: string;
    state: string;
    gender: string;
    birthdate: Date;
    baptismDate: Date;
    privilege: string;
  }): Publisher {
    return new Publisher({
      id: new PublisherId(id),
      name: new PublisherName(name),
      gender: new PublisherGender(gender),
      state: new PublisherState(state),
      type: new PublisherType(type),
      birthdate: new PublisherBirthdate(birthdate),
      baptismDate: new PublisherBaptismDate(baptismDate),
      privilege: new PublisherPrivilege(privilege)
    });
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      name: this.name.value,
      gender: this.gender.value,
      state: this.state.value,
      type: this.type.value,
      birthdate: this.birthdate.value,
      baptismDate: this.baptismDate.value,
      privilege: this.privilege.value
    };
  }
}
