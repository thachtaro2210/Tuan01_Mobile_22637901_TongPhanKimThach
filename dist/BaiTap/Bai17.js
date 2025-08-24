"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor() {
    }
    static getInstance() {
        if (!Logger.instante) {
            Logger.instante = new Logger();
        }
        return Logger.instante;
    }
}
exports.Logger = Logger;
