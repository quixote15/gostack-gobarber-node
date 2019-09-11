import express from 'express';
import routes from './routes';

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
