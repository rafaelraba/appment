import { PreacherId } from "./PreacherId";
import { PreacherName } from "./PreacherName";

export class Preacher {
  readonly id: PreacherId;
  readonly name: PreacherName;
  readonly type: string;
  readonly state: string;
  readonly gender: string;
  readonly birthdate: string;
  readonly baptismDate: string;
  readonly privilege: string;

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
    id: string;
    name: string;
    type: string;
    state: string;
    gender: string;
    birthdate: string;
    baptismDate: string;
    privilege: string;
  }) {
    this.id = new PreacherId(id);
    this.name = new PreacherName(name);
    this.type = type;
    this.state = state;
    this.gender = gender;
    this.birthdate = birthdate;
    this.baptismDate = baptismDate;
    this.privilege = privilege;
  }
}
