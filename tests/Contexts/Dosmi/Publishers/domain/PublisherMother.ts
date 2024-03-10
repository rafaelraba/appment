import { Publisher } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherId } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherIdMother } from './PublisherIdMother';
import { PublisherName } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherState } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherGender } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherPrivilege } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherType } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherBirthdate } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherBaptismDate } from '../../../../../src/Contexts/Dosmi/Publishers/domain';
import { PublisherNameMother } from './PublisherNameMother';
import { PublisherStateMother } from './PublisherStateMother';
import { PublisherGenderMother } from './PublisherGenderMother';
import { PublisherPrivilegeMother } from './PublisherPrivilegeMother';
import { PublisherTypeMother } from './PublisherTypeMother';
import { PublisherBirthdateMother } from './PublisherBirthdateMother';
import { PublisherBaptismDateMother } from './PublisherBaptismDateMother';
import { CreatePublisherRequest } from '../../../../../src/Contexts/Dosmi/Publishers/application/create/CreatePublisherRequest';

export class PublisherMother {
  static create(
    id: PublisherId,
    name: PublisherName,
    state: PublisherState,
    gender: PublisherGender,
    privilege: PublisherPrivilege,
    type: PublisherType,
    birthdate: PublisherBirthdate,
    baptismDate: PublisherBaptismDate
  ): Publisher {
    return new Publisher({ id, name, type, gender, birthdate, baptismDate, privilege, state });
  }

  static fromRequest(request: CreatePublisherRequest): Publisher {
    return this.create(
      PublisherIdMother.create(request.id),
      PublisherNameMother.create(request.name),
      PublisherStateMother.create(request.state),
      PublisherGenderMother.create(request.gender),
      PublisherPrivilegeMother.create(request.privilege),
      PublisherTypeMother.create(request.type),
      PublisherBirthdateMother.create(request.birthdate),
      PublisherBaptismDateMother.create(request.baptismDate)
    );
  }

  static random(): Publisher {
    return this.create(
      PublisherIdMother.random(),
      PublisherNameMother.random(),
      PublisherStateMother.random(),
      PublisherGenderMother.random(),
      PublisherPrivilegeMother.random(),
      PublisherTypeMother.random(),
      PublisherBirthdateMother.random(),
      PublisherBaptismDateMother.random()
    );
  }
}
