import {
  CreatePreacherRequest
} from '../../../../../src/Contexts/Dosmi/Preachers/application/create/CreatePreacherRequest';
import { PreacherId } from '../../../../../src/Contexts/Dosmi/Preachers/domain';
import { PreacherName } from '../../../../../src/Contexts/Dosmi/Preachers/domain';
import { PreacherGender } from '../../../../../src/Contexts/Dosmi/Preachers/domain';
import { PreacherPrivilege } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherPrivilege';
import { PreacherType } from '../../../../../src/Contexts/Dosmi/Preachers/domain';
import { PreacherBirthdate } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherBirthdate';
import { PreacherBaptismDate } from '../../../../../src/Contexts/Dosmi/Preachers/domain';
import { PreacherState } from '../../../../../src/Contexts/Dosmi/Preachers/domain';
import { PreacherIdMother } from '../domain/PreacherIdMother';
import { PreacherNameMother } from '../domain/PreacherNameMother';
import { PreacherStateMother } from '../domain/PreacherStateMother';
import { PreacherGenderMother } from '../domain/PreacherGenderMother';
import { PreacherPrivilegeMother } from '../domain/PreacherPrivilegeMother';
import { PreacherTypeMother } from '../domain/PreacherTypeMother';
import { PreacherBirthdateMother } from '../domain/PreacherBirthdateMother';
import { PreacherBaptismDateMother } from '../domain/PreacherBaptismDateMother';

export class CreatePreacherRequestMother {
  static create(
    id: PreacherId,
    name: PreacherName,
    gender: PreacherGender,
    privilege: PreacherPrivilege,
    type: PreacherType,
    birthdate: PreacherBirthdate,
    baptismDate: PreacherBaptismDate,
    state: PreacherState
  ): CreatePreacherRequest {
    return {
      id: id.value,
      name: name.value,
      gender: gender.value,
      privilege: privilege.value,
      type: type.value,
      state: state.value,
      baptismDate: baptismDate.value,
      birthdate: birthdate.value
    };
  }

  static random(): CreatePreacherRequest {
    return this.create(
      PreacherIdMother.random(),
      PreacherNameMother.random(),
      PreacherGenderMother.random(),
      PreacherPrivilegeMother.random(),
      PreacherTypeMother.random(),
      PreacherBirthdateMother.random(),
      PreacherBaptismDateMother.random(),
      PreacherStateMother.random()
    );
  }
}
