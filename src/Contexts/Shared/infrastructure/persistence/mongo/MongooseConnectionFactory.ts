import { mongo, Connection, createConnection } from 'mongoose';
import { MongoConfig } from './MongoConfig';

export class MongooseConnectionFactory {
  private static connections: { [key: string]: Connection } = {};

  static async createConnection(contextName: string, config: MongoConfig) {
    let connection = MongooseConnectionFactory.getConnection(contextName);
    if (!connection) {
      const client = await this.createAndConnectClient(config.url);
      connection = createConnection().setClient(client);
      MongooseConnectionFactory.registerConnection(connection, contextName);
    }
    return connection;
  }

  private static async createAndConnectClient(url: string) {
    const client = new mongo.MongoClient(url);

    await client.connect();

    return client;
  }

  private static getConnection(contextName: string) {
    return MongooseConnectionFactory.connections[contextName];
  }

  private static registerConnection(connection: Connection, contextName: string) {
    MongooseConnectionFactory.connections[contextName] = connection;
  }
}
