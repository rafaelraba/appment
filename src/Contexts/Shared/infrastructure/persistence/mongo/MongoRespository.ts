import { AggregateRoot } from '../../../domain/AggregateRoot';
import { Collection, MongoClient, ObjectId } from 'mongodb';

export abstract class MongoRespository<T extends AggregateRoot> {
  protected constructor(private _client: Promise<MongoClient>) {}

  protected abstract collectionName(): string;

  protected async collection(): Promise<Collection> {
    return (await this._client).db().collection(this.collectionName());
  }

  protected async presist(id: string, aggregateRoot: T): Promise<void> {
    const collection = await this.collection();

    const document = { ...aggregateRoot.toPrimitives(), _id: id, id: undefined };

    await collection.updateOne({ _id: new ObjectId(id) }, { $set: document }, { upsert: true });
  }
}
