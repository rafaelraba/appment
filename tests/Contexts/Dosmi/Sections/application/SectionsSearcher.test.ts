import { SectionRepositoryMock } from '../__mocks__/SectionRepositoryMock';
import { SectionsSearcher } from '../../../../../src/Contexts/Dosmi/Sections/application/search/SectionsSearcher';

let repository: SectionRepositoryMock;
let searcher: SectionsSearcher;

beforeEach(() => {
  repository = new SectionRepositoryMock();
  searcher = new SectionsSearcher(repository);
});

describe('SectionsSearcher', () => {
  it('should search all sections', async () => {
    await searcher.run();

    repository.assertSearch();
  });
});
