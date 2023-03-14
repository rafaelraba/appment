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
  it('should create a valid preacher', async () => {
    const id = '22bad62c-53d2-4594-9a37-3d92b1b96d6a'
    const name = 'some-name';
    const gender = 'some-gender';
    const privilege = 'some-privilege';
    const type = 'some-preacherType';
    const birthdate = 'some-birthdate';
    const baptismDate = 'some-baptismDate';
    const state = 'some-state';

    const preacher = new Preacher({ id, name, type, state, gender, birthdate, baptismDate, privilege });

    await creator.run({ id, name, type, state, gender, birthdate, baptismDate, privilege });

    repository.assertLastSavedPreacherIs(preacher);
  });
});
