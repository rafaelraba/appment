import config from "../../config";

const mongoConfig = {
  url: config.get('mongo.url')
}

export class MongoConfigFactory {
  static createConfig() {
    return mongoConfig
  }
}
