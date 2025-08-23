import Person from "./BaiTap/bai1";
import Student from "./BaiTap/bai2";
import Car from "./BaiTap/bai3";
import Rectangle from "./BaiTap/bai4";
import BankAccount from "./BaiTap/bai5";

const person = new Person("Alice", 25);
person.printScreen();

const student = new Student("Taki",25,10);
student.displayInfo();

const car = new Car("Lambo",1,"taki");
car.printfCar();

const rectangle = new Rectangle(10,20);
rectangle.displayInfo();

console.log("Day la ngan hang");

const account = new BankAccount(1000);
console.log("Số tiền có trong ngân hàng là ",account);

account.deposit(500);    
account.withdraw(200);   
console.log("Số dư cuối:", account.getBalance());