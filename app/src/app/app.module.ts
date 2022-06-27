import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RechercheComponent } from './recherche/recherche.component';
import{RouterModule,Routes} from '@angular/router';
import { LogComponent } from './log/log.component';


const appRoutes: Routes =[
  {path:'home',component:HomeComponent},
  {path:'recherche',component:RechercheComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'log',component:LogComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RechercheComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


