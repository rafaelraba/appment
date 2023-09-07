import { Connection, Schema } from 'mongoose';
import { AggregateRoot } from '../../../domain/AggregateRoot';

export abstract class MongooseRepository<T extends AggregateRoot> {
  protected constructor(private _connection: Promise<Connection>) {}

  public abstract modelName(): string;

  public abstract schema(): Schema;

  protected async model(schema: Schema) {
    return (await this._connection).model(this.modelName(), schema);
  }

  protected async persist(id: string, aggregateRoot: T) {
    const model = await this.model(this.schema());
    await model.updateOne({ _id: id }, { ...aggregateRoot.toPrimitives() }, { upsert: true }).exec();
  }
}
