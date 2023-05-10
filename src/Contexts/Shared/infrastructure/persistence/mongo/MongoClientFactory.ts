import { MongoClient } from 'mongodb';
import { MongoConfig } from './MongoConfig';

export class MongoClientFactory {
  private static clients: { [key: string]: MongoClient } = {};

  static async createClient(contextName: string, config: MongoConfig): Promise<MongoClient> {
    let client = MongoClientFactory.getClient(contextName);

    if (!client) {
      client = await MongoClientFactory.createAndConnectClient(config);
      MongoClientFactory.registerClient(client, contextName);
    }

    return client;
  }

  private static getClient(contextName: string) {
    return MongoClientFactory.clients[contextName];
  }

  private static async createAndConnectClient(config: MongoConfig) {
    const client = new MongoClient(config.url);

    await client.connect();

    return client;
  }

  private static registerClient(client: MongoClient, contextName: string) {
    MongoClientFactory.clients[contextName] = client;
  }
}
