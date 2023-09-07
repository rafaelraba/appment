import { EnvironmentArranger } from '../arrange/EnvironmentArranger';
import { Connection } from 'mongoose';

export class MongooseEnvironmentArranger extends EnvironmentArranger {
  constructor(private _connection: Promise<Connection>) {
    super();
  }

  private async clearDatabase(): Promise<void> {
    const collections = await this.collections();
    const client = (await this.connection()).getClient();
    for (const collection of collections) {
      await client.db().collection(collection).deleteMany({});
    }
  }

  private async collections(): Promise<string[]> {
    const client = (await this.connection()).getClient();
    const collections = await client.db().listCollections(undefined, { nameOnly: true }).toArray();
    return collections.map(collection => collection.name);
  }

  private connection(): Promise<Connection> {
    return this._connection;
  }

  async arrange(): Promise<void> {
    await this.clearDatabase();
  }

  async close(): Promise<void> {
    await (await this.connection()).getClient().close()
  }
}
