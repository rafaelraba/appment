import { SectionRepositoryMock } from '../__mocks__/SectionRepositoryMock';
import { SectionSearcher } from '../../../../../src/Contexts/Dosmi/Sections/application/search/SectionSearcher';

let repository: SectionRepositoryMock;
let searcher: SectionSearcher;

beforeEach(() => {
  repository = new SectionRepositoryMock();
  searcher = new SectionSearcher(repository);
});

describe('', () => {
  it('should create a valid section', async () => {
    await searcher.run();

    repository.assertSearch();
  });
});
