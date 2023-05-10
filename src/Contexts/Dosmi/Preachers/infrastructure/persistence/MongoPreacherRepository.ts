import { MongoRepository } from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import { Preacher, PreacherId, PreacherRepository } from "../../domain";
import { ObjectId } from 'mongodb';

interface PreacherDocument {
  _id: ObjectId;
  name: string;
  type: string;
  state: string;
  gender: string;
  birthdate: Date;
  baptismDate: Date;
  privilege: string;
}

export class MongoPreacherRepository extends MongoRepository<Preacher> implements PreacherRepository {
  public save(preacher: Preacher): Promise<void> {
    return this.persist(preacher.id.value, preacher);
  }

  public async search(id: PreacherId): Promise<Preacher | null> {
    const collection = await this.collection();
    const document = await collection.findOne<PreacherDocument>({ _id: this.mongoId(id.value) });
    return document
      ? Preacher.fromPrimitives({
          id: document._id.toString(),
          name: document.name,
          type: document.type,
          state: document.state,
          gender: document.gender,
          birthdate: document.birthdate,
          baptismDate: document.baptismDate,
          privilege: document.privilege
        })
      : null;
  }

  protected collectionName(): string {
    return 'preachers';
  }
}
