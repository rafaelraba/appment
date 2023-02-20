import { PreacherCreator } from '../../../../../src/Contexts/Dosmi/Preachers/application/create/PreacherCreator';
import { Preacher } from '../../../../../src/Contexts/Dosmi/Preachers/domain/Preacher';
import { PreacherRepositoryMock } from '../__mocks__/PreacherRepositoryMock';

let repository: PreacherRepositoryMock;
let creator: PreacherCreator;

beforeEach(() => {
  repository = new PreacherRepositoryMock();
  creator = new PreacherCreator(repository);
});

describe('PreacherCreator', () => {
  it('should create a valid course', async () => {
    const id = 'some-id';
    const name = 'some-name';
    const gender = 'some-gender';
    const privilege = 'some-privilege';
    const preacherType = 'some-preacherType';
    const birthdate = 'some-birthdate';
    const baptismDate = 'some-baptismDate';
    const state = 'some-state';

    const preacher = new Preacher({ id, name, preacherType, state, gender, birthdate, baptismDate, privilege });

    await creator.run({ id, name, preacherType, state, gender, birthdate, baptismDate, privilege });

    repository.assertLastSavedPreacherIs(preacher);
  });
});
