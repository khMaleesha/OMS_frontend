import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealRoutingModule } from './meal-routing.module';
import { RequestMealComponent } from './request-meal/request-meal.component';
import { ButtonModule, CardModule, CollapseModule, FooterModule, FormModule, GridModule, HeaderModule, NavbarModule, SharedModule, SidebarModule, ToastModule } from '@coreui/angular-pro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';



@NgModule({
  declarations: [
    RequestMealComponent

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
    MealRoutingModule
  ]
})
export class MealModule { }
