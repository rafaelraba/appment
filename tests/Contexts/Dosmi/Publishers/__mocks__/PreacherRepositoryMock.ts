import { Publisher, PublisherId, PublisherRepository } from "../../../../../src/Contexts/Dosmi/Publishers/domain";

export class PublisherRepositoryMock implements PublisherRepository {
  private mockSave = jest.fn();

  async save(publisher: Publisher): Promise<void> {
    this.mockSave(publisher);
  }

  assertLastSavedPublisherIs(expected: Publisher): void {
    const mock = this.mockSave.mock;
    const lastSavedPublisher = mock.calls[mock.calls.length - 1][0] as Publisher;
    expect(lastSavedPublisher).toBeInstanceOf(Publisher);
    expect(lastSavedPublisher.id).toEqual(expected.id);
  }

  search(id: PublisherId): Promise<Publisher | null> {
    return Promise.resolve(null);
  }

}
