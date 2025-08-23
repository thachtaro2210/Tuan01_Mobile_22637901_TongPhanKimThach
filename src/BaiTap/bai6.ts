export default class Book{
    // với các thuộc tính tiêu đề, tác giả, năm.
    public tittle: String ;
    public author: String;
    public year: number;
    constructor(tittle:String,author:String,year:number){
        this.tittle = tittle;
        this.author = author;
        this.year = year;
    }
    printf(){
        console.log(`Tieu de : ${this.tittle}`);
        console.log(`Tac gia : ${this.author}`);
         console.log(`Nam : ${this.author}`);
        
        
    }
}