import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';

import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { AlertComponent, AlertModule, BadgeModule, ButtonModule, CardModule, CollapseModule, FormModule, GridModule, ModalModule, PaginationModule, SharedModule, TableModule, ToastModule } from '@coreui/angular-pro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { EmployeeRegComponent } from './employee-reg/employee-reg.component';

@NgModule({
  declarations: [


    ManageEmployeeComponent,
    DepartmentComponent,
    DesignationComponent,

    EmployeeRegComponent

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
    TableModule,
    AlertModule,
    PaginationModule,
    BadgeModule,
    IconModule,
    PaginationModule,
    ModalModule,
    GridModule,
    SharedModule,
  PaginationModule,
    Ng2SearchPipeModule,

    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
