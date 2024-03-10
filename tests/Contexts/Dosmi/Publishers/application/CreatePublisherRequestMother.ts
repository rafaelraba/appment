import {
  CreatePublisherRequest
} from '../../../../../src/Contexts/Dosmi/Publishers/application/create/CreatePublisherRequest';
import { PublisherId } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherName } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherGender } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherPrivilege } from '../../../../../src/Contexts/Dosmi/Publishers/domain/PublisherPrivilege';
import { PublisherType } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherBirthdate } from '../../../../../src/Contexts/Dosmi/Publishers/domain/PublisherBirthdate';
import { PublisherBaptismDate } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherState } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherIdMother } from '../domain/PublisherIdMother';
import { PublisherNameMother } from '../domain/PublisherNameMother';
import { PublisherStateMother } from '../domain/PublisherStateMother';
import { PublisherGenderMother } from '../domain/PublisherGenderMother';
import { PublisherPrivilegeMother } from '../domain/PublisherPrivilegeMother';
import { PublisherTypeMother } from '../domain/PublisherTypeMother';
import { PublisherBirthdateMother } from '../domain/PublisherBirthdateMother';
import { PublisherBaptismDateMother } from '../domain/PublisherBaptismDateMother';

export class CreatePublisherRequestMother {
  static create(
    id: PublisherId,
    name: PublisherName,
    gender: PublisherGender,
    privilege: PublisherPrivilege,
    type: PublisherType,
    birthdate: PublisherBirthdate,
    baptismDate: PublisherBaptismDate,
    state: PublisherState
  ): CreatePublisherRequest {
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

  static random(): CreatePublisherRequest {
    return this.create(
      PublisherIdMother.random(),
      PublisherNameMother.random(),
      PublisherGenderMother.random(),
      PublisherPrivilegeMother.random(),
      PublisherTypeMother.random(),
      PublisherBirthdateMother.random(),
      PublisherBaptismDateMother.random(),
      PublisherStateMother.random()
    );
  }
}
