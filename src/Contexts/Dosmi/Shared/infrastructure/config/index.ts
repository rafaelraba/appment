import convict from "convict";

const dosmiConfig = convict({
  env: {
    doc:'The application environment',
    format: ['production', 'development', 'test'],
    default: 'default',
    env: 'NODE_ENV'
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default: 'mongodb://localhost:27017/dosmi-dev'

    }
  }
})
dosmiConfig.loadFile([__dirname + '/default.json', __dirname + '/' + dosmiConfig.get('env') + '.json'])

export default dosmiConfig
