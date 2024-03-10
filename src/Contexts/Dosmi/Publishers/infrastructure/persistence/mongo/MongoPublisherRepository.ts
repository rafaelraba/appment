import { Publisher, PublisherId, PublisherRepository } from '../../../domain';
import { Schema } from 'mongoose';
import { MongooseRepository } from '../../../../../Shared/infrastructure/persistence/mongo/MongooseRepository';

const publisherSchema = new Schema({
  _id: String,
  name: String,
  type: String,
  state: String,
  gender: String,
  birthdate: Date,
  baptismDate: Date,
  privilege: String
});

export class MongoPublisherRepository extends MongooseRepository<Publisher> implements PublisherRepository {
  public save(publisher: Publisher): Promise<void> {
    return this.persist(publisher.id.value, publisher);
  }

  public async search(id: PublisherId): Promise<Publisher | null> {
    const model = await this.model(this.schema());
    const document = await model.findOne({ _id: id.value });
    return document
      ? Publisher.fromPrimitives({
          id: id.value,
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
    return publisherSchema;
  }

  modelName(): string {
    return 'Publishers';
  }
}
