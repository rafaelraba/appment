import { container, loadContainer } from '../../../../../../../src/apps/dosmi/backend/dependency-injection';
import { PublisherRepository } from '../../../../../../../src/Contexts/Dosmi/Publishers/domain';
import { EnvironmentArranger } from '../../../../../Shared/Infrastructure/arrange/EnvironmentArranger';
import { PublisherMother } from '../../../domain/PublisherMother';

let environmentArranger: Promise<EnvironmentArranger>;
let repository: PublisherRepository;

beforeAll(async () => {
  await loadContainer();
  repository = container.get('Dosmi.Publishers.domain.PublisherRepository');
  environmentArranger = container.get('Dosmi.EnvironmentArranger');
});

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).close();
});

describe('PublisherRepository', () => {
  describe('save', () => {
    it('should save a publisher', async () => {
      const publisher = PublisherMother.random();
      await repository.save(publisher);
    });
  });
});
