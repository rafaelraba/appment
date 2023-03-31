import {
  CreatePreacherRequest
} from "../../../../../src/Contexts/Dosmi/Preachers/application/create/CreatePreacherRequest";

export class CreatePreacherRequestMother {
  static create(id: string, name: string, gender: string, privilege: string, type: string, birthdate: Date,
                baptismDate: Date, state: string): CreatePreacherRequest {
    return {id, name, gender, privilege, type, state, baptismDate, birthdate}
  }

  static random() {
  }

}
