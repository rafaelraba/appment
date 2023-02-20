export class Preacher {
  readonly id: string;
  readonly name: string;
  readonly preacherType: string;
  readonly state: string;
  readonly gender: string;
  readonly birthdate: string;
  readonly baptismDate: string;
  readonly privilege: string;

  constructor({
                id,
                name,
                preacherType,
                state,
                gender,
                birthdate,
                baptismDate,
                privilege
              }: { id: string; name: string; preacherType: string; state: string, gender: string, birthdate: string, baptismDate: string, privilege: string }) {
    this.id = id;
    this.name = name;
    this.preacherType = preacherType;
    this.state = state;
    this.gender = gender;
    this.birthdate = birthdate;
    this.baptismDate = baptismDate;
    this.privilege = privilege;

  }
}
