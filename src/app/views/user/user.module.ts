import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from '../login/login.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserRoutingModule } from './user-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CardModule, FormModule, GridModule, PaginationModule, TableModule, ToastModule } from '@coreui/angular-pro';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    LoginComponent,
    ManageUserComponent,
    RegisterUserComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    CardModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    TableModule,
    PaginationModule,
    UserRoutingModule
  ]
})
export class UserModule { }
