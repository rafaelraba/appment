import { Preacher } from './Preacher';

export interface PreacherRepository {
  save(course: Preacher): Promise<void>;
}
