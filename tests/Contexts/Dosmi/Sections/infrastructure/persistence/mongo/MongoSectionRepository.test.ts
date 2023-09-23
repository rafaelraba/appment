import { EnvironmentArranger } from '../../../../../Shared/Infrastructure/arrange/EnvironmentArranger';
import { SectionRepository } from '../../../../../../../src/Contexts/Dosmi/Sections/domain/SectionRepository';
import { container, loadContainer } from '../../../../../../../src/apps/dosmi/backend/dependency-injection';
import { SectionMother } from '../../../domain/SectionMother';

let environmentArranger: Promise<EnvironmentArranger>;
let repository: SectionRepository;

beforeAll(async () => {
  await loadContainer();
  repository = container.get('Dosmi.Sections.domain.SectionRepository');
  environmentArranger = container.get('Dosmi.EnvironmentArranger');
});

beforeEach(async () => {
  await (await environmentArranger).arrange();
});

afterAll(async () => {
  await (await environmentArranger).close();
});

describe('SectionRepository', () => {
  describe('search', () => {
    it('should search all sections', async () => {
    const section = SectionMother.random();
    await repository.save(section);

    const sections = await repository.search();
    expect(sections.length).not.toEqual(0);
    console.log(sections)
  });
    })
});
