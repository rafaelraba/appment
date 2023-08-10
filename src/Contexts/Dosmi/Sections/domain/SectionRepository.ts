import { Section } from './Section';

export interface SectionRepository {
  search(): Promise<Section[]>;
}
