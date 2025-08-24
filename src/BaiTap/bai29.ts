interface Movable {
  move(): void;
}


class Car implements Movable {
  move(): void {
    console.log("Car is moving on the road ");
  }
}

class Robot implements Movable {
  move(): void {
    console.log("Robot is walking forward ");
  }
}