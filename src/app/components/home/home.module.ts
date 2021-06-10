import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBodyComponent } from './components/home-body/home-body.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    HomeBodyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
