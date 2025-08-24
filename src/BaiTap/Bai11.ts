import { Animal } from "./Bai9";
export class AnimalBase implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // method mặc định, sẽ override ở class con
  sound(): void {
    console.log(`${this.name} phát ra âm thanh.`);
  }
}
export  class Dog extends AnimalBase {
    constructor(name: string) {
        super(name);
    }

    sound(): void {
        this.bark();
    }

    bark(): void {
        console.log(`${this.name} sủa: Gâu gâu!`);
    }
}

 export  class Cat extends AnimalBase {
    constructor(name: string) {
        super(name);
    }

    sound(): void {
        this.meow();
    }

    meow(): void {
        console.log(`${this.name} kêu: Meo meo!`);
    }
}
