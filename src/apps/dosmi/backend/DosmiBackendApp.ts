import { Server } from './server';
import { loadContainer } from "./dependency-injection";

export class DosmiBackendApp {
  server?: Server;

  async start() {
    const port = process.env.PORT || '5500';
    await loadContainer()
    this.server = new Server(port);
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }

}
