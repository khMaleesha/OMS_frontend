import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';
import { BadgeModule, ButtonModule, CardModule, CollapseModule, FooterModule, FormModule, GridModule, HeaderModule, NavModule, PaginationModule, SharedModule, SidebarModule, TableModule, ToastModule } from '@coreui/angular-pro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';



@NgModule({
  declarations: [
    ApplyLeaveComponent,
    ApproveLeaveComponent,

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
    PaginationModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    BadgeModule,
    TableModule,
    ReactiveFormsModule,


    LeaveRoutingModule
  ]
})
export class LeaveModule { }
