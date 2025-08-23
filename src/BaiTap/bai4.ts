export default class Rectangle{
    public width:number;
    public height:number;
    constructor(width:number,height:number){
        this.width = width;
        this.height  =  height ;
       
    }
   getDientich(): number {
        return this.width * this.height;
    }

    getChuvi(): number {
        return 2 * (this.width + this.height);
    }

    displayInfo(): void {
        console.log(`Width: ${this.width}`);
        console.log(`Height: ${this.height}`);
        console.log(`Area: ${this.getDientich()}`);
        console.log(`Perimeter: ${this.getChuvi()}`);
    }
}