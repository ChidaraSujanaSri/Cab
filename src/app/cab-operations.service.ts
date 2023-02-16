import { Injectable } from '@angular/core';
import { Cab } from './cab';

@Injectable({
  providedIn: 'root'
})
export class CabOperationsService {

  
  constructor() { }

  cabArr:Cab[] = [];


  addCab(cabFromUser:Cab)
  {

    this.cabArr.push(cabFromUser); 
    console.log("Inside Cab Service : Cab Added "+cabFromUser.cabId);
    console.log(" Total Cabs Are :- "+this.cabArr.length);

  }

  getCabArr():Cab[]
  {
    return this.cabArr;
  }

  getCabByNumber(searchCabId:number):Cab
  {
    let outputCab:Cab = new Cab(0,'','','',0,'','');
    for(let i=0;i<this.cabArr.length;i++)
    {
      let thisCab:Cab = this.cabArr[i];
        if(thisCab.cabId == searchCabId)
        {
          outputCab = thisCab;
          break;
        }
    }
    
    return outputCab;
  }



  getCabsByCategory(filterCategory:string):Cab[]
  {
    // localhost:8080/api/course/{category}
   let outputArr:Cab[] = [];

    this.cabArr.forEach(c=>{
      if(c.category == filterCategory)
      {
        outputArr.push(c);
      }
    });

    return outputArr;
  }
}
