import { PreacherCreator } from '../../../../../src/Contexts/Dosmi/Preachers/application/create/PreacherCreator';
import { PreacherRepositoryMock } from '../__mocks__/PreacherRepositoryMock';
import { PreacherMother } from '../domain/PreacherMother';
import { CreatePreacherRequestMother } from './CreatePreacherRequestMother';

let repository: PreacherRepositoryMock;
let creator: PreacherCreator;

beforeEach(() => {
  repository = new PreacherRepositoryMock();
  creator = new PreacherCreator(repository);
});

describe('PreacherCreator', () => {
  it('should create a valid preacher', async () => {
    const request = CreatePreacherRequestMother.random();
    const preacher = PreacherMother.fromRequest(request);

    await creator.run(request);

    repository.assertLastSavedPreacherIs(preacher);
  });
});
