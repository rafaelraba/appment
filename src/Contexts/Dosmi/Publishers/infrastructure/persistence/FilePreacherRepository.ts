import { PublisherId, PublisherRepository } from "../../domain";
import { Publisher } from "../../domain";

export class FilePublisherRepository implements PublisherRepository {
  save(course: Publisher): Promise<void> {
    return Promise.resolve();
  }

  search(id: PublisherId): Promise<Publisher | null> {
    return Promise.resolve(null);
  }
}
