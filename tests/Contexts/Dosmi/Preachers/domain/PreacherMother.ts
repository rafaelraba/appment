import { Preacher } from '../../../../../src/Contexts/Dosmi/Preachers/domain/Preacher';
import { PreacherId } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherId';
import { PreacherIdMother } from './PreacherIdMother';
import { PreacherName } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherName';
import { PreacherState } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherState';
import { PreacherGender } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherGender';
import { PreacherPrivilege } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherPrivilege';
import { PreacherType } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherType';
import { PreacherBirthdate } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherBirthdate';
import { PreacherBaptismDate } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherBaptismDate';
import { PreacherNameMother } from './PreacherNameMother';
import { PreacherStateMother } from './PreacherStateMother';
import { PreacherGenderMother } from './PreacherGenderMother';
import { PreacherPrivilegeMother } from './PreacherPrivilegeMother';
import { PreacherTypeMother } from './PreacherTypeMother';
import { PreacherBirthdateMother } from './PreacherBirthdateMother';
import { PreacherBaptismDateMother } from './PreacherBaptismDateMother';
import {
  CreatePreacherRequest
} from '../../../../../src/Contexts/Dosmi/Preachers/application/create/CreatePreacherRequest';

export class PreacherMother {
  static create(
    id: PreacherId,
    name: PreacherName,
    state: PreacherState,
    gender: PreacherGender,
    privilege: PreacherPrivilege,
    type: PreacherType,
    birthdate: PreacherBirthdate,
    baptismDate: PreacherBaptismDate
  ): Preacher {
    return new Preacher({ id, name, type, gender, birthdate, baptismDate, privilege, state });
  }

  static fromRequest(request: CreatePreacherRequest): Preacher {
    return this.create(
      PreacherIdMother.create(request.id),
      PreacherNameMother.create(request.name),
      PreacherStateMother.create(request.state),
      PreacherGenderMother.create(request.gender),
      PreacherPrivilegeMother.create(request.privilege),
      PreacherTypeMother.create(request.type),
      PreacherBirthdateMother.create(request.birthdate),
      PreacherBaptismDateMother.create(request.baptismDate)
    )
  }

  static random(): Preacher {
    return this.create(
      PreacherIdMother.random(),
      PreacherNameMother.random(),
      PreacherStateMother.random(),
      PreacherGenderMother.random(),
      PreacherPrivilegeMother.random(),
      PreacherTypeMother.random(),
      PreacherBirthdateMother.random(),
      PreacherBaptismDateMother.random()
    );
  }
}
