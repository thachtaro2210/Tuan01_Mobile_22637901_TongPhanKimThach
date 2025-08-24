interface Flybase{
    fly(): void ;
}
interface Swimmable {
  swim(): void;
}
export class fish implements Swimmable{
    swim():void {
        console.log("fish swim in pool");
        
    }
}export class bird implements Flybase{
    fly():void {
        console.log("fish swim in pool");
        
    }
}