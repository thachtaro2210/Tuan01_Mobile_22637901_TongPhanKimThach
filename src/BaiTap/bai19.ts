class Animal {
  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

export class Dogs extends Animal {
  override makeSound(): void {
    console.log("Woof! Woof!");
  }
}

export class Cats extends Animal {
  override makeSound(): void {
    console.log("Meow~");
  }
}