/*
export class Cab {
}
*/
export class Cab {
   cabId:number;
   cabName:string;
   category:string;
   cabDriver:string;
   rating:number;
   imageName:string;
   about:string;
   



    constructor(
        cabId:number,
        cabName:string,
        category:string,
        cabDriver:string,
        rating:number,
        imageName:string,
        about:string,
        
    )
    {
        this.cabId = cabId;
        this.cabName = cabName;
        this.category = category;
        this.cabDriver = cabDriver;
        this.rating = rating;
        this.imageName = imageName;
        this.about = about;
        

          
    }
}//end of class
