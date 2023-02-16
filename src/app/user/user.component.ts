import { Component } from '@angular/core';
import { Cab } from '../cab';
import { CabOperationsService } from '../cab-operations.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pipe1 } from '../pipe';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
   // no need to write @Autowire bcoz service class is already @Injectable
  __cabService:CabOperationsService; // creating object of Service layer
  router:Router;

  allCab : Array<Cab> = [];
  //watchList : Array<Course> = [];
  //watchlistCount:number=0 ;

  ratingHighCss:string = "color:crimson";
  ratingLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  ratingNormalCSS:string = "color:black";

  constructor(cabService:CabOperationsService,router:Router)
  {
    this.__cabService = cabService;
    this.allCab = this.__cabService.getCabArr();
    this.router = router;
    console.log(this.allCab.length);
  }
   
  


  viewCabDetails(cid:string)
  {
    this.router.navigate(['cabDetail',cid]);
  }


  bookYourRide(cab:string)
  {
    let cabId = parseInt(cab);
    console.log(" code to book "+cabId+" cab");

  }

  

  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allCab = this.__cabService.getCabsByCategory(filterValue);
  }
}//end class

