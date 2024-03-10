import { PublisherCreator } from '../../../../../src/Contexts/Dosmi/Publishers/application/create/PublisherCreator';
import { PublisherRepositoryMock } from '../__mocks__/PublisherRepositoryMock';
import { PublisherMother } from '../domain/PublisherMother';
import { CreatePublisherRequestMother } from './CreatePublisherRequestMother';

let repository: PublisherRepositoryMock;
let creator: PublisherCreator;

beforeEach(() => {
  repository = new PublisherRepositoryMock();
  creator = new PublisherCreator(repository);
});

describe('PublisherCreator', () => {
  it('should create a valid publisher', async () => {
    const request = CreatePublisherRequestMother.random();
    const publisher = PublisherMother.fromRequest(request);

    await creator.run(request);

    repository.assertLastSavedPublisherIs(publisher);
  });
});

