import { SectionRepository } from '../../../../../src/Contexts/Dosmi/Sections/domain/SectionRepository';
import { Section } from '../../../../../src/Contexts/Dosmi/Sections/domain/Section';

export class SectionRepositoryMock implements SectionRepository {
  private mockSave = jest.fn();
  private mockSearch = jest.fn();
  private sections: Section[] = [];

  async save(section: Section): Promise<void> {
    this.mockSave(section);
  }

  assertLastSaveSectionIs(expected: Section) {
    const mock = this.mockSave.mock;
    const lastSaveSection = mock.calls[mock.calls.length - 1][0] as Section;
    expect(lastSaveSection).toBeInstanceOf(Section);
    expect(lastSaveSection.id).toEqual(expected.id);
  }

  assertSearch() {
    expect(this.mockSearch).toHaveBeenCalled();
  }

  async search(): Promise<Section[]> {
    this.mockSearch();
    return this.sections;
  }
}
