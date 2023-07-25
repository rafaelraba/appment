import { EnvironmentArranger } from '../arrange/EnvironmentArranger';
import { MongoClient } from 'mongodb';

export class MongoEnvironmentArranger extends EnvironmentArranger {
  constructor(private _client: Promise<MongoClient>) {
    super();
  }

  public async arrange(): Promise<void> {
    await this.clearDatabase();
  }

  private async clearDatabase(): Promise<void> {
    const collections = await this.collections();
    const client = await this.client();

    for (const collection of collections) {
      await client.db().collection(collection).deleteMany({});
    }
  }

  private async collections(): Promise<string[]> {
    const client = await this.client();
    const collections = await client.db().listCollections(undefined, { nameOnly: true }).toArray();
    return collections.map(collection => collection.name);
  }

  protected client(): Promise<MongoClient> {
    return this._client;
  }

  public async close(): Promise<void> {
    return (await this.client()).close();
  }
}
