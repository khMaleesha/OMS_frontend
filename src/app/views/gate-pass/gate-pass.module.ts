import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatePassRoutingModule } from './gate-pass-routing.module';

import { CreateGatePassComponent } from './personal-gate-pass/create-gate-pass/create-gate-pass.component';
import { ApproveGatePassComponent } from './personal-gate-pass/approve-gate-pass/approve-gate-pass.component';
import { SecurityGatePassComponent } from './personal-gate-pass/security-gate-pass/security-gate-pass.component';
import { ButtonModule, CardModule, CollapseModule, FormModule, GridModule, SharedModule, TableModule, ToastModule } from '@coreui/angular-pro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentheadApprovelComponent } from './personal-gate-pass/departmenthead-approvel/departmenthead-approvel.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [

    CreateGatePassComponent,
    ApproveGatePassComponent,
    SecurityGatePassComponent,
    DepartmentheadApprovelComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    CardModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ToastModule,
    CollapseModule,
    ButtonModule,
    SharedModule,
    Ng2SearchPipeModule,
    GatePassRoutingModule
  ]
})
export class GatePassModule { }
