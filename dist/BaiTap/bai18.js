"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MathUtils {
    constructor() {
    }
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b == 0) {
            console.log("Can not devide 0");
        }
        return a / b;
    }
}
exports.default = MathUtils;
