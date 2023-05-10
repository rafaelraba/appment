import { PreacherId, PreacherRepository } from "../../domain";
import { Preacher } from "../../domain";

export class FilePreacherRepository implements PreacherRepository {
  save(course: Preacher): Promise<void> {
    return Promise.resolve();
  }

  search(id: PreacherId): Promise<Preacher | null> {
    return Promise.resolve(null);
  }
}
