import { PreacherRepository } from '../../../../../src/Contexts/Dosmi/Preachers/domain/PreacherRepository';
import { Preacher } from '../../../../../src/Contexts/Dosmi/Preachers/domain/Preacher';

export class PreacherRepositoryMock implements PreacherRepository {
  private mockSave = jest.fn();

  async save(preacher: Preacher): Promise<void> {
    this.mockSave(preacher);
  }

  assertLastSavedPreacherIs(expected: Preacher): void {
    const mock = this.mockSave.mock;
    const lastSavedPreacher = mock.calls[mock.calls.length - 1][0] as Preacher;
    expect(lastSavedPreacher).toBeInstanceOf(Preacher);
    expect(lastSavedPreacher.id).toEqual(expected.id);
  }

}
