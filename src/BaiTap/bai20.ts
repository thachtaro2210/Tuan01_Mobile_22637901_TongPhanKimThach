interface Vehicle{
    start() : void;

}

export class Car implements Vehicle{
    start():void {
        console.log("Car is start");
        
    }
}
export class Bike implements Vehicle{
    start():void {
        console.log("bike is start");
        
    }
}