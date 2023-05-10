import { Preacher } from './Preacher';
import { PreacherId } from './PreacherId';

export interface PreacherRepository {
  save(course: Preacher): Promise<void>;

  search(id: PreacherId): Promise<Preacher | null>;
}
