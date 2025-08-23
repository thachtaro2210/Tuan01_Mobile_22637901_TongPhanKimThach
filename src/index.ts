import Person from "./BaiTap/bai1";
import Student from "./BaiTap/bai2";
import Car from "./BaiTap/bai3";

const person = new Person("Alice", 25);
person.printScreen();

const student = new Student("Taki",25,10);
student.displayInfo();

const car = new Car("Lambo",1,"taki");
car.printfCar();