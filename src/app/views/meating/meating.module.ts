import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeatingRoutingModule } from './meating-routing.module';

import { SheduleMeatingComponent } from './shedule-meating/shedule-meating.component';


@NgModule({
  declarations: [

    SheduleMeatingComponent
  ],
  imports: [
    CommonModule,
    MeatingRoutingModule
  ]
})
export class MeatingModule { }
