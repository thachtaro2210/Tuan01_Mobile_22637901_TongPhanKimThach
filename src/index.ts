import Person from "./BaiTap/bai1";
import TaiKhoan from "./BaiTap/Bai10";
import Student from "./BaiTap/bai2";
import Car from "./BaiTap/bai3";
import Rectangle from "./BaiTap/bai4";
import BankAccount from "./BaiTap/bai5";
import Book from "./BaiTap/bai6";
import SanPham from "./BaiTap/bai8";

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

console.log("Day la bai 6");
const t = new Book("Nguyen ngoc anh", "Thach lam",2015);
t.printf();


const sp = new SanPham("Test", 0); 
sp.sosanh(); 

const t1 = new TaiKhoan("2405","Tao a ba",100000);
t1.xemSoDu();