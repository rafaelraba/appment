import { Section } from './Section';

export interface SectionRepository {
  save(section: Section): Promise<void>;

  search(): Promise<Section[]>;
}
