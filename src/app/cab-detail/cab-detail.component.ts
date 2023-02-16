import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Cab } from '../cab';
import { CabOperationsService } from '../cab-operations.service';
@Component({
  selector: 'app-cab-detail',
  templateUrl: './cab-detail.component.html',
  styleUrls: ['./cab-detail.component.css']
})
export class CabDetailComponent {

  __cabService:CabOperationsService; // creating object of Service layer
  router:Router;
  activeRoute:ActivatedRoute;
  c:Cab = new Cab(0,'','','',0,'','');
    constructor(cabService:CabOperationsService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__cabService = cabService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchCabId= this.activeRoute.snapshot.params['cid']; // extract value from prameter(URI)
    console.log(searchCabId);
    this.c = this.__cabService.getCabByNumber(parseInt(searchCabId)); // get data from service class
    console.log(this.c);
  }

}
