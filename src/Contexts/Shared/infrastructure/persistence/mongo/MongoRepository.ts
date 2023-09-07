import { AggregateRoot } from '../../../domain/AggregateRoot';
import { Collection, MongoClient } from 'mongodb';

export abstract class MongoRepository<T extends AggregateRoot> {
  protected constructor(private _client: Promise<MongoClient>) {}

  protected abstract collectionName(): string;

  protected async collection(): Promise<Collection> {
    return (await this._client).db().collection(this.collectionName());
  }

  protected async persist(id: string, aggregateRoot: T): Promise<void> {
    const collection = await this.collection();

    const document = { ...aggregateRoot.toPrimitives(), _id: id, id: undefined };

    await collection.updateOne({  id }, { $set: document }, { upsert: true });
  }

}
