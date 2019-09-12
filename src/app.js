import express from 'express';
import routes from './routes';
import path from 'path';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  /**
   * Para cadastrar todos os middlewares
   */
  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  /**
   * Para registrar todas as rotas
   */
  routes() {
    this.server.use(routes);
  }
}

// export an instance of app server

export default new App().server;
