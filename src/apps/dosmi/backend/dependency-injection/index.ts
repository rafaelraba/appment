import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';

const env = process.env.NODE_ENV || 'dev';

const container = new ContainerBuilder();
const loader = new YamlFileLoader(container);

const loadContainer = async () => {
  await loader.load(`${__dirname}/application_${env}.yaml`);
};

export { container, loadContainer };
