import { Preacher, PreacherId, PreacherRepository } from '../../../domain';
import { Schema } from 'mongoose';
import { MongooseRepository } from '../../../../../Shared/infrastructure/persistence/mongo/MongooseRepository';

const preacherSchema = new Schema({
  _id: String,
  name: String,
  type: String,
  state: String,
  gender: String,
  birthdate: Date,
  baptismDate: Date,
  privilege: String
});

export class MongoPreacherRepository extends MongooseRepository<Preacher> implements PreacherRepository {
  public save(preacher: Preacher): Promise<void> {
    return this.persist(preacher.id.value, preacher);
  }

  public async search(id: PreacherId): Promise<Preacher | null> {
    const model = await this.model(this.schema());
    const document = await model.findOne<Preacher>({ _id: id.value });

    return document
      ? Preacher.fromPrimitives({
          id: document.id.value,
          type: document.type.value,
          name: document.name.value,
          state: document.state.value,
          gender: document.gender.value,
          birthdate: document.birthdate.value,
          baptismDate: document.baptismDate.value,
          privilege: document.privilege.toString()
        })
      : null;
  }

  schema(): Schema {
    return preacherSchema;
  }

  modelName(): string {
    return 'Preachers';
  }
}
