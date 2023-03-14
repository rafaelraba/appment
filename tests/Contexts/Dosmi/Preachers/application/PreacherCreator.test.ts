import { PreacherCreator } from '../../../../../src/Contexts/Dosmi/Preachers/application/create/PreacherCreator';
import { Preacher } from '../../../../../src/Contexts/Dosmi/Preachers/domain/Preacher';
import { PreacherRepositoryMock } from '../__mocks__/PreacherRepositoryMock';
import { Uuid } from "../../../../../src/Contexts/Shared/domain/value-object/Uuid";

let repository: PreacherRepositoryMock;
let creator: PreacherCreator;

beforeEach(() => {
  repository = new PreacherRepositoryMock();
  creator = new PreacherCreator(repository);
});

describe('PreacherCreator', () => {
  it('should create a valid preacher', async () => {
    const id = new Uuid('7fc35b52-8b4c-40dd-bc2b-9de11c6c2258');
    const name = 'some-name';
    const gender = 'some-gender';
    const privilege = 'some-privilege';
    const type = 'some-preacherType';
    const birthdate = 'some-birthdate';
    const baptismDate = 'some-baptismDate';
    const state = 'some-state';

    const preacher = new Preacher({ id, name, type, state, gender, birthdate, baptismDate, privilege });

    await creator.run({ id: id.value, name, type, state, gender, birthdate, baptismDate, privilege });

    repository.assertLastSavedPreacherIs(preacher);
  });
});
