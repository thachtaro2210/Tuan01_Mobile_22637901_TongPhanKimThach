"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Đã nạp: ${amount}. Số dư hiện tại: ${this.balance}`);
    }
    withdraw(amount) {
        this.balance -= amount;
        console.log(`Đã rút: ${amount}. Số dư còn lại: ${this.balance}`);
    }
    getBalance() {
        return this.balance;
    }
}
exports.default = BankAccount;
