import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { PipeTaskComponent } from './pipe-task/pipe-task.component';
import { Pipe1 } from './pipe';
import { HeaderComponent } from './header/header.component';
import { CabDetailComponent } from './cab-detail/cab-detail.component';
import { RouterModule,Routes } from '@angular/router';

const allLinks:Routes = [
  {path:'bookyourride',component:AdminWorkComponent},
  {path:'cab',component:UserComponent},
  {path:'cabDetail/:cid',component:CabDetailComponent},
  {path:'viewCabDetails',component:UserComponent}
  

  
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminWorkComponent,
    PipeTaskComponent,
    Pipe1,
    HeaderComponent,
    CabDetailComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
