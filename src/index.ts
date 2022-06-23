import express from 'express';

class Application {
  constructor() {
    this.Run();
  }

  public Run() {
    try {
      const app = express();
      

    }
    catch(error) {
      throw error;

    }
  }
}

const application: Application = new Application();