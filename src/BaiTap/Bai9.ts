
interface Animal {
  name: string;
  sound(): void; 
}


class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

class Cat implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log(`${this.name} says: Meow!`);
  }
}

// Usage
const dog: Animal = new Dog("Buddy");
const cat: Animal = new Cat("Kitty");

dog.sound(); 
cat.sound(); 
