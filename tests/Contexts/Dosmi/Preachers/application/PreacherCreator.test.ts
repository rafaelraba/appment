import { PreacherCreator } from '../../../../../src/Contexts/Dosmi/Preachers/application/PreacherCreator';
import { Preacher } from '../../../../../src/Contexts/Dosmi/Preachers/domain/Preacher';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

let repository: CourseRepositoryMock;
let creator: PreacherCreator;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  creator = new PreacherCreator(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {

    const id = 'some-id';
    const name = 'some-name';
    const duration = 'some-duration';

    const course = new Preacher({id, name, duration});

    await creator.run(id, name, duration);

    repository.assertLastSavedCourseIs(course);
  });
});
