export class Logger {
    private static instante :Logger;

    private constructor(){

    }
    static getInstance(): Logger {
    if (!Logger.instante) {
      Logger.instante = new Logger();
    }
    return Logger.instante;
  }
}