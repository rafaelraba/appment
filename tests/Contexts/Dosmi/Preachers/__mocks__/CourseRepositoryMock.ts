import { PreacherRepository } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherRepository';
import { Preacher } from '../../../../../src/Contexts/Dosmi/Preachers/domain/Preacher';

export class CourseRepositoryMock implements PreacherRepository {
  private mockSave = jest.fn();

  async save(course: Preacher): Promise<void> {
    this.mockSave(course);
  }

  assertLastSavedCourseIs(expected: Preacher): void {
    const mock = this.mockSave.mock;
    const lastSavedCourse = mock.calls[mock.calls.length - 1][0] as Preacher;
    expect(lastSavedCourse).toBeInstanceOf(Preacher);
    expect(lastSavedCourse.id).toEqual(expected.id);
  }

}
