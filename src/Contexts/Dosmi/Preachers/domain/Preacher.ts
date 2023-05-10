import { PreacherId } from './PreacherId';
import { PreacherName } from './PreacherName';
import { PreacherType } from './PreacherType';
import { PreacherState } from './PreacherState';
import { PreacherGender } from './PreacherGender';
import { PreacherBirthdate } from './PreacherBirthdate';
import { PreacherBaptismDate } from './PreacherBaptismDate';
import { PreacherPrivilege } from './PreacherPrivilege';
import { AggregateRoot } from "../../../Shared/domain/AggregateRoot";

export class Preacher extends AggregateRoot{
  readonly id: PreacherId;
  readonly name: PreacherName;
  readonly type: PreacherType;
  readonly state: PreacherState;
  readonly gender: PreacherGender;
  readonly birthdate: PreacherBirthdate;
  readonly baptismDate: PreacherBaptismDate;
  readonly privilege: PreacherPrivilege;

  constructor(
    { id, name, type, state, gender, birthdate, baptismDate, privilege }:
      {
        id: PreacherId,
        name: PreacherName,
        type: PreacherType,
        state: PreacherState,
        gender: PreacherGender,
        birthdate: PreacherBirthdate,
        baptismDate: PreacherBaptismDate,
        privilege: PreacherPrivilege,
      }
  ) {
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

  static singUp(
    { id, type, name, state, gender, birthdate, baptismDate, privilege }:
      {
        id: string,
        name: string,
        type: string
        state: string,
        gender: string,
        birthdate: Date,
        baptismDate: Date,
        privilege: string
      }
  ): Preacher {

    return new Preacher({
      id: new PreacherId(id),
      name: new PreacherName(name),
      gender: new PreacherGender(gender),
      state: new PreacherState(state),
      type: new PreacherType(type),
      birthdate: new PreacherBirthdate(birthdate),
      baptismDate: new PreacherBaptismDate(baptismDate),
      privilege: new PreacherPrivilege(privilege)
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
      privilege: this.privilege.value,
    }
  }

}
