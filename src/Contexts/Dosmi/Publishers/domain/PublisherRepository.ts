import { Publisher } from './Publisher';
import { PublisherId } from './PublisherId';

export interface PublisherRepository {
  save(course: Publisher): Promise<void>;

  search(id: PublisherId): Promise<Publisher | null>;
}
