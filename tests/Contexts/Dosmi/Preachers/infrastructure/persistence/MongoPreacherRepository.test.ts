import { container, loadContainer } from '../../../../../../src/apps/dosmi/backend/dependency-injection';
import { PreacherRepository } from '../../../../../../src/Contexts/Dosmi/Preachers/domain';
import { EnvironmentArranger } from '../../../../Shared/Infrastructure/arrange/EnvironmentArranger';
import { PreacherMother } from '../../domain/PreacherMother';

let environmentArranger: Promise<EnvironmentArranger>;
let repository: PreacherRepository;

beforeAll(async () => {
  await loadContainer();
  repository = container.get('Dosmi.Preachers.domain.PreacherRepository');
  environmentArranger = container.get('Dosmi.EnvironmentArranger');
});

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).close();
});

describe('PreacherRepository', () => {
  describe('save', () => {
    it('should save a preacher', async () => {
      const preacher = PreacherMother.random();
      await repository.save(preacher);
    });
  });
});
