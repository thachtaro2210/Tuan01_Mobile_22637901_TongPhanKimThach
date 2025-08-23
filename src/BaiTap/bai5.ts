export default class BankAccount {
    private balance: number;

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Đã nạp: ${amount}. Số dư hiện tại: ${this.balance}`);
    }

    withdraw(amount: number): void {
      
       
        this.balance -= amount;
        console.log(`Đã rút: ${amount}. Số dư còn lại: ${this.balance}`);
    }

    getBalance(): number {
        return this.balance;
    }
}


