import {PreacherRepository} from "../../domain/PreacherRepository";
import {Preacher} from "../../domain/Preacher";

export class FilePreacherRepository implements PreacherRepository {

  save(course: Preacher): Promise<void> {
    return Promise.resolve();
  }
}
