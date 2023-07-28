import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { HandOverDeviceComponent } from './hand-over-device/hand-over-device.component';
import { RegisterDeviceComponent } from './register-device/register-device.component';
import { ButtonModule, CardModule, CollapseModule, FormModule, GridModule, ToastModule } from '@coreui/angular-pro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageDeviceComponent } from './manage-device/manage-device.component';


@NgModule({
  declarations: [
    HandOverDeviceComponent,
    RegisterDeviceComponent,
    ManageDeviceComponent
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
    DeviceRoutingModule
  ]
})
export class DeviceModule { }
