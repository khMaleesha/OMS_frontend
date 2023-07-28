import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { ManageVisitorComponent } from './manage-visitor/manage-visitor.component';
import { ButtonModule, CardModule, CollapseModule, FormModule, GridModule, PaginationModule, ToastModule } from '@coreui/angular-pro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisitorAppointmentComponent } from './visitor-appointment/visitor-appointment.component';


@NgModule({
  declarations: [
    ManageVisitorComponent,
    VisitorAppointmentComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    CardModule,
    FormModule,
    FormsModule,
    PaginationModule,
    ReactiveFormsModule,
    ToastModule,
    CollapseModule,
    ButtonModule,
    VisitorRoutingModule
  ]
})
export class VisitorModule { }
