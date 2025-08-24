export default   class  MathUtils{
    private constructor() {
        
    }
    static add (a:number,b:number){
        return a+b;
    }
    static subtract (a:number,b:number){
         return a-b;
    }
    static multiply(a:number,b:number){
         return a*b;
    }
    static divide (a:number,b:number){
      
        if(b == 0 ){
            console.log("Can not devide 0");
            
        }
          return a/b;
    }
}