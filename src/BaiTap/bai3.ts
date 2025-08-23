export default class  Car{
    public brand: String;
    public model: number;
    public year: String;
    constructor(brand : String , model : number , year : String){
        this.brand = brand;
        this. model  =  model ;
        this.year = year;
    }
    printfCar(){
        console.log(`Brand : ${this.brand}`);
        console.log(`Model : ${this.model}`);
        console.log(`Year : ${this.year}`);
    }
}