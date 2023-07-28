import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { DeviceComponent } from './device/device.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeaveComponent } from './leave/leave.component';
import { MealComponent } from './meal/meal.component';

import { VisitorComponent } from './visitor/visitor.component';
import { ButtonModule, CardModule, CollapseModule, FooterModule, FormModule, GridModule, HeaderModule, NavbarModule, SharedModule, SidebarModule, ToastModule } from '@coreui/angular-pro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';


@NgModule({
  declarations: [
    DeviceComponent,
    EmployeeComponent,
    LeaveComponent,
    MealComponent,
  
    VisitorComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    CardModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    CollapseModule,
    ButtonModule,
    SharedModule,
    FooterModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavbarModule,
    ButtonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
