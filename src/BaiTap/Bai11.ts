import { AnimalBase } from "./Bai9";

class Dog extends AnimalBase {
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

class Cat extends AnimalBase {
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
