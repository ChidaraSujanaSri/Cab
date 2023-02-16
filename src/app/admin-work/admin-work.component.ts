import { Component } from '@angular/core';
import { Cab } from '../cab';
import { CabOperationsService } from '../cab-operations.service';
import {Pipe1} from '../pipe'

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {

   __cabService:CabOperationsService;

  constructor(cabService:CabOperationsService)
  {
    this.__cabService = cabService;
  }

  readCab(cabId:string,cabName:string,category:string,driver:string,rating:string,about:string,image:string)
  {
      console.log(cabId+" "+cabName+" "+category+" "+driver+" "+rating+" "+about+" "+image);
      let cabFromUser:Cab = new Cab(parseInt(cabId),cabName,category,driver,parseInt(rating),image,about);
      this.__cabService.addCab(cabFromUser);
  }



}

